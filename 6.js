let number = 12345;
let reversed = 0;
let temp = number;
while (temp > 0) {
    let digit = temp % 10;
    reversed = reversed * 10 + digit;
    temp = Math.floor(temp / 10);
}
console.log(`Reverse of ${number} is ${reversed}`);
