import {combinationsAll} from "./combinations-all.mjs";
import {permutations} from "./permutations.mjs";

export function permutationsAll(baseList){
    const allCombinations = combinationsAll(baseList)
    return allCombinations.reduce((result,item) => {
        result.push(...permutations(item))
        return result
    },[])
}


