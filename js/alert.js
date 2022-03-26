"use strict"; //NOTE: Investigate this further. Most tutorials encourage "use strict".

//This is a sandbox file for testing JavaScript learnings
//Finished on https://javascript.info/operators
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