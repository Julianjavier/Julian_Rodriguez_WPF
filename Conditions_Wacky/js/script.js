// Dual Digital key lock...thing.  // Sep 23, 2013 // Julian Rodriguez

var keyIn1 = prompt("First Key") //First key input.
var keyIn2 = prompt("Second Key") //Second key input.

var rightKey1 = "A" //First correct key input.
var rightKey2 = "O" //Second correct key input.

if (keyIn1 == rightKey1 && keyIn2 == rightKey2){// if statement declaring if variables meet conditions to print on the console.
   console. log("Hey, come right in!")
}
//if statement declaring if variables do not meet conditions to print on the console.
else if(keyIn1 != rightKey1 && keyIn2 == rightKey2 || keyIn1 == rightKey1 && keyIn2 != rightKey2){
   console. log("Close but no cigar.")
}
//Simple else statement to print on console if no conditions are not met.
else ("No! None of that...")