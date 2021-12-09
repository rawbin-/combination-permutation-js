export function permutations(baseList){
    if(!Array.isArray(baseList)){
        return
    }
    // 一元子集
    let baseSubSet = baseList.map(item => {
        return [item]
    })

    for(let i = 1, len = baseList.length; i < len; i++){
        baseSubSet = baseSubSet.reduce((result, subsetItem,index) => {
            const candidates = baseList.filter((baseItem, baseIndex) => {
                // 当前集合中元素的最大元素的索引之后的元素
                const maxIndex = subsetItem.reduce((result,item) => {
                    const indexInBase = baseList.indexOf(item);
                    return indexInBase > result?indexInBase: result
                },0)
                return baseIndex > maxIndex
            })

            // 插入位置为n + 1, 一个元素可以有两个插入位置（前后）
            for(let i = subsetItem.length + 1; i--;){
                candidates.forEach(candiItem => {
                    let tmpItem = [...subsetItem]
                    tmpItem.splice(i,0,candiItem)
                    result.push(tmpItem)
                })
            }
            return result
        },[])
    }
    return baseSubSet
}
