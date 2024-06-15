<?php
$message = $_POST['message'] ?? '';

if (!empty($message)) {
    $current_messages = file_get_contents('chat.txt');
    $current_messages .= '[' . date('Y-m-d H:i:s') . '] ' . $message . "\n";
    file_put_contents('chat.txt', $current_messages);
    echo 'Tin nhắn đã được lưu.';
} else {
    echo 'Lỗi: Không có tin nhắn để lưu.';
}
?>
