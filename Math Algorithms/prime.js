const prime = (n) => {
    if(n < 2) return false
    for (let i = 2; i < n; i++) {
        if(n % i === 0){
            return false
        }        
    }
    return true
}

console.log(prime(9))

//optimized

const primeOptimized = (n) => {
    if(n < 2) return false
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0){
            return false
        }        
    }
    return true
}

console.log(primeOptimized(9))