const linear = (arr, n) => {
    for (let i = 0; i < arr.length; i++) {
        if(n === arr[i]) return i        
    }

    return -1
}

console.log(linear([0, 10, 3, 23, 57, 109, 54], 55))