let book = {title: "ポケットリファレンス", publish: "技術評論者", price:2680, other:{keywd: "java SE 8", logo: "logo.jpg"}};
let {title, other, other:{keywd}} = book;

console.log(title);
console.log(other);
console.log(keywd);