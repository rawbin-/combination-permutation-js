export function combinations(baseList,subSetLength){
    if(!Array.isArray(baseList)){
        return
    }

    if(subSetLength > baseList.length){
        return
    }

    // 先选一个的选法
    let baseSelection = baseList.reduce((result, item ,index ) => {
        if(index <= baseList.length - subSetLength){
            result.push([item])
        }
        return result
    },[])
    for(let i = 1; i < subSetLength; i++){
        baseSelection = baseSelection.reduce((result,baseSeleItem) => {
            const maxIndexInBase = baseList.indexOf(baseSeleItem[baseSeleItem.length - 1])
            const options = baseList.slice(maxIndexInBase + 1)
            options.forEach(optionItem => {
                result.push([...baseSeleItem,optionItem])
            })
            return result
        }, [])
    }

    return baseSelection;
}
