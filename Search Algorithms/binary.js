const binary = (arr, n) => {
    let left = 0
    let right = arr.length - 1

    while(right >= left){
        let middle = Math.floor(left + right / 2)

        if(arr[middle] === n) return middle
        else if(arr[middle] > n){
            right = middle - 1
        }
        else{
            left = middle + 1
        }
    }
    return -1
}

console.log(binary([9, 10, 14, 17, 24, 46], 46))


//using recursion

const binaryRecursion = (arr, n) => {
    return binSort(arr, n, 0, arr.length - 1)
}

const binSort = (arr, n, left, right) => {
    let middle = Math.floor(left + right / 2)
    
    if(left > right){
        return -1
    }

    if(arr[middle] === n) return middle
    else if(arr[middle] > n){
        return binSort(arr, n, left, middle - 1)
    }
    else{
        return binSort(arr, n, middle + 1, right)
    }

}

console.log(binaryRecursion([9, 10, 14, 17, 24, 46], 46))