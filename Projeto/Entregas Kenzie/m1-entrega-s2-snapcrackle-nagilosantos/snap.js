function snapCrackle(maxValue) {
    let arrayValue = []
    //let i;
    for (let i = 1; i <= maxValue; i++) {
        if ((i % 2 !== 0) && (i % 5 == 0)) {
            arrayValue.push("SnapCrackle")
            } else if (i % 2 !== 0) {
                arrayValue.push("Snap")
            } else if (i % 5 == 0) {
                arrayValue.push("Crackle")
            } else{
                arrayValue.push(i)
        }
    }
    return arrayValue.join([", "]);
}

console.log(snapCrackle(12));
