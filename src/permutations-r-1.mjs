import {combinations} from "./combinations-2.mjs";
import {permutations} from "./permutations.mjs";

export function permutationsR(baseList, subSetLength){
    const combinationsR = combinations(baseList,subSetLength)
    return combinationsR.reduce((result,item) => {
        result.push(...permutations(item))
        return result
    },[])
}

console.log(permutationsR([1,2,3,4,5,6],3))
console.log(permutationsR(['A','B','C','D','E','F'],3))
