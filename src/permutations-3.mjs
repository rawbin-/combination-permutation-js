export function* permutationsDict(baseListLength){
    // 初始化方向全部向左
    const indictor = [...Array(baseListLength).keys()].map(item => {
        return {
            value: item,
            direction: false, // false 左边，true，右边，反向的时候直接取非
            movable: item > 0 // 左边第一个不能动
        }
    })

    yield indictor.map(item => item.value)
    // 存在可移动时候循环
    while (indictor.some(item => item.movable)){
        // 求最大的可移动数
        const maxMovable = indictor.filter(item => item.movable).reduce((result,item,itemIndex) => {
            return result.value > item.value ? result: item
        },{value: -1})
        // 从indicator里面找到的索引才是真实的
        const maxMovableIndex = indictor.findIndex((item)=> {
            return item.value === maxMovable.value
        })

        // 交换相同方向上的相邻两个
        if(maxMovable.direction === false){ // 向左边
            [indictor[maxMovableIndex - 1],indictor[maxMovableIndex]] = [indictor[maxMovableIndex],indictor[maxMovableIndex - 1]]
            // 左边第一个不能移动
            if(maxMovableIndex - 1 === 0){
                maxMovable.movable = false
            }

        }else{ // 向右边
            [indictor[maxMovableIndex + 1],indictor[maxMovableIndex]] = [indictor[maxMovableIndex],indictor[maxMovableIndex + 1]]
            if(maxMovableIndex + 1 === baseListLength - 1){
                maxMovable.movable = false
            }
        }

        //重置方向
        indictor.filter(item => item.value > maxMovable.value).map(item => {
            // 这里不会出现 value 为0的，因为有过滤条件
            item.direction = !item.direction
            item.movable = true
            return item
        })

        // 重新判定受影响的movable
        indictor.reduce((item1,item2,item2Index) => {
            //  可移动的定义
            //  在首尾，除了向左在第一个和向右在最后一个都可移动
            //  在中间，比在当前方向上的相邻元素值大即为可移动
            if(item1.direction === true){ // 向右
                item1.movable = item1.value > item2.value
            }

            if(item2.direction === false){ // 向左
                item2.movable = item2.value > item1.value
            }
            return item2
        })

        yield indictor.map(item => item.value)
    }
}

export function* permutations(baseList){
    if(!Array.isArray(baseList)){
        return
    }

    const permuGen = permutationsDict(baseList.length)
    while (true){
        const {value, done} = permuGen.next()
        if(!done){
            yield value.map(item => baseList[item])
        }else{
            break
        }
    }
}
