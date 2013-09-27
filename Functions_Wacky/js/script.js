/**
 * Created with JetBrains WebStorm.
 * User: julianrodriguez
 * Date: 9/25/13
 * Time: 11:29 PM
 * To change this template use File | Settings | File Templates.
 */

// DPS calculator.

function MyDPS (atk, speed, BossDef){        //Function to enclose a given problem.
    var oneSecDamage = (atk*speed)/BossDef   //variable to equate the parameters.
    return oneSecDamage                      //Returns the final result.
}

var loopcount= parseInt (prompt("Over what time?"))
for (i=0; i< loopcount; i++){    //
     console.log (MyDPS(parseInt (prompt("Your attack?")),      //
                        parseInt (prompt("Your Speed")),        //
                        parseInt (prompt("Boss Defense?"))      // Loop to repeat the function a number of times.
                        ));                                     //
}                                                               //