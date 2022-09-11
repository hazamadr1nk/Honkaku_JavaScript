document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("btn").addEventListener("click", function(){
        let result = document.getElementById("result");
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                //崇信完了した時
                if (xhr.status === 200) {
                    //通信が成功した時
                    result.textContent = xhr.responseText;
                }else{
                    //通信が失敗した時
                    result.textContent = "サーバーエラーが発生しました。";
                }
            }else{
                //通信が完了する前
                result.textContent = "通信中・・・";
            }
        };
        //サーバーとの非同期通信を開始
        xhr.open("GET", "hello_ajax.php?name=" + encodeURIComponent(document.getElementById("name").value), true);
        xhr.send(null);

    },false);
},false);