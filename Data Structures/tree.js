class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class binarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root, node)
        }
    }

    insertNode(root, node){
        if(root.value > node.value){
            if(root.left === null){
                root.left = node
            }else{
                this.insertNode(root.left, node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                this.insertNode(root.right, node)
            }
        }
    }

    search(root, value){
        if(!root){
            return false
        }
        if(root.value === value){
            return true
        }else{
            if(root.value > value){
                return this.search(root.left, value)
            }else{
                 return this.search(root.right, value)
            }
        }
    }

    //DFS
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.preOrder(root.left)
            console.log(root.value)
            this.preOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.preOrder(root.left)
            this.preOrder(root.right)
            console.log(root.value)
        }
    }

    //BFS
    levelOrder(){
        // we can use optimized queue as well
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            if(curr.left){
                queue.push(curr.left)
            }if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }
        else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }
        else{
            return this.max(root.right)
        }
    }

    delete(value){
        this.root = deleteNode(this.root, value)
    }

    deleteNode(root, value){
        if(root === null){
            return root
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left, value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right, value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left) return root.right
            else if(!root.right) return root.left
            else{
                root.value = this.min(root.right)
                root.right = this.deleteNode(root.right, root.value)
            }
        }
        return root
    }
}