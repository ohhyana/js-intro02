// true or false
let a = 8;
let b = 4;
let c = 9;
if (a < b && b < c) {
    console.log("The statement a < b < c is true.");
  } else {
    console.log("The statement a < b < c is false.");
  }

//following the instructions in comments
let x = 1;
let y = 2;

let res1 = x.toString() + y.toString();
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = (x < y) + String(y);
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = x < y;
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = x * y / "lol";
console.log(res4); // NaN
console.log(typeof res4); // "number";

//prompt function
let isAdult = prompt("Are you 18 y.o.? Please enter 'Yes' or 'No'");

if (isAdult === "Yes") {
  console.log("Congrats! You've come of age.");
} else if (isAdult === "No") {
  console.log("You're too young bby :(");
} else {
  console.log("The entered value is not defined.");
}

// array of numbers
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]

arr.sort((a, b) => a - b);

let count = 1;
let maxCount = 1;
let data = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] === arr[i - 1]) {
    count++;
  } else {
    if (count > maxCount) {
      maxCount = count;
      data = arr[i - 1];
    }
    count = 1;
  }
}

if (count > maxCount) {
  data = arr[arr.length - 1];
}

arr = arr.filter((num) => num !== data);

console.log(data); // 5
console.log(arr); // [4, 2, 1, 6, 3, 2]

// triangle's sides
let side1 = prompt("Enter the length of the 1st side of your triangle");
let side2 = prompt("Enter the length of the 2nd side of your triangle");
let side3 = prompt("Enter the length of the 3rd side of your triangle");

if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
  console.log("Invalid data");
} else if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
  console.log("Invalid data");
} else {

  // triangle's half perimeter
  let p = (side1 + side2 + side3) / 2;

  // calculate the area using Heron's formula
  let area = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));

  // triangle's area with fixed num to 3 decimals
  console.log("Your triangle area is " + area.toFixed(3));

  // checking if it's a right triangle 
  if (
    side1 * side1 + side2 * side2 === side3 * side3 ||
    side1 * side1 + side3 * side3 === side2 * side2 ||
    side2 * side2 + side3 * side3 === side1 * side1
  ) {
    console.log("Cool! This is a right triangle.");
  } else {
    console.log("Oops! This is not a right triangle. Try again.");
  }
}

// conditional greeting 1st variant (if-else)
const currentDate = new Date();
const currentHour = currentDate.getHours();

if (currentHour >= 23 || currentHour < 5) {
  console.log("Good night mate!");
} else if (currentHour >= 5 && currentHour < 11) {
  console.log("Good morning sunshine!");
} else if (currentHour >= 11 && currentHour < 17) {
  console.log("Good afternoon sweetie!");
} else {
  console.log("Good evening dear!");
}

// 2nd variant (using ternary operators)
const currentDate1 = new Date();
const currentHour1 = currentDate1.getHours();

const greeting = currentHour1 >= 23 || currentHour1 < 5
    ? "Good night mate!"
    : currentHour1 >= 5 && currentHour1 < 11
    ? "Good morning sunshine!"
    : currentHour1 >= 11 && currentHour1 < 17
    ? "Good afternoon sweetie!"
    : "Good evening dear!";

console.log(greeting);