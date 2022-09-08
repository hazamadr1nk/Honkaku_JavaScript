document.addEventListener("DOMContentLoaded", function(){
    let Counter = function(elem){
        this.count = 0;
        this.elem = elem;
        elem.addEventListener("click", () => {
            this.count++;
            this.show();
        },false);
    };

    //カウンター情報を表示するためのshowメソッド
    Counter.prototype.show = function(){
        console.log(this.elem.id, "は", this.count, "回クリックされました。");
    }

    //button要素btnにカウンターを紐付け
    let n = new Counter(document.getElementById("btn"));
},false);