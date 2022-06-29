// You must RETURN your result in each function!

function printNums(nums) {
    let newArr = []
    nums.forEach((num) => {
      newArr.push(num)
    })
  return newArr
}
function returnSums(nums) {
let newArr = []

  nums.forEach((n,index) =>{
     newArr.push(n + index);
  })
return newArr;
  /**
   * Using forEach, push the sum of n plus the index
   * to a new array and return the new array
   * @param nums => [1,2,3,4,5]
   */
}

function returnTotal(objs) {
let sum = 0

  objs.forEach((element) => {
    sum += element.n
  })
    return sum
}
function printMoney(decimals) {
    const dollarArr = decimals.map((value) => {
      let numString = value.toFixed(2)
      numString = numString.toString()
      let string = "$" + numString;
      return string;
    })
    return dollarArr;
}
function returnAllTrueValues(values) {
  const newArr = values.filter((element) => {
    return element.happy
  })
  return newArr
}

function addTwo(nums) {
  const newArr = nums.reduce((acc,value) =>{
    return acc + (value + 2)
  },0)
  return newArr
}
function joinStrings(strings) {
  
  const newString = strings.reduce((acc,value) => {
     return acc + value;
  },'')
  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */
  return newString;
}
//Bonus
function sortObjectsByValue(objs) {

   objs.sort((a,b) => a.value - b.value);
  
  /**
   * @param objs => [{value: 1}, {value:2}, {value:23}]
   * Using .sort, sort the array of objects by the value key in ascending order
   * .sort documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   */
  return objs;
}

module.exports = {
  printNums,
  returnSums,
  returnTotal,
  printMoney,
  returnAllTrueValues,
  sortObjectsByValue,
  addTwo,
  joinStrings
}
