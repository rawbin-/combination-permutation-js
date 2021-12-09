import {combinationsAll} from "./combinations-all.mjs";
import {permutations} from "./permutations-1.mjs";

export function permutationsAll(baseList){
    const allCombinations = combinationsAll(baseList)
    return allCombinations.reduce((result,item) => {
        result.push(...permutations(item))
        return result
    },[])
}


