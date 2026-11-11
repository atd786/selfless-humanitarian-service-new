<?php
/**
 * Selfless Humanitarian Service - Form Submission Handler
 * Stores donor and sponsor inquiries into the database.
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed. Use POST.']);
    exit;
}

require_once __DIR__ . '/db.php';

$pdo = getDBConnection();
if (!$pdo) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Database storage currently unavailable.']);
    exit;
}

// Read raw body (JSON) or standard form POST
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);
if (!is_array($data) || empty($data)) {
    $data = $_POST;
}

$name           = isset($data['name']) ? trim(strip_tags((string)$data['name'])) : '';
$email          = isset($data['email']) ? trim(filter_var((string)$data['email'], FILTER_SANITIZE_EMAIL)) : '';
$phone          = isset($data['phone']) ? trim(strip_tags((string)$data['phone'])) : '';
$subject        = isset($data['subject']) ? trim(strip_tags((string)$data['subject'])) : 'Sponsorship Inquiry';
$tier_or_amount = isset($data['tier_or_amount']) ? trim(strip_tags((string)$data['tier_or_amount'])) : '';
$message        = isset($data['message']) ? trim(strip_tags((string)$data['message'])) : '';
$ip_address     = $_SERVER['REMOTE_ADDR'] ?? '';

// Validation
if (empty($name)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Full name is required.']);
    exit;
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Valid email address is required.']);
    exit;
}

try {
    $stmt = $pdo->prepare("
        INSERT INTO `submissions` (`name`, `email`, `phone`, `subject`, `tier_or_amount`, `message`, `status`, `ip_address`, `created_at`)
        VALUES (:name, :email, :phone, :subject, :tier_or_amount, :message, 'New', :ip, NOW())
    ");

    $stmt->execute([
        ':name'           => $name,
        ':email'          => $email,
        ':phone'          => $phone,
        ':subject'        => $subject,
        ':tier_or_amount' => $tier_or_amount,
        ':message'        => $message,
        ':ip'             => $ip_address,
    ]);

    $insertId = $pdo->lastInsertId();

    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your inquiry has been securely recorded. Our team will contact you shortly.',
        'id'      => $insertId,
        'db_mode' => $GLOBALS['DB_TYPE'] ?? 'active'
    ]);
} catch (Exception $e) {
    error_log("Insert Submission Error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to save submission. Please try again.']);
}
