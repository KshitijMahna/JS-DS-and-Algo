//Nearest smaller to left aka nearest smaller element

//brute force

const nsl = (arr) => {
    let result = []
    for(let i = 0; i < arr.length; i++){
        let smallFound
        for(let j = i - 1; j >= 0; j--){
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
    return result
}

console.log(nsl([4, 5, 2, 10, 8]))

//optimized

const nslO = (arr) => {
    let result = []
    let stack = []

    for(let i = 0; i < arr.length; i++){
        if(stack.length == 0){
            result.push(-1)
            stack.push(arr[i])
        }
        else if(stack[stack.length - 1] < arr[i]){
            result.push(stack[stack.length - 1])
            stack.push(arr[i])
        }
        else{
            while(stack.length !== 0 && stack[stack.length - 1] >= arr[i]){
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

console.log(nslO([4, 5, 2, 10, 8]))