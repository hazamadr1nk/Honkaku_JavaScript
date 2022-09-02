let Member = function(){};

Member.prototype.sex = "men";
let mem1 = new Member();
let mem2 = new Member();

console.log(mem1.sex + "|" + mem2.sex);
mem2.sex = "woman";
console.log(mem1.sex + "|" + mem2.sex);

delete mem1.sex;
delete mem2.sex;
console.log(mem1.sex + "|" + mem2.sex);
