/**
 * map((currentValue, index, array) => {}, thisArgs)
 *
 * reduce((previousValue, currentValue, currentIndex, array)=>{}, initialValue)
 */

const arr = [1, 2, 3, 4]

Array.prototype.selfMap = function (fn, thisArgs) {
  const result = []

  this.reduce((prev, cur, index, arr) => {
    result.push(fn.call(thisArgs, cur, index, arr))
  }, 0)

  return result
}

const newArr = arr.selfMap((item, index) => {
  console.log(index)
  return item + 1
})

console.log(newArr)
