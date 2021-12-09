export function combinations(baseList,subSetLength){
    if(!Array.isArray(baseList)){
        return
    }

    if(subSetLength === 1){
        return baseList.map(baseItem => [baseItem])
    }

    const resultList = []
    baseList.forEach((baseItem,baseIndex) => {
        const lessCombi = combinations(baseList.slice(baseIndex + 1),subSetLength - 1)

        lessCombi.forEach((lessCombiItem,lessCombiIndex) => {
            resultList.push([baseItem,...lessCombiItem])
        })
    })

    return  resultList
}
