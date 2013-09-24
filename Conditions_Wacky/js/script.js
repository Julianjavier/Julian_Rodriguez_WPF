// Dual Digital key lock...thing.  // Sep 23, 2013 // Julian Rodriguez

var keyIn1 = prompt("First Key") //First key input.
var keyIn2 = prompt("Second Key") //Second key input.

var rightKey1 = "A" //First correct key input.
var rightKey2 = "O" //Second correct key input.

if (keyIn1 == rightKey1 && keyIn2 == rightKey2){
   console. log("Hey, come right in!")
} else if(keyIn1 != rightKey1 && keyIn2 == rightKey2 || keyIn1 == rightKey1 && keyIn2 != rightKey2){
   console. log("Close but no cigar.")
} else ("No! None of that...")