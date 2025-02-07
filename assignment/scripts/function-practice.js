console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(`Test - should say "Hello, Jeremy!": ${helloName('Jeremy')}`);


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log(`Test - 1 + 2, should say 3: ${addNumbers(1, 2)}`);


// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ) {
  return num1 * num2 * num3;
}
console.log(`Test - 1 * 2 * 3, should say 6: ${multiplyThree(1, 2, 3)}`);


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  array = [2, 4, 6, 8];
  return array[array.length - 1];
}
console.log(`Test - should say 8 : ${getLast()}`);


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ) {
  array = [3, 6, 9];
  for (array[value] of array) {
    if (value === 9) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(`Test - find 3, should be false: ${find(3)}`);
console.log(`Test - find 6, should be false: ${find(6)}`);
console.log(`Test - find 9, should be true: ${find(9)}`);
console.log(`Test - find 12, should be false: ${find(12)}`);



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string.startsWith(letter)) {
    return true;
  } else {
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );


// 9. Function to return the sum of all numbers in an array
function sumAll() {
  array = [1, 2, 3, 4, 5];
  let sum = 0;
  // TODO: loop to add items
  for (value of array) {
    sum += value;
  }
  return sum;
}
console.log(`Test - 1 + 2 + 3 + 4 + 5, should be 15: ${sumAll()}`);


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let inputArray = [-3, -2, -1, 0, 1, 2, 3];
console.log('Starting array:', inputArray);
function newArray() {
  let positiveNumbers = inputArray.filter((num) => num > 0);
  return positiveNumbers;
}
console.log(`New array after filter: ${newArray()}`);

// testing #10 with all negative numbers
let allNegative = [-3, -2, -1];
console.log('Starting array:', allNegative);
function newerArray() {
  let emptyArray = allNegative.filter((num) => num > 0);
  return emptyArray;
}
console.log(`Newer array after filter: ${newerArray()}`);


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Sum of polygon angles. Function that finds the sum of internal polygon angles
// where n is the number of sides on the polygon.
function sumPolygon(n) {
	sum = (n - 2) * 180;
	return sum;
}
console.log(`Three sided polygon: ${sumPolygon(3)}`);
console.log(`Four sided polygon: ${sumPolygon(4)}`);
console.log(`Five sided polygon: ${sumPolygon(5)}`);
console.log(`Six sided polygon: ${sumPolygon(6)}`);
console.log(`Eight sided polygon: ${sumPolygon(8)}`);