<form action="hello.php" method="POST">
    <label for="name">名前:</label>
    <input type="text" name="name" size="15">
    <input type="submit" name="submit" value="send">
</form>
<?php
if ($_REQUEST["submit"] !== null) {
    //処理を３秒中断　サーバー処理を体感するためのダミーの遅延
    sleep(3);
    print("こんにちは".htmlspecialchars($_POST["name"],ENT_QUOTES | ENT_HTML5, "UTF-8")."さん！"):
}
?>