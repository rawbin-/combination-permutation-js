export function permutationsRepeat(baseList, subPermuLength = baseList.length){
    if(!Array.isArray(baseList)){
        return
    }

    if(subPermuLength === 1){
        return baseList.map(baseItem => [baseItem])
    }

    const lessPermutation = permutationsRepeat(baseList,subPermuLength - 1)

    const resultList = []
    // 因为有重复，所以这里不能用插入，而要用拼接
    baseList.forEach(baseItem => {
        lessPermutation.forEach(lessItem => {
            resultList.push([baseItem,...lessItem])
        })
    })
    return resultList
}

