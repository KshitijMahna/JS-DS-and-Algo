//using loop

const factorial = (n) => {
    let product = 1
    for(let i = 2; i <= n; i++){
        product *= i
    }
    return product
}

console.log(factorial(5))

//using recursion

const factorialRecursion = (n) => {
    if(n < 2) return 1
    
    return n * factorialRecursion(n-1)
}

console.log(factorialRecursion(5))