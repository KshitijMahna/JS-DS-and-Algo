const merge = (arr) => {
    if(arr.length < 2) return arr

    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    return mergeSort(merge(left), merge(right))
}

const mergeSort = (leftArr, rightArr) => {
    let sortedArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }

    return [...sortedArr, ... leftArr, ... rightArr]
}

console.log(merge([10, 1, 23, 0, 45, 19]))