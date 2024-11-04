// 0, 1, 1, 1


setTimeout(() => console.log('Timeout', 0))

function fib(n) {
    if (n === 0 || n === 1) {
        return n
    }
    // bitta odlingini oladu || ikta oldingini oladi
    return fib(n - 1) + fib(n - 2)
}

console.log(fib(40))