//Nearest smaller to right

//Brute force

const nsr = (arr) => {
    let result = []
    for(let i = arr.length - 1; i >= 0; i--){
        let smallFound
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[i]){
                result.push(arr[j])
                smallFound = true
                break
            }
        }
        if(!smallFound){
            result.push(-1)
        }
    }
    return result.reverse()
}

console.log(nsr([4, 5, 2, 10, 8]))


//optimized

const nsrO = (arr) => {
    let result = []
    let stack = []

    for(let i = arr.length - 1; i >= 0; i--){
        if(stack.length === 0){
            result.push(-1)
            stack.push(arr[i])
        }
        else if(stack[stack.length - 1] < arr[i]){
            result.push(stack[stack.length - 1])
            stack.push(arr[i])
        }
        else{
            while(stack.length !== 0 && arr[i] <= stack[stack.length - 1]){
                stack.pop()
            }
            if(stack.length === 0){
                result.push(-1)
            }
            else{
                result.push(stack[stack.length - 1])
            }
            stack.push(arr[i])
        }
    }
    return result.reverse()
}

console.log(nsrO([4, 5, 2, 10, 8]))
