<?php
/**
 * Selfless Humanitarian Service - Administrative Management Portal
 * Secure dashboard to view, manage, and export donor inquiries.
 */

session_start();

$authPasswordHash = '$2y$10$v0Z6oKzL6J/31mS0Vf1mQ.4O1.6sK2o7kE2Q3K4M5N6P7Q8R9S0T1'; // fallback
// Plain comparison against the required administrative key
$ADMIN_PASS = 'Human.123';

// Handle Logout
if (isset($_GET['action']) && $_GET['action'] === 'logout') {
    $_SESSION['selfless_admin_logged'] = false;
    unset($_SESSION['selfless_admin_logged']);
    session_destroy();
    header("Location: index.php");
    exit;
}

// Handle Login POST
$loginError = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['login_submit'])) {
    $submittedPassword = $_POST['admin_password'] ?? '';
    if ($submittedPassword === $ADMIN_PASS) {
        $_SESSION['selfless_admin_logged'] = true;
        header("Location: index.php");
        exit;
    } else {
        $loginError = 'Invalid administrative credentials. Access denied.';
    }
}

// Check Authentication
$isLoggedIn = !empty($_SESSION['selfless_admin_logged']) && $_SESSION['selfless_admin_logged'] === true;

require_once __DIR__ . '/../api/db.php';
$pdo = getDBConnection();

// Handle AJAX / Action requests for logged-in admin
if ($isLoggedIn && isset($_GET['action'])) {
    $action = $_GET['action'];

    // Update Status
    if ($action === 'update_status' && $_SERVER['REQUEST_METHOD'] === 'POST') {
        header('Content-Type: application/json');
        $id = (int)($_POST['id'] ?? 0);
        $newStatus = trim($_POST['status'] ?? 'New');
        $allowed = ['New', 'Contacted', 'In Progress', 'Completed'];
        if ($id > 0 && in_array($newStatus, $allowed, true)) {
            $stmt = $pdo->prepare("UPDATE `submissions` SET `status` = :st WHERE `id` = :id");
            $stmt->execute([':st' => $newStatus, ':id' => $id]);
            echo json_encode(['success' => true]);
            exit;
        }
        echo json_encode(['success' => false, 'error' => 'Invalid parameters']);
        exit;
    }

    // Delete Record
    if ($action === 'delete' && isset($_GET['id'])) {
        $id = (int)$_GET['id'];
        if ($id > 0) {
            $stmt = $pdo->prepare("DELETE FROM `submissions` WHERE `id` = :id");
            $stmt->execute([':id' => $id]);
        }
        header("Location: index.php?msg=deleted");
        exit;
    }

    // Export CSV
    if ($action === 'export_csv') {
        header('Content-Type: text/csv; charset=utf-8');
        header('Content-Disposition: attachment; filename=selfless_donor_inquiries_' . date('Y-m-d') . '.csv');
        $output = fopen('php://output', 'w');
        fputcsv($output, ['ID', 'Date & Time', 'Full Name', 'Email', 'Phone', 'Subject', 'Tier / Amount', 'Message', 'Status', 'IP Address']);

        $stmt = $pdo->query("SELECT * FROM `submissions` ORDER BY `id` DESC");
        while ($row = $stmt->fetch()) {
            fputcsv($output, [
                $row['id'],
                $row['created_at'],
                $row['name'],
                $row['email'],
                $row['phone'],
                $row['subject'],
                $row['tier_or_amount'],
                $row['message'],
                $row['status'],
                $row['ip_address']
            ]);
        }
        fclose($output);
        exit;
    }
}

// Fetch submissions for display
$submissions = [];
$totalCount = 0;
$newCount = 0;
$contactedCount = 0;
$completedCount = 0;

if ($isLoggedIn && $pdo) {
    try {
        $stmt = $pdo->query("SELECT * FROM `submissions` ORDER BY `id` DESC");
        $submissions = $stmt->fetchAll();
        $totalCount = count($submissions);
        foreach ($submissions as $s) {
            if ($s['status'] === 'New') $newCount++;
            elseif ($s['status'] === 'Contacted') $contactedCount++;
            elseif ($s['status'] === 'Completed') $completedCount++;
        }
    } catch (Exception $e) {
        error_log("Fetch Submissions Error: " . $e->getMessage());
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Portal | Selfless Humanitarian Service</title>
  <link rel="icon" type="image/x-icon" href="../favicon.ico">
  <link rel="shortcut icon" href="../favicon.ico">
  <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="192x192" href="../favicon-192x192.png">
  <link rel="apple-touch-icon" href="../apple-touch-icon.png">
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #880015;
      --primary-dark: #5c0511;
      --primary-light: #b01b2e;
      --primary-subtle: #fdf2f4;
      --accent: #d97706;
      --accent-hover: #b45309;
      --bg-page: #f8fafc;
      --card-bg: #ffffff;
      --border: #e2e8f0;
      --text-dark: #0f172a;
      --text-body: #334155;
      --text-muted: #64748b;
      --radius: 10px;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', -apple-system, sans-serif; }
    body { background-color: var(--bg-page); color: var(--text-body); min-height: 100vh; display: flex; flex-direction: column; }

    /* Login Screen */
    .login-container {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 20px;
      background: radial-gradient(circle at top right, #fdf2f4 0%, #f1f5f9 100%);
    }
    .login-card {
      background: #ffffff;
      border-radius: 16px;
      padding: 40px 36px;
      max-width: 440px;
      width: 100%;
      box-shadow: 0 20px 40px -10px rgba(15, 23, 42, 0.12);
      border: 1px solid var(--border);
      text-align: center;
    }
    .login-logo {
      height: 64px;
      margin-bottom: 16px;
    }
    .login-title {
      font-size: 1.4rem;
      font-weight: 800;
      color: var(--text-dark);
      margin-bottom: 6px;
    }
    .login-subtitle {
      font-size: 0.88rem;
      color: var(--text-muted);
      margin-bottom: 24px;
    }
    .login-form {
      text-align: left;
    }
    .form-group {
      margin-bottom: 20px;
    }
    .form-label {
      display: block;
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--text-dark);
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .form-input {
      width: 100%;
      padding: 13px 16px;
      border: 1.5px solid var(--border);
      border-radius: var(--radius);
      font-size: 16px; /* Prevents iOS auto-zoom */
      transition: all 0.2s;
    }
    .form-input:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(136, 0, 21, 0.12);
    }
    .btn-login {
      width: 100%;
      padding: 13px;
      background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
      color: #ffffff;
      border: none;
      border-radius: var(--radius);
      font-size: 0.95rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 0 4px 12px rgba(136, 0, 21, 0.25);
    }
    .btn-login:hover {
      background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary) 100%);
      transform: translateY(-1px);
    }
    .alert-error {
      background-color: #fef2f2;
      border: 1px solid #fecaca;
      color: #b91c1c;
      padding: 10px 14px;
      border-radius: 8px;
      font-size: 0.85rem;
      margin-bottom: 18px;
      text-align: center;
    }

    /* Dashboard Header */
    .admin-header {
      background: #ffffff;
      border-bottom: 1px solid var(--border);
      padding: 14px 28px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    }
    .brand-wrap {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
    }
    .brand-logo {
      height: 44px;
    }
    .brand-info h2 {
      font-size: 1.1rem;
      font-weight: 800;
      color: var(--text-dark);
      line-height: 1.2;
    }
    .brand-info span {
      font-size: 0.75rem;
      color: var(--primary);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .header-actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .db-status-pill {
      font-size: 0.75rem;
      font-weight: 700;
      padding: 5px 12px;
      border-radius: 20px;
      background-color: #ecfdf5;
      color: #047857;
      border: 1px solid #a7f3d0;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .db-status-pill::before {
      content: '';
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background-color: #10b981;
      display: inline-block;
    }
    .btn-logout {
      padding: 8px 16px;
      background: #f1f5f9;
      color: #475569;
      border: 1px solid var(--border);
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.2s;
    }
    .btn-logout:hover {
      background: #fee2e2;
      color: #b91c1c;
      border-color: #fca5a5;
    }

    /* Main Content */
    .admin-main {
      flex: 1;
      padding: 28px;
      max-width: 1400px;
      width: 100%;
      margin: 0 auto;
    }

    /* KPI Cards */
    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }
    .kpi-card {
      background: #ffffff;
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
    }
    .kpi-label {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin-bottom: 6px;
    }
    .kpi-val {
      font-size: 2rem;
      font-weight: 800;
      color: var(--text-dark);
      line-height: 1;
    }
    .kpi-card.accent .kpi-val { color: var(--primary); }
    .kpi-card.warning .kpi-val { color: var(--accent); }
    .kpi-card.success .kpi-val { color: #059669; }

    /* Control Toolbar */
    .toolbar {
      background: #ffffff;
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 16px 20px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      margin-bottom: 20px;
    }
    .search-box {
      flex: 1;
      min-width: 240px;
      max-width: 400px;
      position: relative;
    }
    .search-input {
      width: 100%;
      padding: 10px 14px;
      border: 1.5px solid var(--border);
      border-radius: 8px;
      font-size: 0.9rem;
    }
    .search-input:focus {
      outline: none;
      border-color: var(--primary);
    }
    .toolbar-actions {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .btn-export {
      padding: 9px 16px;
      background: linear-gradient(135deg, #059669 0%, #047857 100%);
      color: #ffffff;
      border: none;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 700;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
      box-shadow: 0 2px 6px rgba(5, 150, 105, 0.2);
    }
    .btn-export:hover {
      background: #047857;
    }
    .btn-refresh {
      padding: 9px 14px;
      background: #ffffff;
      color: var(--text-body);
      border: 1px solid var(--border);
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
    }
    .btn-refresh:hover { background: #f8fafc; }

    /* Data Table Card */
    .table-card {
      background: #ffffff;
      border: 1px solid var(--border);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
    }
    .table-responsive {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
      font-size: 0.88rem;
    }
    thead {
      background-color: #f8fafc;
      border-bottom: 2px solid var(--border);
    }
    th {
      padding: 14px 16px;
      font-weight: 700;
      color: var(--text-dark);
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      white-space: nowrap;
    }
    td {
      padding: 16px;
      border-bottom: 1px solid var(--border);
      vertical-align: top;
      color: var(--text-body);
    }
    tbody tr:hover {
      background-color: #fbfcfe;
    }

    .donor-name {
      font-weight: 700;
      color: var(--text-dark);
      display: block;
      font-size: 0.95rem;
    }
    .donor-time {
      font-size: 0.75rem;
      color: var(--text-muted);
      white-space: nowrap;
      margin-top: 3px;
    }
    .contact-line {
      display: block;
      font-size: 0.82rem;
      margin-top: 2px;
    }
    .contact-link {
      color: var(--primary);
      text-decoration: none;
      font-weight: 600;
    }
    .contact-link:hover { text-decoration: underline; }
    .wa-link {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      color: #047857;
      font-weight: 700;
      text-decoration: none;
      background: #ecfdf5;
      padding: 3px 8px;
      border-radius: 6px;
      font-size: 0.78rem;
      margin-top: 4px;
      border: 1px solid #a7f3d0;
    }
    .wa-link:hover { background: #d1fae5; }

    .subject-pill {
      display: inline-block;
      padding: 4px 10px;
      background: var(--primary-subtle);
      color: var(--primary);
      font-weight: 700;
      border-radius: 6px;
      font-size: 0.78rem;
    }
    .tier-badge {
      display: block;
      font-size: 0.78rem;
      color: var(--accent-hover);
      font-weight: 700;
      margin-top: 4px;
    }
    .message-text {
      max-width: 320px;
      font-size: 0.85rem;
      line-height: 1.45;
      color: #475569;
      white-space: pre-wrap;
      word-break: break-word;
    }

    /* Status Selector */
    .status-select {
      padding: 6px 10px;
      border-radius: 8px;
      font-size: 0.8rem;
      font-weight: 700;
      border: 1.5px solid var(--border);
      background-color: #ffffff;
      cursor: pointer;
      transition: all 0.2s;
    }
    .status-select.status-New { background-color: #eff6ff; color: #1d4ed8; border-color: #bfdbfe; }
    .status-select.status-Contacted { background-color: #fef3c7; color: #b45309; border-color: #fde68a; }
    .status-select.status-Completed { background-color: #ecfdf5; color: #047857; border-color: #a7f3d0; }

    .btn-delete {
      color: #94a3b8;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 0.8rem;
      font-weight: 600;
      padding: 4px 8px;
      border-radius: 4px;
      transition: all 0.2s;
    }
    .btn-delete:hover {
      color: #dc2626;
      background: #fee2e2;
    }

    .empty-state {
      text-align: center;
      padding: 60px 20px;
      color: var(--text-muted);
    }
    .empty-state h3 {
      font-size: 1.1rem;
      color: var(--text-dark);
      margin-bottom: 6px;
    }

    @media (max-width: 768px) {
      .admin-header { padding: 12px 16px; }
      .admin-main { padding: 16px; }
      .brand-info h2 { font-size: 0.95rem; }
      .toolbar { flex-direction: column; align-items: stretch; }
      .search-box { max-width: 100%; }
      .toolbar-actions { justify-content: space-between; }
    }
  </style>
</head>
<body>

<?php if (!$isLoggedIn): ?>
  <!-- Login Screen -->
  <div class="login-container">
    <div class="login-card">
      <img src="../logo.png" alt="Selfless NGO Logo" class="login-logo">
      <h1 class="login-title">Admin Management Portal</h1>
      <p class="login-subtitle">Selfless Humanitarian Service • Donor Administration</p>

      <?php if (!empty($loginError)): ?>
        <div class="alert-error"><?= htmlspecialchars($loginError) ?></div>
      <?php endif; ?>

      <form method="POST" action="index.php" class="login-form">
        <div class="form-group">
          <label class="form-label" for="admin_password">Administrator Access Key</label>
          <input 
            type="password" 
            id="admin_password" 
            name="admin_password" 
            class="form-input" 
            placeholder="Enter authorized administrative password" 
            required 
            autofocus
          >
        </div>
        <button type="submit" name="login_submit" class="btn-login">
          Verify & Sign In
        </button>
      </form>
    </div>
  </div>

<?php else: ?>
  <!-- Dashboard Topbar -->
  <header class="admin-header">
    <a href="index.php" class="brand-wrap">
      <img src="../logo.png" alt="Selfless Logo" class="brand-logo">
      <div class="brand-info">
        <h2>Selfless Humanitarian Service</h2>
        <span>Administration & Donor Portal</span>
      </div>
    </a>
    <div class="header-actions">
      <span class="db-status-pill" title="Connected to MySQL (u900031095_selfless)">
        Database: <?= strtoupper($GLOBALS['DB_TYPE'] ?? 'ACTIVE') ?>
      </span>
      <a href="index.php?action=logout" class="btn-logout">Sign Out</a>
    </div>
  </header>

  <!-- Main Content Area -->
  <main class="admin-main">
    <!-- Top KPI Cards -->
    <div class="kpi-grid">
      <div class="kpi-card accent">
        <div class="kpi-label">Total Inquiries</div>
        <div class="kpi-val"><?= $totalCount ?></div>
      </div>
      <div class="kpi-card warning">
        <div class="kpi-label">New / Pending</div>
        <div class="kpi-val"><?= $newCount ?></div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Contacted</div>
        <div class="kpi-val"><?= $contactedCount ?></div>
      </div>
      <div class="kpi-card success">
        <div class="kpi-label">Completed Sponsors</div>
        <div class="kpi-val"><?= $completedCount ?></div>
      </div>
    </div>

    <!-- Control Toolbar -->
    <div class="toolbar">
      <div class="search-box">
        <input 
          type="text" 
          id="searchInput" 
          class="search-input" 
          placeholder="Filter by name, email, phone or message..."
          onkeyup="filterTable()"
        >
      </div>

      <div class="toolbar-actions">
        <a href="index.php?action=export_csv" class="btn-export">
          📥 Download CSV Spreadsheet
        </a>
        <a href="index.php" class="btn-refresh">↻ Refresh</a>
      </div>
    </div>

    <!-- Data Table -->
    <div class="table-card">
      <div class="table-responsive">
        <table id="submissionsTable">
          <thead>
            <tr>
              <th>#ID</th>
              <th>Donor Details</th>
              <th>Contact Info</th>
              <th>Cause & Tier</th>
              <th>Inquiry Message</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <?php if (empty($submissions)): ?>
              <tr>
                <td colspan="7">
                  <div class="empty-state">
                    <h3>No Form Submissions Yet</h3>
                    <p>New inquiries submitted from the website will automatically populate here in real-time.</p>
                  </div>
                </td>
              </tr>
            <?php else: ?>
              <?php foreach ($submissions as $row): ?>
                <?php
                  $cleanPhone = preg_replace('/[^0-9]/', '', (string)$row['phone']);
                  $waUrl = !empty($cleanPhone) ? "https://wa.me/" . $cleanPhone : null;
                ?>
                <tr data-row-id="<?= $row['id'] ?>">
                  <td><strong>#<?= $row['id'] ?></strong></td>
                  <td>
                    <span class="donor-name"><?= htmlspecialchars($row['name']) ?></span>
                    <span class="donor-time"><?= date('M j, Y • g:i A', strtotime($row['created_at'])) ?></span>
                  </td>
                  <td>
                    <span class="contact-line">
                      <a href="mailto:<?= htmlspecialchars($row['email']) ?>" class="contact-link">
                        <?= htmlspecialchars($row['email']) ?>
                      </a>
                    </span>
                    <?php if (!empty($row['phone'])): ?>
                      <span class="contact-line">
                        <?= htmlspecialchars($row['phone']) ?>
                      </span>
                      <?php if ($waUrl): ?>
                        <a href="<?= $waUrl ?>" target="_blank" rel="noopener noreferrer" class="wa-link">
                          💬 WhatsApp
                        </a>
                      <?php endif; ?>
                    <?php endif; ?>
                  </td>
                  <td>
                    <span class="subject-pill"><?= htmlspecialchars($row['subject'] ?: 'Inquiry') ?></span>
                    <?php if (!empty($row['tier_or_amount'])): ?>
                      <span class="tier-badge"><?= htmlspecialchars($row['tier_or_amount']) ?></span>
                    <?php endif; ?>
                  </td>
                  <td>
                    <div class="message-text"><?= nl2br(htmlspecialchars($row['message'] ?: 'No message provided')) ?></div>
                  </td>
                  <td>
                    <select 
                      class="status-select status-<?= htmlspecialchars($row['status']) ?>"
                      onchange="updateStatus(<?= $row['id'] ?>, this.value, this)"
                    >
                      <option value="New" <?= $row['status'] === 'New' ? 'selected' : '' ?>>New</option>
                      <option value="Contacted" <?= $row['status'] === 'Contacted' ? 'selected' : '' ?>>Contacted</option>
                      <option value="In Progress" <?= $row['status'] === 'In Progress' ? 'selected' : '' ?>>In Progress</option>
                      <option value="Completed" <?= $row['status'] === 'Completed' ? 'selected' : '' ?>>Completed</option>
                    </select>
                  </td>
                  <td>
                    <button 
                      class="btn-delete" 
                      onclick="confirmDelete(<?= $row['id'] ?>)" 
                      title="Delete submission"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              <?php endforeach; ?>
            <?php endif; ?>
          </tbody>
        </table>
      </div>
    </div>
  </main>

  <script>
    function updateStatus(id, newStatus, selectElem) {
      selectElem.className = 'status-select status-' + newStatus;
      const formData = new FormData();
      formData.append('id', id);
      formData.append('status', newStatus);

      fetch('index.php?action=update_status', {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(data => {
        if (!data.success) {
          alert('Failed to update status.');
        }
      })
      .catch(err => {
        console.error(err);
      });
    }

    function confirmDelete(id) {
      if (confirm('Are you sure you want to permanently delete submission #' + id + '?')) {
        window.location.href = 'index.php?action=delete&id=' + id;
      }
    }

    function filterTable() {
      const input = document.getElementById('searchInput');
      const filter = input.value.toLowerCase();
      const rows = document.querySelectorAll('#submissionsTable tbody tr');

      rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        if (text.includes(filter)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    }
  </script>
<?php endif; ?>

</body>
</html>
