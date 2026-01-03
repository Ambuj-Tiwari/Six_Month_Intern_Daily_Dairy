console.log("Ambuj Tiwari");
let a = 10; 
let b = 20;
console.log("Sum:", a + b);
console.log("Difference:", b - a);
console.log("Product:", a * b);
console.log("Quotient:", b / a);    
// grade_of_student.js
let score = 85 ;
let grade; 

if(score >= 90 && score <= 100) {
    grade = "A";
} else if(score >= 80 && score < 90) {
    grade = "B";
} else if(score >= 70 && score < 80) {
    grade = "C";
} else if(score >= 60 && score < 70) {
    grade = "D";
} else if(score >= 0 && score < 60) {
    grade = "F";
} else {
    grade = "Invalid score";
}       
console.log("Grade of the student is:", grade);