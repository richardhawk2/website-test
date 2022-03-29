"use strict"; //NOTE: Investigate this further. Most tutorials encourage "use strict".

//This is a sandbox file for testing JavaScript learnings
//Next up: https://javascript.info/coding-style
/*
--if/then stuff
let userName = prompt("Who's there?", 'Enter Username');
if (userName == "Admin"){
   let password = prompt("Please enter your password.", 'Enter Password');
   if (password == "TheMaster"){
       alert("Welcome!");
   }
   else if (password == '' || password === null){
       alert("Canceled.")
   }
   else{
       alert("I don't know you.");
   }
}
else if (userName == '' || userName === null){
    alert ("Canceled.");
}
else{
    alert ("I don't know you.");
}

--while/for stuff
let userNum = prompt('Please enter a number greater than 100.', '');
let failedTries = 1;

while (userNum < 100){
    alert('Please enter a number greater than 100. You have failed ' + failedTries + ' times.', '');
    userNum = prompt('Please enter a number greater than 100.', '');
    if (userNum < 100){
        failedTries++;
    }
}
alert ('That took you ' + failedTries + ' failed attempts.'); */

/*alert('This script outputs all prime numbers between 2 and a given value!');

let n = prompt('Please enter your value.', '');

nextPrime:
for (let i = 2; i <= n; i++){
    
    for (let j = 2; j < i; j++){
        if (i % j == 0) continue nextPrime;
    }
    
    alert(i);
} */


/* function min(a,b){
    return (a > b) ? b : a;
}

let firstNum = prompt('Please enter your first number.',);
let secondNum = prompt('Please enter your second number.');

alert(min(firstNum, secondNum));

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );
*/

  let sum = (a, b) => a + b;
  let numOne = prompt("Please enter your first number.", );
  let numTwo = prompt("Please enter your second number.", );

  let finalSum = sum(numOne, numTwo);
  alert(finalSum);
