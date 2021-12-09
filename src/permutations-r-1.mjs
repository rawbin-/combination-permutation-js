import {combinations} from "./combinations-2.mjs";
import {permutations} from "./permutations.mjs";

export function permutationsR(baseList, subSetLength){
    const combinationsR = combinations(baseList,subSetLength)
    return combinationsR.reduce((result,item) => {
        result.push(...permutations(item))
        return result
    },[])
}

