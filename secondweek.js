// find the largest and smallest element of array 

let arr1 = [10, 5, 20, 8];

let max1 = arr1[0];
let min1 = arr1[0];

for (let i = 1; i < arr1.length; i++) {
  if (arr1[i] > max1) max1 = arr1[i];
  if (arr1[i] < min1) min1 = arr1[i];
}

console.log("Largest:", max1);
console.log("Smallest:", min1);


// Find Second Largest Element (Easy Logic)

let arr2 = [10, 20, 5, 8];

let largest2 = arr2[0];
let second2 = arr2[0];

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > largest2) {
    second2 = largest2;
    largest2 = arr2[i];
  }
}

console.log("Second Largest:", second2);


// Reverse an Array

let arr3 = [1, 2, 3, 4];
let rev3 = [];

for (let i = arr3.length - 1; i >= 0; i--) {
  rev3.push(arr3[i]);
}

console.log("Reversed Array:", rev3);


// remove duplicate elements from array

let arr4 = [1, 2, 2, 3, 4, 4];
let result4 = [];

for (let i = 0; i < arr4.length; i++) {
  if (!result4.includes(arr4[i])) {
    result4.push(arr4[i]);
  }
}

console.log("Without Duplicates:", result4);


// count frequency of each element

let arr5 = [1, 2, 2, 3];
let freq5 = {};

for (let i = 0; i < arr5.length; i++) {
  let num5 = arr5[i];
  freq5[num5] = (freq5[num5] || 0) + 1;
}

console.log("Frequency Count:", freq5);


// check if array is sorted

let arr6 = [1, 2, 3, 4];
let sorted6 = true;

for (let i = 1; i < arr6.length; i++) {
  if (arr6[i] < arr6[i - 1]) {
    sorted6 = false;
    break;
  }
}

console.log("Is Sorted:", sorted6);


// rotate array by one position

let arr7 = [1, 2, 3, 4, 5];

let last7 = arr7.pop();
arr7.unshift(last7);

console.log("Rotated Array:", arr7);


// find missing number

let arr8 = [1, 2, 4, 5];
let n8 = 5;

let sum8 = 0;
for (let i = 0; i < arr8.length; i++) {
  sum8 += arr8[i];
}

let total8 = (n8 * (n8 + 1)) / 2;
console.log("Missing Number:", total8 - sum8);


// find intersection of two arrays

let a9 = [1, 2, 3];
let b9 = [2, 3, 4];
let common9 = [];

for (let i = 0; i < a9.length; i++) {
  if (b9.includes(a9[i])) {
    common9.push(a9[i]);
  }
}

console.log("Intersection:", common9);


// move all zeros to end

let arr10 = [0, 1, 0, 3, 12];
let result10 = [];

for (let i = 0; i < arr10.length; i++) {
  if (arr10[i] !== 0) {
    result10.push(arr10[i]);
  }
}

while (result10.length < arr10.length) {
  result10.push(0);
}

console.log("Zeros Moved to End:", result10);
