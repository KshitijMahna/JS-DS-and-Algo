const selection = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min]){
                min = j
            }
        }

        if(min !== i){
            let temp = arr[min]
            arr[min] = arr[i]
            arr[i] = temp
        }
    }
    return arr
}

console.log(selection([10, 1, 23, 0, 45, 19]))