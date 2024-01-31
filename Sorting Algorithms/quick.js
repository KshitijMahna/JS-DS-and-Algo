const quick = (arr) => {
    if(arr.length < 2) return arr

    let left = []
    let right = []
    let index = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > index){
            right.push(arr[i])
        }
        else{
            left.push(arr[i])
        }
    }

    return [... quick(left), index, ... quick(right)]
}

console.log(quick([10, 1, 23, 0, 45, 19]))