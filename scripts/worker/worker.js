self.addEventListener("message", function(e){
    let count = 0;
    for (let i = 0; i < e.data.target; i++) {
        if (i % e.data.x === 0) {
            count++;
        }
    }
    this.postMessage(count);
});