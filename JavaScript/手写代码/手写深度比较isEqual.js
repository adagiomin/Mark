// 实现效果如下
// 判断是否都为对象
function isObject(obj) {
    return typeof obj === 'object' && obj != null //注意typeof null 也为object
}

function isEqual(obj1, obj2) {
    // 有一个或者都不是对象
    if (!isObject(obj1) || !isObject(obj2)) {
        return obj1 === obj2 //当两个都不是对象的时候也是直接比较
    }
    if (obj1 === obj2) { //obj1和obj2是同一个对象
        return true
    }
    // 1.得到所有的key
    const obj1Keys = Object.keys(obj1)
    const obj2Keys = Object.keys(obj2)
    // 1.1键数量不一样
    if (obj1Keys.length != obj2Keys.length) return false
    // 1.2键数量一样
    for (let key in obj1) {
        const res = isEqual(obj1[key], obj2[key])
        if (!res) {
            return false
        }
    }
    return true
}

const obj1 = {
    a: 10,
    b: {
        x: 100,
        y: 200
    }
}

const obj2 = {
    a: 10,
    b: {
        x: 10,
        y: 200
    }
}

console.log(isEqual(obj1, obj2))