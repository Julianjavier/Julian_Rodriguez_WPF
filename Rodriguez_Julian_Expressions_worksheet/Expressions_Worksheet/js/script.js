
//Dog Years

var sparkyAge = 14;

var dogYears= sparkyAge*7;

console.log ("Sparky is "+ sparkyAge +" human years old which is "+dogYears+" in dog years.");

//Slice of Pie pt.1

var slices = 6
var pizzas = 24
var people = 14

var averegeSlice = (pizzas*slices)/people

console.log ("Each person ate "+averegeSlice+" slices of pizza at the party.");

//Slice of Pie pt.2

var sparkyGets = slices * pizzas % people;
console.log ("Sparky got "+ sparkyGets +" slices of pizza." )

//Averege shopping bill

var bill = [200, 92, 45, 60, 57]
var total = bill[0] + bill[1] + bill[2] + bill[3] + bill[4];

averege= total/5

console. log("You have spent a total of $"+total+" on groceries over 5 weeks. That is an average of $"+averege+" per week")

//Discounts

var original = 44.00

var discountPer = 50

var saleTax = 7

decimalPer = discountPer / 100

taxPer = saleTax / 100

discountOriginal = original*decimalPer

taxPrice= decimalPer*taxPer

console.log ("Your Tuna was originally $"+original+", but after a "+decimalPer+"% discount, it is now $" +discountOriginal+" without tax, and $"+taxPrice+"with tax.")
