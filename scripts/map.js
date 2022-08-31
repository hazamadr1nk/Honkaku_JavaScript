let m = new Map();
m.set("dog","わんわん");
m.set("cat","にゃー");
m.set("mouse","チュー");

console.log(m.size);
console.log(m.get("dog"));
console.log(m.has("cat"));

for (const key of m.keys()) {
    console.log(key);
}
for (const value of m.values()) {
    console.log(value);
}
for (const [key, value] of m) {
    console.log(value);
}

m.delete("dog");
console.log(m.size);

m.clear();
console.log(m.size);