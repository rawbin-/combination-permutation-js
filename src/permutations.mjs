export function permutations(baseList){
    if(!Array.isArray(baseList)){
        return
    }

    if(baseList.length <= 1){
        return [baseList];
    }

    const lessPermutation = permutations(baseList.slice(1))
    const firstEl = baseList[0]

    const resultList = []
    lessPermutation.forEach(lessPermuItem => {
        // n + 1 个可插入的位置
        for(let i = 0, len = lessPermuItem.length; i <= len; i++){
            const tempResult = [...lessPermuItem]
            tempResult.splice(i,0, firstEl)
            resultList.push(tempResult)
        }
    })
    return resultList
}

console.log(permutations([1,2,3,4,5,6]))
console.log(permutations(['A','B','C','D','E','F']))
