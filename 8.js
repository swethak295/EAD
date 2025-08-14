let numCount = 987654;
let count = 0;
let tempNum = numCount;
while (tempNum > 0) {
    count++;
    tempNum = Math.floor(tempNum / 10);
}
console.log(`Number of digits in ${numCount} is ${count}`);
