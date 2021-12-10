import {permutations,combinations} from "./itertools.mjs";

const combinationsResult = combinations([1,2,3,4,5,6],3)
const permutationsResult = permutations([1,2,3,4,5,6],3)

combinationsResult.forEach(combiItem => {
    delete combiItem.__class__
    return combiItem
})

permutationsResult.forEach(permuItem => {
    delete permuItem.__class__
    return permuItem
})

console.log(combinationsResult)
console.log(permutationsResult)
