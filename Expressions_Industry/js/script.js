//Expressions_Industry // Sep 21, 2013
//PC 4 port Hard Drive space

var portSpace= [ parseInt (prompt("Whats the Space on HD1")),
                 parseInt (prompt("Whats the Space on HD2")),
                 parseInt (prompt("Whats the Space on HD3")),
                 parseInt (prompt("Whats the Space on HD4"))];

var totalSpace= portSpace [0] + portSpace [1] + portSpace [2] + portSpace [3];

console. log ("You have a total of "+totalSpace+"GB available.");



