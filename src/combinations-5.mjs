function* combinationDict(baseListLength,subSetLength){
    const delta = baseListLength - subSetLength
    let indicator = [...Array(subSetLength).keys()]  // 初始指示器 [0,1,2...subSetLength-1]
    let firstChangeIndex = subSetLength - 1  // 从左到右第一个要变化索引的位置
    yield indicator
    while (true){
        // 默认从最后一位开始变化
        for(firstChangeIndex = subSetLength; firstChangeIndex--;){
            if(indicator[firstChangeIndex] !== firstChangeIndex + delta){
                break
            }
        }
        // 咱们这里也用一个循环穿透来判断，
        if(firstChangeIndex < 0){
            break
        }
        indicator[firstChangeIndex] += 1
        for(let i = firstChangeIndex + 1, len = indicator.length; i < len; i++){
            indicator[i] = indicator[i - 1] + 1
        }
        yield indicator
    }
}
export function* combinations(baseList,subSetLength){
    if(!Array.isArray(baseList)){
        return
    }
    if(baseList.length < subSetLength){
        return
    }
    const indicatorGen = combinationDict(baseList.length,subSetLength)
    while (true){
        const {value,done} = indicatorGen.next()
        if(!done){
            yield value.map(itemIndex => {
                return baseList[itemIndex]
            })
        }else{
            break
        }
    }
}

