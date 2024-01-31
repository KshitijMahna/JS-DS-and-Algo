//using loop

const fibonacciSequence = (n) => {
    let array = [0, 1]
    for(let i = 2; i < n; i++){
        array[i] = array[i-1] + array[i-2]
    }
    return array
}

console.log(fibonacciSequence(6))

//Using recursion

const fibonacciRecursion = (n) => {
    if(n < 2) return n

    return fibonacciRecursion(n-1) + fibonacciRecursion(n-2)
}

console.log(fibonacciRecursion(6))