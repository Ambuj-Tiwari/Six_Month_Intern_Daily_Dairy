// sum of two numbers 

function sum(a, b) {
  return a + b;
}

console.log(sum(5, 3)); 

// check for even or odd 

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOdd(7)); 


//find largest of three numbers 

function largestOfThree(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

console.log(largestOfThree(10, 25, 15)); 

// count vowels in string 

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

console.log(countVowels("JavaScript"));

// reverse a number 

function reverseNumber(num) {
  let rev = 0;

  while (num > 0) {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
  }
  return rev;
}

console.log(reverseNumber(1234)); // 4321


// check pallindrone number 

function isPalindrome(num) {
  let original = num;
  let rev = 0;

  while (num > 0) {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
  }

  return original === rev;
}

console.log(isPalindrome(121)); 

// find factorial of number 

function factorial(num) {
  let fact = 1;

  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log(factorial(5)); 

// fibonaci series 

function factorial(num) {
  let fact = 1;

  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log(factorial(5)); 

// check prime number 


function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(11)); // true


/// Celsius to Fahrenheit

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(25)); 









