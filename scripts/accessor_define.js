function nameSpace(ns){
    // 名前空間を「。」区切りで分割
    let names = ns.split(".");
    let parent = window;

    // 名前空間を上位から登録
    for (let i = 0; i < names.length; i++) {
        parent[names[i]] = parent[names[i]] || {};
        parent = parent[names[i]];        
    }
    return parent;
}

// Wings.Gihyo.Js.MyAppの名前空間を登録
let my = nameSpace("Wings.Gihyo.Js.MyApp");
my.Person = function(){};
let p = new my.Person();
console.log(p instanceof Wings.Gihyo.Js.MyApp.Person);