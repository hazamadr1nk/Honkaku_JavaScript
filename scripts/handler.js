//ページロードに実行されるイベントハンドラーを登録
document.addEventListener("DOMContentLoaded",function(){
    //ボタンクリック時に実行されるイベントリスナーを登録
    document.getElementById("btn").addEventListener("click",function(){
        window.alert("click button!");
    },false);
},false);