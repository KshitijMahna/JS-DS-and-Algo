//Next greater left

//brute force
const ngl = (arr) => {
    let result = []
    for(let i = 0; i < arr.length; i++){
        let greaterResult = false
        for(let j = i - 1; j >= 0; j--){
            if(arr[j] > arr[i]){
                result.push(arr[j])
                greaterResult = true
                break
            }
        }
        if(!greaterResult){
            result.push(-1)
        }
    }
    return result
}

console.log(ngl([4, 9, 3, 11, 7, 22]))

// optimized

const nglO = (arr) => {
    let result = []
    let stack = []

    for(let i = 0; i < arr.length; i++){
        if(stack.length === 0){
            result.push(-1)
            stack.push(arr[i])
        }
        else if(arr[i] < stack[stack.length - 1]){
            result.push(stack[stack.length - 1])
            stack.push(arr[i])
        }
        else{
            while(stack.length !== 0 && stack[stack.length - 1] <= arr[i]){
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
    return result
}

console.log(nglO([4, 9, 3, 11, 7, 22]))