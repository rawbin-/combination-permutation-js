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


