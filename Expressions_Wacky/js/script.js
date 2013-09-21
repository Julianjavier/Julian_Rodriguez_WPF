//Expressions Wacky // Sep 21, 2013
//Average DPS on Boss Defence

var ATK= 12 //attack of a character
var bossDef= 14 //defence of the boss
var DPS= 2 //seconds it takes to start attack

var mitigatedDPS= (ATK-bossDef)*DPS //calculates for the mitigated attack on the boss

//If statement that makes sure if you are doing damage at all.
if (mitigatedDPS <= 0){
    console.log ("You got gimped gear son!")
} else console.log ("You are generating "+mitigatedDPS+" every "+DPS+ "seconds")