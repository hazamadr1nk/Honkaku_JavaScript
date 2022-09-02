function arrayWalk(data, f) {
    for (const key in data) {
        f(data[key], key);
    }
}

function showElement(value, key) {
    console.log(key + ":" + value);
}

let result = 0;
function sumElement(value, key) {
    result += value;
}

let ary = [1,2,4,8,16];

arrayWalk(
    ary,
    function (value, key) {
        console.log(key + ":" + value);
    }
);
