//Next largest element aka next largest element to right

//Brute force

const ngr = (arr) => {
    let result = []
    for(let i = 0; i < arr.length; i++){
        let greaterExist = false
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] > arr[i]){
                result.push(arr[j])
                greaterExist = true
                break
            }
        }
        if(!greaterExist){
            result.push(-1)
        }
    }
    return result
}

console.log(ngr([2, 7, 4, 13, 8]))


//Optimized method uses stack to solve the problem
// 1) If stack is empty return -1 and insert value to stack
// 2) If stack top element > item in list return stack top item and push list item to stack
// 3) If stack top element < item in the list => pop items from top until greater value comes or stack becomes empty

const ngrO = (arr) => {
    let stack = []
    let result = []
    for(let i = arr.length - 1; i >= 0; i--){
        if(stack.length === 0){
            result.push(-1)
            stack.push(arr[i])
        }
        else if(stack[stack.length - 1] > arr[i]){
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
    return result.reverse()
}

console.log(ngrO([2, 7, 4, 13, 8]))