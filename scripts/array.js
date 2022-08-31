let arr1 = ["Sato","Takae","Osada","Hio","Saitoh","Sato"];
let arr2 = ["Yabuki","Aoki","Moriyama","Yamada"];

console.log(arr1.length);
console.log(Array.isArray(arr1));
console.log(arr1.toString());
console.log(arr1.indexOf("Sato"));
console.log(arr1.lastIndexOf("Sato"));

console.log(arr1.concat(arr2));

console.log(arr1.join("/"));
console.log(arr1.slice(1));
console.log(arr1.slice(1,2));
console.log(arr1.splice(1,2,"Kakeya","Yamaguchi"));
console.log(arr1);
console.log(Array.of(20,40,60));
console.log(arr1.copyWithin(1,3,5));
console.log(arr1);
console.log(arr2.fill("Suzuki",1,3));
console.log(arr2);
console.log(arr1.pop());
console.log(arr1);
console.log(arr1.push("Kondo"));
console.log(arr1);
console.log(arr1.shift());
console.log(arr1);
console.log(arr1.unshift("Ozawa", "Kuge"));
console.log(arr1);
console.log(arr1.reverse());
console.log(arr1);
console.log(arr1.sort());
console.log(arr1);
