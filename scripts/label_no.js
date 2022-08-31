for (let i = 0; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        let k = i* j;
        if (k > 30) {
            break;
        }
        document.write(k + "&nbsp");
    }    
    document.write("<br />");
}