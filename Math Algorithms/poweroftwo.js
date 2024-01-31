const powerOfTwo = (n) => {
    if(n < 1) return false
    while(n > 1){
        if(n % 2 !== 0){
            return false
        }
        n = n / 2
    }
    return true
}

console.log(powerOfTwo(64))


//optimized (using bit manipulation)
const powerOfTwoOptimized = (n) => {
    if(n < 1) return false
    return (n & n-1) === 0
}

console.log(powerOfTwoOptimized(32))