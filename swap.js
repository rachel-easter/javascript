Method1:
// Taking user input for two numbers
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
 console.log(`Before swapping: num1 = ${num1}, num2 = ${num2}`);
    
    // Swapping without using a third variable
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
    
 console.log(`After swapping: num1 = ${num1}, num2 = ${num2}`);


Input:
Enter the first number:12
Enter the second number:13

Before swapping: num1 = 12, num2 = 13
After swapping: num1 = 13, num2 = 12

Method2:
// Taking user input for two numbers
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
 console.log(`Before swapping: num1 = ${num1}, num2 = ${num2}`);
//swapping two numbers:
[num1,num2]=[num2,num1];
console.log(`After swapping: num1 = ${num1}, num2 = ${num2}`);



