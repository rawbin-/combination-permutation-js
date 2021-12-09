import {combinationsAll} from "./combinations-all.mjs";

export function combinations(baseList,subSetLen){
    if(!Array.isArray(baseList)){
        return
    }
    if(baseList.length < subSetLen){
        return
    }
    const allCombinations = combinationsAll(baseList)
    return allCombinations.filter(item => {
        return item.length === subSetLen
    })
}


console.log(combinations([1,2,3,4,5,6],3))
console.log(combinations(['A','B','C','D','E','F'],3))
