//Expressions Wacky // Sep 21, 2013
//Average DPS on Boss Health, every 4 seconds

var ATK= 12
var bossDef= 14
var bossHP= 500

var mitigatedDPS= (ATK*4) - bossDef

console.log ("You are generating "+mitigatedDPS+" every 4 seconds")