class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linklist{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        let node = new Node(value)
        if(!this.isEmpty()){
            node.next = this.head
        }
        this.head = node
        this.size++
    }

    append(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert(value, index){
        if(index < 0 || index > this.size()){
            return
        }
        if(index === 0){
            return this.prepend(value)
        }else{
            let node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFrom(index){
        if(index < 0 || index >= this.size()){
            return null
        }
        let removeNode
        if(index === 0){
            removeNode = this.head
            this.head = this.head.next
        }
        else{
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }

    removeValue(value){
        if(this.isEmpty()) return null
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
        }
        else{
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                let removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            return null
        }
    }

    print(){
        if(this.isEmpty){
            console.log("list is Empty")
        }else{
            let current = this.head
            let str = ""
            while(current){
                str += `${current.value} `
                current = current.next
            }
            return str
        }
    }
}