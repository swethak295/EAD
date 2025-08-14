let n = 10; // Number of terms
let a = 0, b = 1;
console.log(`Fibonacci series up to ${n} terms:`);
for (let i = 1; i <= n; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}
