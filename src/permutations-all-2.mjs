import {combinationsAll} from "./combinations-all.mjs";
import {permutations} from "./permutations.mjs";

export function permutationsAll(baseList){
    const allCombinations = combinationsAll(baseList)
    return allCombinations.reduce((result,item) => {
        result.push(...permutations(item))
        return result
    },[])
}


console.log(permutationsAll([1,2,3,4,5,6]))
console.log(permutationsAll(['A','B','C','D','E','F']))
