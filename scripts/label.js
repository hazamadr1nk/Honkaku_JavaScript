kuku:
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        let k = i * j;
        if (k > 30) {
            break kuku;
        }
        document.write(k+"&nbsp");
    }    
    document.write("<br />");
}