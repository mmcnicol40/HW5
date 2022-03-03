console.log(" HW 5 ex 2 - Array Math");

//create an array with 1-10
const arrayMth = [];
for (i = 1; i <= 10; i++) {
  arrayMth.push(i);
}

// Visually validate setup of array 1 - 10
console.log(`Original array of 10 elements: ${arrayMth}`);

// An array of odd numbers
const oddNum = arrayMth.filter((y) => y % 2 !== 0);
console.log(`New array of only odd numbered elements: ${oddNum}`);

// An array of numbers divisible by either 2 OR 5
const divBy2or5 = arrayMth.filter((y) => y % 2 === 0 || y % 5 === 0);
console.log(`New array of elements divisible by 2 or 5: ${divBy2or5}`);

// An array of all the numbers divisible by 3, then square each element
const divBy3sqr = arrayMth.filter((y) => y % 3 === 0).map((x) => x * x, 0);
console.log(`New array of elements divisible by 3, then sqr each element: ${divBy3sqr}`);

// Square each number that is divisible by 5 then sum
const divBy5sqrsum = arrayMth
  .filter((y) => y % 5 === 0)
  .map((x) => x * x, 0)
  .reduce((acc, value) => acc + value, 0);
console.log(`New array of elements divisble by 5 then squared & summed to one #: ${divBy5sqrsum}`);
