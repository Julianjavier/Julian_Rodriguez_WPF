
// Seasoning for Pork. (need (total seasoning) half of total oz.(Pork)

var Pork= 20  // total oz. of pork
var salt= 5  // total oz. of salt
var bPepper= 4 // total oz. black pepper

var totalS= (salt + bPepper) // adds the salt and black pepper for total in percent

var perPork= (totalS / Pork) // calculates percent.
console.log (perPork)

//If you got enough seasoning.
if (perPork >= .5){
    console.log ("Salt and Pepper are your best friends")
}
//If you lack seasoning it will inform you have.
else {
    console.log ("You only got "+ totalS +".oz better get some more")
}

