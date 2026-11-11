<?php
/**
 * Selfless Humanitarian Service - Database Connection & Schema Handler
 * Connects to MySQL with automatic table provisioning and resilient fallback.
 */

function getDBConnection() {
    static $pdo = null;
    if ($pdo !== null) {
        return $pdo;
    }

    $mysqlHost = 'localhost';
    $mysqlDb   = 'u900031095_selfless';
    $mysqlUser = 'u900031095_human';
    $mysqlPass = 'Human.123';
    $mysqlCharset = 'utf8mb4';

    // 1. Try MySQL Connection
    try {
        $dsn = "mysql:host={$mysqlHost};dbname={$mysqlDb};charset={$mysqlCharset}";
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
            PDO::ATTR_TIMEOUT            => 5,
        ];
        $pdo = new PDO($dsn, $mysqlUser, $mysqlPass, $options);
        $GLOBALS['DB_TYPE'] = 'mysql';

        // Auto-create MySQL table if not exists
        $createTableSql = "
        CREATE TABLE IF NOT EXISTS `submissions` (
            `id` INT AUTO_INCREMENT PRIMARY KEY,
            `name` VARCHAR(255) NOT NULL,
            `email` VARCHAR(255) NOT NULL,
            `phone` VARCHAR(100) NULL,
            `subject` VARCHAR(255) NULL,
            `tier_or_amount` VARCHAR(150) NULL,
            `message` TEXT NULL,
            `status` VARCHAR(50) NOT NULL DEFAULT 'New',
            `ip_address` VARCHAR(45) NULL,
            `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            INDEX (`status`),
            INDEX (`created_at`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        ";
        $pdo->exec($createTableSql);

        return $pdo;
    } catch (PDOException $e) {
        // Log MySQL error privately (never echo credentials to output)
        error_log("MySQL Connection Notice: " . $e->getMessage());
    }

    // 2. Resilient SQLite Fallback (ensures zero failure if MySQL is pending creation)
    try {
        $dataDir = __DIR__ . '/../data';
        if (!is_dir($dataDir)) {
            @mkdir($dataDir, 0755, true);
        }
        $sqlitePath = $dataDir . '/submissions.sqlite';
        $dsn = "sqlite:" . $sqlitePath;
        $pdo = new PDO($dsn);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        $GLOBALS['DB_TYPE'] = 'sqlite';

        $createSqliteTable = "
        CREATE TABLE IF NOT EXISTS submissions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT,
            subject TEXT,
            tier_or_amount TEXT,
            message TEXT,
            status TEXT NOT NULL DEFAULT 'New',
            ip_address TEXT,
            created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        );
        ";
        $pdo->exec($createSqliteTable);

        return $pdo;
    } catch (Exception $ex) {
        error_log("SQLite Fallback Error: " . $ex->getMessage());
        return null;
    }
}
