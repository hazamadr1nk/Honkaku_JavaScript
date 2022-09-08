let s = document.getElementById("food");

//最初の小ノードを取得
let child = s.firstElementChild;

while (child) {
    console.log(child.value);
    child = child.nextElementSibling;
}