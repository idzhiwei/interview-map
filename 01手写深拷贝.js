//浅拷贝 + 递归
function deepClone(obj) {
    function isObject(o) {
        return (typeof o === 'object' || typeof o === 'function') && 0 !== null
    }
    if (!isObject(obj)) return obj
    let isArray = Array.isArray(obj)
    let newArray = isArray?[...obj]:{...obj}
    Reflect.ownKeys(newArray).forEach(key=>{
        newArray[key] = isObject(obj[key])?deepClone(obj[key]):obj[key]
    })
    return newArray
}
let obj = {
    a: [1,2,3],
    b: {
      c: 2,
      d: 3
    }
  }
  let newObj = deepClone(obj)
  newObj.b.c = 1
  console.log(obj)
  console.log(newObj)