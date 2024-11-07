function info(text) {
    console.log(text, performance.now().toFixed(2))
}

info('Program start')

setTimeout(() => info('Timeout'), 0)

function fib(n) {
    if (n === 1 || n === 0) {
        return n
    }
    let fib1 = 0
    let fib2 = 1
    let sum
    for (let i = 1; i < n; i++) {
        sum = fib1 + fib2
        fib1 = fib2
        fib2 = sum
    }
    return sum
}

console.log(fib(10))


info('Program end')
