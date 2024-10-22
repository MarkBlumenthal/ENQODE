1) Before you run this code, make sure you have Node.js installed. You can run the following commands in your terminal:


node -v
npm -v


2) then create a part1.js file.
Copy the following code into the part1.js file:

const array = [12, 10, 22, 5, 25];
for(var i = 0; i < array.length; i++){
setTimeout(function(){
console.log("The element in position " + i + " is: " + array[i]);
}, 5000);
}



3) Once copied, open your terminal and navigate to the correct folder and run: part1.js

you should see the output: 
The element in position 5 is: undefined
The element in position 5 is: undefined
The element in position 5 is: undefined
The element in position 5 is: undefined
The element in position 5 is: undefined



4) To get the correct output, comment out the code and copy the following code below it:

const array = [12, 10, 22, 5, 25];
for(let i = 0; i < array.length; i++){
    setTimeout(function(){
        console.log("The element in position " + i + " is: " + array[i]);
    }, 5000);
}




Notice that we changed the 'var' function to 'let'.
In the same terminal run: part1.js

You should see the output:

The element in position 0 is: 12
The element in position 1 is: 10
The element in position 2 is: 22
The element in position 3 is: 5
The element in position 4 is: 25