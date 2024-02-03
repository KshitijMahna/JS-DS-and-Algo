//Types of collision handling methods includes seperate chaining technique and open addressing technique
class hashMap{
    constructor(value){
        this.table = new Array(value)
        this.size = value
    }

    hash(key){
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value){
        let index = this.hash(key)
        this.table[index] = value
    }

    get(key){
        let index = this.hash(key)
        return this.table[index]
    }

    remove(key){
        let index = this.hash(key)
        this.table[index] = undefined
    }

    display(){
        for (let i = 0; i < this.table.length; i++) {
            if(this.table[i]){
                console.log(i, this.table[i])
            }
        }
    }
}

//no collision
class hashMapOptimized{
    constructor(value){
        this.table = new Array(value)
        this.size = value
    }

    hash(key){
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value){
        let index = this.hash(key)
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key, value]]
        }
        else{
            let sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                sameKeyItem[1] = value
            }
            else{
                bucket.push([key, value])
            }
        }
    }

    get(key){
        let index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            let sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }

    remove(key){
        let index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            let sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
    }

    display(){
        for (let i = 0; i < this.table.length; i++) {
            if(this.table[i]){
                console.log(i, this.table[i])
            }
        }
    }
}