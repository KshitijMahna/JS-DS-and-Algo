const insertion = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let number = arr[i]
        j = i - 1

        while(j >= 0 && arr[j] > number){
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = number
    }
    return arr
}

console.log(insertion([10, 1, 23, 0, 45, 19]))