# JavaScript `var` vs `let` in `setTimeout` Example

## Prerequisites
Before you run this code, make sure you have **Node.js** installed. You can verify by running the following commands in your terminal:


node -v
npm -v
If you don't have Node.js installed, download it from nodejs.org.

Steps
Step 1: Create the JavaScript File
Create a file called part1.js in your project folder.
Copy the following code into part1.js:

const array = [12, 10, 22, 5, 25];
for(var i = 0; i < array.length; i++){
    setTimeout(function(){
        console.log("The element in position " + i + " is: " + array[i]);
    }, 5000);
}
Step 2: Run the Code
Open your terminal and navigate to the folder where part1.js is located. You can use the following command to change directories:

cd path/to/your/folder
Run the JavaScript file using Node.js:

node part1.js
Expected Output (Incorrect)
After 5 seconds, you should see the following incorrect output:


The element in position 5 is: undefined
The element in position 5 is: undefined
The element in position 5 is: undefined
The element in position 5 is: undefined
The element in position 5 is: undefined

Step 3: Fix the Code
The issue occurs because var doesn't have block scope, so by the time the setTimeout callback is executed, the loop has completed and i is equal to 5 in every iteration. To fix this, change var to let, which has block scope and preserves the correct value of i for each iteration.

Comment out the previous code and replace it with this:

const array = [12, 10, 22, 5, 25];
for(let i = 0; i < array.length; i++){
    setTimeout(function(){
        console.log("The element in position " + i + " is: " + array[i]);
    }, 5000);
}

Step 4: Run the Fixed Code
Run the file again using Node.js:

node part1.js
Expected Output (Correct)
After 5 seconds, you should see the correct output:


The element in position 0 is: 12
The element in position 1 is: 10
The element in position 2 is: 22
The element in position 3 is: 5
The element in position 4 is: 25


Explanation
var: Variables declared with var do not have block scope, so by the time the setTimeout function runs, the loop has already finished, and the value of i is 5 (the length of the array).
let: Variables declared with let have block scope, so each iteration of the loop gets its own copy of i, and the correct value is logged.
By using let, the value of i is preserved in each iteration, and the correct output is displayed.