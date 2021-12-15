function production(argList, repeat = 1){
    let base = argList.map(item => [item])
    for (let i = 0; i < repeat - 1; i++){
        base = argList.reduce((result,argItem) => {
            base.forEach(baseItem => {
                result.push([...baseItem,argItem])
            })
            return result
        },[])
    }
    return base
}

export function permutationsRepeat(baseList){
    return production(baseList,baseList.length)
}

