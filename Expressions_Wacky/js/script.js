//Expressions Wacky // Sep 21, 2013
//Average DPS on Boss Defence

var ATK= 12
var bossDef= 14
var DPS= 4

var mitigatedDPS= (ATK-bossDef)*DPS

if (mitigatedDPS <= 0){
    console.log ("You got gimped gear son!")
} else console.log ("You are generating "+mitigatedDPS+" every 4 seconds")