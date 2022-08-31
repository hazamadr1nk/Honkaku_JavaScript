let arry = [5,25,10];
console.log(arry.sort());
console.log(arry.sort(function(x,y){
    return x - y;
}));
console.log(arry);