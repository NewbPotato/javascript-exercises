const fibonacci = function(n) {
    let fib1 = 0;
    let fib2 = 1;
    for (let i = 1; i < n; i++) {
        let temp = fib1 + fib2;
        fib1 = fib2;
        fib2 = temp;
    }
    return n < 0 ? "OOPS" : (n <= 1 ? 1 : fib2);
};

// Do not edit below this line
module.exports = fibonacci;
