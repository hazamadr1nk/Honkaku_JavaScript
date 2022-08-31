let data = [2,3,4,5];
let result = data.filter(function(value, index, array){
    return value % 2 === 1;
});

console.log(result);