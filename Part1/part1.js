const array = [12, 10, 22, 5, 25];
for(var i = 0; i < array.length; i++){
setTimeout(function(){
console.log("The element in position " + i + " is: " + array[i]);
}, 5000);
}


// The above code output to the console will be: 
// "The element in position 5 is: undefined"
// "The element in position 5 is: undefined"
// "The element in position 5 is: undefined"
// "The element in position 5 is: undefined"
// "The element in position 5 is: undefined"


// This is because var is Function-scoped.


// #----------------------------------------------------------------------------------------------------------------#


// The below code would be the correct way to find out which position each element is in

const array = [12, 10, 22, 5, 25];
for(let i = 0; i < array.length; i++){
    setTimeout(function(){
        console.log("The element in position " + i + " is: " + array[i]);
    }, 5000);
}


// The above code output to the console will be: 
// The element in position 0 is: 12
// The element in position 1 is: 10
// The element in position 2 is: 22
// The element in position 3 is: 5
// The element in position 4 is: 25


// This is because let is Block-scoped.



// What I did is change the 'var' function in the for loop to 'let'. the reason we do this is to
// fix a timing issue caused by the way var behaves in loops.
// When you use var in a loop, it doesn’t remember the value of i for each step. All setTimeout functions
// end up using the final value of i after the loop finishes.
// By the time the setTimeout runs after 5 seconds, the loop has finished and i equals 5. But the array only has
// 4 positions
// So I use 'let' because it creates a new box for i in every loop. Each setTimeout keeps its own copy of i, 
// so it remembers the correct value when it runs after 5 seconds.