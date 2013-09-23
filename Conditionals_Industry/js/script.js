// Conditionals Industry  // Sep 22, 2013 //Julian Rodriguez

//Cargo Container Balance.

var cargoWeight= 200; //Variable for weight for cargo.
var cargoContainer= 200; //Variable for container weight.
var maxLimit= 500; // Maximum limit for weight.
var totalWeight= cargoWeight+cargoContainer; //Total weight for the cargo and container.

if (totalWeight > maxLimit){
   alert("Sorry you are at "+totalWeight+" tons.")
} else {alert ("Yes these alert boxes are very necessary.")};
