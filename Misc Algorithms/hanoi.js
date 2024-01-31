const hanoi = (n, fromRod, toRod, usingRod) => {
    if(n === 1){
        console.log(`Move disk 1 from rod ${fromRod} to ${toRod}`)
        return
    }

    hanoi(n - 1, fromRod, usingRod, toRod)
    console.log(`Move disk ${n} from rod ${fromRod} to ${toRod}`)
    hanoi(n - 1, usingRod, toRod, fromRod)
}

console.log(hanoi(5, 'A', 'C', 'B'))