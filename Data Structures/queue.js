class Queue {
    constructor() {
        this.items = []
    }

    enqueue(value){
        this.items.push(value)
    }

    dequeue(){
        this.items.shift()
    }

    isEmpty(){
        return this.items.length === 0
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }

    size(){
        return this.items.length
    }

    print(){
        return this.items.toString()
    }

}

// optimized queue as some of methods above have O(n) complexity

class QueueOptimized {
    constructor() {
        this.items = {}
        this.front = 0
        this.rear = 0
    }

    enqueue(value){
        this.items[this.rear] = value
        this.rear++
    }

    dequeue(){
        let item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    isEmpty(){
        return this.front === this.rear
    }

    peek(){
        return this.items[this.front]
    }

    size(){
        return this.rear - this.front
    }

    print(){
        return this.items
    }

}


class QueueCircular {
    constructor(capacity) {
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0
        this.front = -1
        this.rear = -1
    }

    isEmpty(){
        return this.currentLength === 0
    }

    isFull(){
        return this.currentLength === this.capacity
    }

    enqueue(value){
        if(this.isFull()){
            return null
        }
        this.rear = (this.rear + 1) % this.capacity
        this.items[this.rear] = value
        this.currentLength += 1
        if(this.front == -1){
            this.front = this.rear
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }
        let item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.currentLength -= 1
        if(this.isEmpty()){
            this.front = -1
            this.rear = -1
        }
        return item
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
        return null
    }

    size(){
        return this.currentLength
    }

    print(){
        if(this.isEmpty()){
            return console.log("Queue is empty")
        }
        else{
            let i 
            let str = ''

            for(i = this.front; i != this.rear; i = (i + 1) % this.capacity){
                str += this.items[i] + " "
            }

            str += this.items[i]

            return str
        }
    }

}
