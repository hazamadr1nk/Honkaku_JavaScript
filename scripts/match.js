let p = /http(s)?:\/\/([\w-]+\.)+[\w]+(\/[\w- .\/?%&=]*)?/gi;
let str = "support site http://www.wings.msn.to/";
str += "sample introduce site HTTP://www.web-deli.com/もよろしく！";
let result = str.match(p);
for (let i = 0; i < result.length; i++) {
    console.log(result[i]);    
}