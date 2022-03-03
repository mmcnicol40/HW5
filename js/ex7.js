console.log(" HW 5 ex 2 - Array Math");
const arrayMth = [];
for (i = 1; i <= 10; i++) {
  arrayMth.push(i);
}

// Test, see array
console.log(arrayMth);

//FILTER METHOD - Use the filter method to produce the following
//Write your code prior to the console.log(...) statement

// An array of odd numbers
const oddNum = arrayMth.filter(y => y % 2 !== 0);
console.log(oddNum); 

// An array of  numbers divisible by either 2 OR 5
const divBy2or5 = arrayMth.filter(y => y % 2 === 0 || y % 5 === 0);
console.log(divBy2or5); 

// An array of all the numbers divisible by 3, summed then squared
const divBy3sqr = arrayMth.filter(y => y % 3 === 0).reduce((sum,x) => x * x, 0);
console.log(divBy3sqr); 

// Square each number that is divisible by 5 then sum
const divBy5sqrsum = arrayMth.filter(y => y % 5 === 0).reduce((square,x) => (x + x), 0);
console.log(arrayMth.filter(y => y % 5 === 0)); 
console.log(divBy5sqrsum); 

//const arraySquaredSum = anArray.map(x => x**2).reduce((sum, x) => sum + x, 0);
/*

//1.  An array of all the even number
const evenNumbers = anArray.filter(x => x % 2 === 0);
console.log(evenNumbers);  //[2, 4, 6, 8, 10, 12]



//MAP METHOD - Use the map method to produce the following

//3.  An array of each number multiplied by 3
const multipBy3 = anArray.map(z => z * 3);
console.log(multipBy3); //[3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36]

//FILTER AND MAP

//4.  An array of numbers divible by 4 that are multiplied by 3
const divBy4MultipBy3 = anArray.filter(num => num % 4 === 0).map(num2 => num2 * 3);
console.log(divBy4MultipBy3); //[12, 24, 36]

//REDUCE METHOD

//5.  The sum of all the numbers
const arraySum = anArray.reduce((sum, x) => sum + x, 0)
console.log(arraySum); //78

//6.  The sum of all the numbers squared (square each number, then add them up)
const arraySquaredSum = anArray.map(x => x**2).reduce((sum, x) => sum + x, 0);
console.log(arraySquaredSum); //650
*/