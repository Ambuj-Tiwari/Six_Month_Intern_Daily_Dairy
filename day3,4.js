// Today i will practice some fuction question 

// create a function using the "Fuction " keyword that takes a string as an argument & return the number of vowels in the string 

function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("ambujtiwari")); 

//Check whether a number is palindrome

function isPalindrome(num) {
  let original = num;
  let rev = 0;

  while (num > 0) {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
  }

  if (rev === original) {
    return "Palindrome";
  } else {
    return "Not Palindrome";
  }
}


console.log(isPalindrome(121));
console.log(isPalindrome(123)); 

// Write a function to find the sum of digits of a number.

function sumOfDigits(num) {
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum = sum + digit;
    num = Math.floor(num / 10);
  }

  return sum;
}

console.log(sumOfDigits(1234)); 


// Write a function that returns the reverse of a number.

function reverseNumber(num) {
  let rev = 0;
  while (num > 0) {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
  }
  return rev;
}

console.log(reverseNumber(1234)); 


 // write a function for factorial of the number 

 function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

console.log(factorial(5)); 

// Write a function that returns the square of a number.

function square(num) {
  return num * num;
}

console.log(square(4)); 

// write an arrow function to check numbers  type 

const checkNumber = (num) => {
  if (num > 0) return "Positive";
  else if (num < 0) return "Negative";
  else return "Zero";
};

console.log(checkNumber(-5)); 

// map fuction 

let number = [1, 2, 3, 4];

let squares = number.map(function (num) {
  return num * num;
});

console.log(squares); // [1, 4, 9, 16]
  

// filter function

let number = [1, 2, 3, 4, 5, 6];

let evenNumbers = number.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNumber); // [2, 4, 6]
  

// for each function 

let numbers = [1, 2, 3, 4];

numbers.forEach(function (num) {
  console.log(num * 2);
});









