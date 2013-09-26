/**
 * Created with JetBrains WebStorm.
 * User: julianrodriguez
 * Date: 9/25/13
 * Time: 9:57 PM
 * To change this template use File | Settings | File Templates.
 */


function toDoList( ){ // function to encapsulate the "If" and math.random
   var roulette= Math.random()                                                       //
   var returnMessage= "" ;
   if (roulette >= .0){ returnMessage= "Do some laundry." }                                         //
   else if (roulette >= .1){ returnMessage="Do some laundry." }                                    //
   else if (roulette >= .2){ returnMessage="Make some food." }                                     //
   else if (roulette >= .3){ returnMessage="Cod some stuff, Yay." }                                //
   else if (roulette >= .4){ returnMessage="Video Games." }                                        //
   else if (roulette >= .5){ returnMessage="Do some laundry." }                                    // If statments basing of the math. random
   else if (roulette >= .6){ returnMessage="Do dishes." }                                          //
   else if (roulette >= .7){ returnMessage="Forge the Mona Lisa and sell it on the Black Market" } //
   else if (roulette >= .6){ returnMessage="Do some laundry" }                                     //
   else if (roulette >= .8){ returnMessage="Cure Cancer" }                                         //
   else if (roulette >= .9){ returnMessage="Solve World Hunger" }                                  //
   return returnMessage // returns the result the user.
}

console.log (toDoList())