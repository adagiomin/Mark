/**
 * 深拷贝
 */
const obj1 = {
    age: 20,
    name: 'xxx',
    address: {
        city: 'beijing'
    },
    arr: ['a', 'b', 'c']
}

function deepClone(obj) {
    let cloneObj
    // 如果当前obj1是对象，则为obj2创建空间
    if (obj && typeof obj === 'object') {
        if (Array.isArray(obj)) {
            cloneObj = []
        } else {
            cloneObj = {}
        }

        for (let key in obj) {
            if (obj.hasOwnProperty(key)) { //保证不是原型的属性
                cloneObj[key] = deepClone(obj[key])
            }
        }
    } else {
        return obj
    }
    return cloneObj
}

console.log(deepClone(obj1))