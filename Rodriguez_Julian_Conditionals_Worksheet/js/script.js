//Celsius to Fahrenheit

var degree= 203;
var type= "C"


if (type == "F") {
    var Farn = (degree * 9/5 + 32);
    console.log ("The temperature is "+Farn+" degrees Fahrenheit.")
}
if (type == "C") {
    var Celsi = (degree - 32) * 5/9
    console.log ("The temperature is "+Celsi+" degrees Fahrenheit.")
}


//Last Chance for Gas
var mpg= 24;
var gasLeft= 21/100;
var galons = 16;
var X= (gasLeft * galons);

if (((mpg*galons)*gasLeft) > 200) {
    console. log ("Yes, you can make it without stopping for gas!")
} else {
  console. log ("You only have "+X+" gallons of gas in your tank, better get gas")

}

//Grade Letter

var studentGrade = 85;
var letterGrade = "";

if (studentGrade > 95){
    console.log (letterGrade ="A")

} else if (studentGrade > 80){
    console.log (letterGrade ="B")

} else if (studentGrade > 70){
    console.log (letterGrade ="C")

} else if (studentGrade > 60){
    console.log (letterGrade ="D")
}

//Check Login

var userName= "Nikel";
var passWord= "765";

var correctName= "Drebin";
var correctPass= "893";

if (userName == correctName){
  console.log ("Welcome, Nikel")
} else console. log ("User not found. Try again.")

if (passWord == correctPass){
   console.log ("Welcome, Nikel")
} else console.log ("Password does not match our records")


//Tire Pressure 1

var frontTire= [24 , 19]
var rearTire= [30 , 30]

if (frontTire [0] == frontTire [1] && rearTire [0] == rearTire [1]) {
  console. log("The tires pass spec!")
}   else console.log ("Get your tires checked out!")


//Movie Ticket Price

var seniorDiscount = 55;
var timeDiscount1 =15;
var timeDiscount2 =17;

var timeMovie = 16;
var age =24;

if (age > seniorDiscount) {
    console. log ("The ticket price is $7.00")
} else if (timeDiscount1 < timeMovie > timeDiscount2){
    console.log ("The ticket price is $7.00")
} else console. log ("The ticket price is $12.00")