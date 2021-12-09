export function combinationsAll(baseList){
    if(!Array.isArray(baseList)){
        return
    }

    const totalCount = Math.pow(2,baseList.length)
    let resultList = [[]]
    for(let i = 1; i < totalCount; i++){
        const flagList = i.toString(2).split('').reverse() // 转成二进制字符串
        let tmpResult = []
        flagList.forEach((item,index) => {
            if(item === '1'){
                tmpResult.push(baseList[index])
            }
        })
        resultList.push(tmpResult)
    }
    return resultList
}



console.log(combinationsAll([1,2,3,4,5,6]))
console.log(combinationsAll(['A','B','C','D','E','F']))
