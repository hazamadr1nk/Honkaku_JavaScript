let dat = new Date(2017,4,15,11,49);
console.log(dat.toLocaleString());
dat.setMonth(dat.getMonth() + 3);
console.log(dat.toLocaleString());
dat.setDate(dat.getDate() - 20);
console.log(dat.toLocaleString());
dat.setMonth(dat.getMonth() + 1);
dat.setDate(0);
console.log(dat.toLocaleString());

