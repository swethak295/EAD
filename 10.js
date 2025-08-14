let primeNum = 29;
let isPrime = true;

if (primeNum < 2) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(primeNum); i++) {
        if (primeNum % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(`${primeNum} is a prime number`);
} else {
    console.log(`${primeNum} is not a prime number`);
}
