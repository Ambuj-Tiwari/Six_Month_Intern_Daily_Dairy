
 Today i will learn some loop problem in javascript */ 

let num = 10;

let result = num >= 0 ? "Positive" : "Negative";

console.log(`The number is ${result}.`);
// this is for loop to print even and odd numbers from 1 to 8
for (let i = 1;  i<=8; i++)
  { if (i%2 == 0)
  {   console.log("The number is even" , i); } 
  else 
 {console.log("The number is odd" , i);} 
} 

// this is while loop to print first 5 natural numbers 
let count = 5
while(count >=1)
{ console.log("The number is :", count );
    count--;
} 

// This is for the do while loop to print the number from1 to 10 
let h = 1;
{
do 
{ console.log("The number is : " , h );
    h++;
} while (h <= 10);
}

// Some of the question of the conditional statement 

// Factorial of the number 

let number = 5;
let factorial = 1;

for(i=1; i<=number; i++) 
{ 
    factorial = factorial * i;

}
console.log("The factorial of the number is :" , factorial); 

// Count Digits in a Number 

let n1 = 9867;
let count1 = 0;
 while(count >= 0)
 { n1 = Math.floor(n1 / 10)};
 count1++;
    console.log("The count of the digit is :" , cout)


    // calculate the sum of 1 to 5 
let sum = 0;
for (let i=1; i<=5; i++)
    {sum= sum+i}
  

    console.log("The sum of 1 to 5 is :" , sum);
       console.log("loop has ended"); 

       //Create a game where we start any random game number . Ask the user to keep guessing the game number until the user enter correct value 
       
      const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const gameNumber = 25;

function askQuestion() {
  rl.question("Guess the game number: ", function (userNum) {
    userNum = Number(userNum);

    if (userNum === gameNumber) {
      console.log("🎉 Congratulations! You entered the right number.");
      rl.close();
    } else {
      console.log("❌ Wrong number, try again!");
      askQuestion(); // loop
    }
  });
}

askQuestion();
25
