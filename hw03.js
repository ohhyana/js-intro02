// creating function to get an array with a range of values
function createArray(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  }
  
let arr = createArray(2, 9);
console.log(arr); // [2, 3, 4, 5, 6, 7, 8, 9]
  
// output of values
function myValues(a, b) {
    let output = "";
    for (let i = a; i <= b; i++) {
      for (let j = a; j <= i; j++) {
        output += i + ",";
      }
    }
    console.log(output.slice(0, -1));
  }
  
myValues(1, 10);
  
// random numbers
function randArray(j) {
    const randomArr = [];
    for (let i = 0; i < j; i++) {
    randomArr.push(Math.floor(Math.random() * 500) + 1);
    }
    return randomArr;
  }
  
randArray(5);
  
// removing duplicates from an array
function compact(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }
  
  const extraArr = [5, 3, 4, 5, 6, 7, 3];
  const extraArr1 = compact(arr);
  
console.log(extraArr1);
  
// separating 2 arrays by numbers and strings
function funcName(arrOld) {
    const result = [[], []];
  
    for (let i = 0; i < arrOld.length; i++) {
      if (Array.isArray(arrOld[i])) {
        result[0].push(...arr[i].filter((item) => typeof item !== "string"));
        result[1].push(...arr[i].filter((item) => typeof item === "string"));
      } else if (typeof arrOld[i] === "string") {
        result[1].push(arrOld[i]);
      } else {
        result[0].push(arrOld[i]);
      }
    }
  
    return result;
  }
  
const arrOld = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun",];
const arrNew = funcName(arr);
console.log(arrNew);
  
// arithmetic operations
  function calc(a, b, op) {
    switch (op) {
      case 1:
        return a - b;
      case 2:
        return a * b;
      case 3:
        return a / b;
      default:
        return a + b;
    }
  }
  
calc(20, 7, 6); // 27
  
// finding unique values in array
function findUnique(arr) {
    const obj = {};
  
    for (let i = 0; i < arr.length; i++) {
      if (obj[arr[i]]) {
        return false;
      } else {
        obj[arr[i]] = true;
      }
    }
  
    return Object.keys(obj).length === arr.length;
  }
  
findUnique(arr); // true