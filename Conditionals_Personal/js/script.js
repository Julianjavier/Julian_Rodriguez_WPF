
// Seasoning for Pork. (need (total seasoning) half of total oz.(Pork)

var Pork= 20  // total oz. of pork
var salt= 4  // total oz. of salt
var bPepper= 5 // total oz. black pepper

var totalS= (salt + bPepper) // adds the salt and black pepper for total in percent

var perPork= (totalS / Pork) // calculates percent.

if (perPork <= .5){
    console.log ("Salt and Pepper are your best friends")
} else {
    console.log ("You only got "+totalS+" .oz better get some more")
}

