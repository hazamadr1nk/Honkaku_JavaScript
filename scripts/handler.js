document.addEventListener("DOMContentLoaded", function(){
    //タイマーを設置
    let timer = window.setTimeout(
        //現在の時刻を id=result要素に表示
        function () {
            let dat = new Date();
            console.log(dat.toLocaleTimeString());
            document.getElementById("result").textContent = dat.toLocaleTimeString();
        },5000);

        //ボタンクリック時にタイマー処理を終了
        document.getElementById("btn").addEventListener("click", function(){
            window.clearInterval(timer);
        },false);
},false);