// gcd of 2 numbers
const gcd = (a, b) => {
    if(b === 0) return a
    
    return gcd(b, a % b)
}

console.log(gcd(8, 99))

//gcd of array

const gcdN = (arr) => {
    let temp = arr[0]
    for (let i = 1; i < arr.length; i++) {
        temp = gcd(temp, arr[i])
    }
    return temp
}

console.log(gcdN([4, 8, 10, 14]))