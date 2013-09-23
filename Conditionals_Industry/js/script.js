// Conditionals Industry  // Sep 22, 2013 //Julian Rodriguez

//Cargo Container Balance.

var cargoWeight= prompt (parseInt["Cargo Weight"]); //Variable for weight for cargo.
var cargoContainer= prompt (parseInt["Container Weight"]); //Variable for container weight.
var maxLimit= 500; // Maximum limit for weight.
var totalWeight= cargoWeight+cargoContainer; //Total weight for the cargo and container.

if (totalWeight > maxLimit){

    console.log ("Sorry you are at "+totalWeight+" tons.")//Logs the information in the console browser
    alert("Sorry you are at "+totalWeight+" tons."); // Alerts to notify user it is over the limit.

} else {console.log ("You are within the limit.")//Logs the information in the console browser
        alert ("You are within the limit.")}; //Alert to notify the user is within limit.
