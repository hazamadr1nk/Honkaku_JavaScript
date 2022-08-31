let i  = 1;
try {
    i = i * j;
} catch (error) {
    console.log(error.message);
}finally{
    console.log("処理は終了しました");
}