
// 获取最大的K，也就是要变化的位置
// a[k] + 1 <= maxEl, a[k] 不在 prevList中
const getMaxKPosition = (prevList, maxEl, subSetLen) => {
    let maxK = subSetLen
    let maxKValue = prevList[maxK - 1] + 1
    while (prevList.includes(maxKValue) || maxKValue > maxEl){
        maxK--
        maxKValue = prevList[maxK - 1] + 1
    }
    return maxK
}

const getNextCombination = (prevList,maxK,subSetLen) => {
    let nextList = [...prevList]
    if(maxK === subSetLen){
        nextList[maxK - 1] = nextList[maxK - 1] + 1
    }else{
        nextList[maxK - 1] = nextList[maxK - 1] + 1
        for(let i = maxK; i < subSetLen; i++){
            nextList[i] = nextList[i - 1] + 1
        }
    }
    return nextList
}

function combinationsDict(baseLen, subSetLen){
    if(baseLen < subSetLen){
        return
    }

    const baseList = []
    for(let i = 1; i <= baseLen; i++){
        baseList.push(i)
    }

    let prevList = baseList.slice(0,subSetLen)
    let lastList = baseList.slice(baseLen - subSetLen)

    const resultList = [
        prevList
    ]
    let maxEl = baseList[baseLen - 1]
    let maxK = getMaxKPosition(prevList,maxEl,subSetLen)
    while (prevList.join() !== lastList.join()){
        prevList = getNextCombination(prevList,maxK,subSetLen)
        resultList.push(prevList)
        maxK = getMaxKPosition(prevList,maxEl,subSetLen)
    }
    return resultList
}


export function combinations(baseList, subSetLen){
    const indicateList = combinationsDict(baseList.length,subSetLen)
    return indicateList.map((itemList,itemListIndex) => {
        return itemList.map((item,index) => {
            return baseList[item - 1]
        })
    })
}

