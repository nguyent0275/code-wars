// --------------------------------
// let n = 103;
// let p = 42;

// // let k = (1 ** 4 + 0 ** 5 + 3 ** 6) / n;
// // console.log(k);

// function digPow(n, p) {
//   // ...
//   let arrayN = n.toString().split("").map(Number);
//   let arrayP = p.toString().split("").map(Number);
//   console.log(n, p, arrayN, arrayP);
//   let arrayK = [];

//   for (let i = 0; i < arrayN.length; i++) {
//     arrayK.push(arrayN[i] ** (arrayP[0] + i));
//     console.log(arrayN[i]);
//     console.log(arrayP[0] + i);
//     console.log(arrayN[i] ** (arrayP[0] + i));
//   }
//   console.log(arrayK);
//   const sumOfK = arrayK.reduce((acc, cur) => acc + cur);
//   console.log(sumOfK);
//   let k = sumOfK / n;
//   console.log(k);
//   if (!Number.isInteger(k)) {
//     return -1;
//   } else {
//     return k;
//   }
// }

// digPow(89, 1);

// ----------------------- UNIQUE VALUES IN ORDER -------------------------- //
// var uniqueInOrder = function (iterable) {
//   //your code here - remember iterable can be a string or an array
//   iterable = Array.from(iterable);
//   const newArray = [];
//   for (let i = 0; i < iterable.length; i++) {
//     if (iterable[i] !== iterable[i + 1]) {
//       newArray.push(iterable[i]);
//     }
//   }
//   console.log(newArray);
//   return newArray;
// };

// uniqueInOrder('AAAABBBCCDAABBB');

// --------------------- IS IT A TRIANGLE? --------------------------------------- //
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// sum of two sides has to be greater than the third side
// 4, 4, 7
// 4 + 4 = 8, if 7 > 8 than triangle === true
// function isTriangle(a, b, c) {
//   const triangleSidesArray = [a, b, c];
//   const sortedArray = triangleSidesArray.sort(function (a, b) {
//     return a - b;
//   });
//   console.log(sortedArray);
//   if (sortedArray[0] + sortedArray[1] > sortedArray[2]) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isTriangle(1, 2, 2));
// console.log(isTriangle(1, 2, 3));

// --------------------------- HIGHEST SCORING WORD ------------------------- //
// Given a string of words, calculate the highest scoring word based off of their alphabet scoring
// EX. [a = 1, b = 2, c = 3 ...]
// function high(x) {
//   // creates an array of the alphabet
//   const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//   // splits the string into an array of strings
//   let strArray = x.split(" ");
//   // converts the array of strings into an array of arrays of strings
//   let arrayArr = strArray.map((arr) => arr.split(""));
//   let scoreArray = [];
//   // loop throught each array of array and converts the strings into scores based off of their index of the alphabet array + 1
//   // then adds those strings in the array to get the total score of each word
//   for (let i = 0; i < arrayArr.length; i++) {
//     scoreArray.push(
//       arrayArr[i].map((x) => alphabet.indexOf(x) + 1).reduce((a, b) => a + b)
//     );
//   }
//   // finds the max score from the array of total scores then finds the index of that score
//   let maxScoreIndex = scoreArray.indexOf(Math.max(...scoreArray));
//   // use that index to find the corresponding word from the original array of strings and returns that word as the highest scoring word
//   return strArray[maxScoreIndex];
// }

// high("man i need a taxi up to ubud");

//  ------------------- CALCULATING WITH FUNCTIONS ------------------------------ //

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:

// const zero = (a) => (a ? a(0) : 0);
// const one = (a) => (a ? a(1) : 1);
// const two = (a) => (a ? a(2) : 2);
// const three = (a) => (a ? a(3) : 3);
// const four = (a) => (a ? a(4) : 4);
// const five = (a) => (a ? a(5) : 5);
// const six = (a) => (a ? a(6) : 6);
// const seven = (a) => (a ? a(7) : 7);
// const eight = (a) => (a ? a(8) : 8);
// const nine = (a) => (a ? a(9) : 9);

// const plus = (a) => (b) => a + b;
// const minus = (a) => (b) => b - a;
// const dividedBy = (a) => (b) => Math.floor(b / a);
// const times = (a) => (b) => a * b;

//  ------------------------------- CREATE A PHONE NUMBER --------------------------------------- //

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// EX. createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

// function createPhoneNumber(numbers) {
//   // takes the first three numbers of the array and joins them into a string with parenthesis around them
//   let areaCode = `(${numbers.slice(0, 3).join("")}) `;
//   //   takes the rest of the array and joins them into a string
//   let restOfNumber =
//     numbers.slice(3, 6).join("") + "-" + numbers.slice(6, 10).join("");
//   return areaCode + restOfNumber;
// }

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

//--------------------------------------------------- EQUAL SIDES OF AN ARRAY -------------------------------------------------- //
// function findEvenIndex(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(arr)
//     let leftArray = arr.slice(0, i);
//     let rightArray = arr.slice(i + 1);
//     // console.log(leftArray, rightArray);
//     if (leftArray.length === 0 && rightArray.length === 0) {
//       return 0;
//     }
//     if (leftArray.length === 0) {
//       let sumOfLeft = 0;
//       let sumofRight = rightArray.reduce((a, b) => a + b);
//       if (sumOfLeft === sumofRight) {
//         console.log(i);
//         return i;
//       }
//     }
//     if (rightArray.length === 0) {
//       let sumofRight = 0;
//       let sumOfLeft = leftArray.reduce((a, b) => a + b);
//       if (sumOfLeft === sumofRight) {
//         console.log(i);
//         return i;
//       }
//     }
//     if (leftArray.length > 0 && rightArray.length > 0) {
//       // console.log("test");
//       let sumOfLeft = leftArray.reduce((a, b) => a + b);
//       let sumofRight = rightArray.reduce((a, b) => a + b);
//       // console.log(sumOfLeft, sumofRight, i);
//       if (sumOfLeft === sumofRight) {
//         console.log(i);
//         return i;
//       }
//     }
//   }
//   // console.log("false");
//   return -1;
// }

// findEvenIndex([1, 2, 3, 4, 3, 2, 1]);
// findEvenIndex([1, 100, 50, -51, 1, 1]);
// findEvenIndex([20, 10, -80, 10, 10, 15, 35]);
// findEvenIndex([0, 1, 2]);

// --------------------------------------------------------------------- EXTRACT THE DOMAIN NAME FROM URL ------------------------------------------------------------------------------ //
// function domainName(url) {
//   console.log(url.replace(/.+\/\/|www.|\..+/g, ""));
// }

// domainName("http://google.com");
// domainName("http://google.co.jp");
// domainName("www.xakep.ru");
// domainName("https://youtube.com");

// --------------------------------------------------------------------- SPLIT STRINGS ------------------------------------------------------------------------------------- //

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// function solution(str) {
//   if (str.length % 2 !== 0) {
//     str = str + "_";
//   }
//   console.log(str);
//   let array = [];
//   for (let i = 0; i < str.length; i++) {
//     if (i % 2 !== 0) {
//       console.log(i % 2);
//       continue;
//     }
//     array.push(str.slice(i, i + 2));
//   }
//   console.log(array);
//   return array;
// }

// // solution("abc");
// solution("abcdefg");

// -------------------------------------------------------------------- PETE THE BAKER --------------------------------------------------------------------------------------- //

/*
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.
*/

// function cakes(recipe, available) {
//   // returns the properties of the objects as an array of arrays
//   let arrayRecipe = Object.entries(recipe);
//   let arrayIngredients = Object.entries(available);

//   // checks if the recipe has more ingredeints than available
//   if (arrayRecipe.length > arrayIngredients.length) {
//     console.log(0);
//     return 0;
//   }

//   //   empty array that stores the max amount of cakes that can be created per ingredient
//   let ingredientsUsed = [];
//   //   loops through both arrays checking if the available ingredeint matches the ingredient in a recipe
//   for (let i = 0; i < arrayRecipe.length; i++) {
//     for (let j = 0; j < arrayIngredients.length; j++) {
//       if (arrayRecipe[i][0] === arrayIngredients[j][0]) {
//         //   if so, divide the available ingredient by the recipe amount to find highest possible yield
//         //   push that value into the array to find out how much each available ingredeint can possibly yield
//         ingredientsUsed.push(
//           Math.floor(arrayIngredients[j][1] / arrayRecipe[i][1])
//         );
//       }
//     }
//   }
//   //   checks the array for the minimum value and returns that
//   // the minimum value will equal the total amount of cakes that can come from all possible ingredients
//   console.log(Math.min(...ingredientsUsed));
//   return Math.min(...ingredientsUsed);
// }

// // must return 2
// cakes(
//   { flour: 500, sugar: 200, eggs: 1 },
//   { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
// );
// // must return 0
// cakes(
//   { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
//   { sugar: 500, flour: 2000, milk: 2000 }
// );

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// function duplicateCount(text) {
//   const counts = {};
//   const array = Array.from(text.toLowerCase());
//   console.log(array);

//   array.forEach(function (x) {
//     counts[x] = (counts[x] || 0) + 1;
//   });

//   console.log(Object.entries(counts));

//   const countsArray = Object.entries(counts);
//   const duplicatesArray = [];
//   for (let index = 0; index < countsArray.length; index++) {
//     if (countsArray[index][1] > 1) {
//       duplicatesArray.push(countsArray[index]);
//     }
//   }
//   console.log(duplicatesArray);

//   return duplicatesArray.length;
// }

// duplicateCount("aabBcde");

// ----------------------------------------------------------------------------------- CAMELCASE METHOD ------------------------------------------------------------------------------ //
// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// String.prototype.camelCase = function (str) {
//   if (this.length === 0) {
//     return "";
//   }
//   const myArray = this.split(" ");
//   const newArray = [];
//   for (let i = 0; i < myArray.length; i++) {
//     if (myArray.length === 0 || undefined) {
//       return "";
//     }
//     newArray.push(myArray[i][0]?.toUpperCase() + myArray[i].slice(1));
//   }
//   console.log(newArray.join(""));
//   return newArray.join("");
// };

// const myString = "";
// myString.camelCase();

// --------------------------------------------------------------------------- Roman Numerals Helper ------------------------------------------------------------------------------ //

// Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals:

// 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC
// 2008 is written as 2000=MM, 8=VIII; or MMVIII
// 1666 uses each Roman symbol in descending order: MDCLXVI.
// Input range : 1 <= n < 4000

// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

// +--------+-------+
// | Symbol | Value |
// +--------+-------+
// |    M   |  1000 |
// |   CM   |   900 |
// |    D   |   500 |
// |   CD   |   400 |
// |    C   |   100 |
// |   XC   |    90 |
// |    L   |    50 |
// |   XL   |    40 |
// |    X   |    10 |
// |   IX   |     9 |
// |    V   |     5 |
// |   IV   |     4 |
// |    I   |     1 |
// +--------+-------+

const numberToRoman = function (num) {
  if (num < 1 || num > 4000) {
    console.log(0);
    return 0;
  }
  const numArray = (num + "").split("");
  console.log(numArray);

  const romanArray = [];
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i``]) {
      switch (numArray[i]) {
        case 1:
          romanArray.push("M");
        case 2:
          romanArray.push("MM");
        case 3:
          romanArray.push("MMM");
        case 4:
          romanArray.push("MMMM");
      }
    }
  }
};

numberToRoman(1990);
