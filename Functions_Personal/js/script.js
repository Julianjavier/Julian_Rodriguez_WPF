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
   if (roulette >= 0){ returnMessage= "Do some laundry." }                                          //
   else if (roulette >= .1){ "Do some laundry." }                                    //
   else if (roulette >= .2){ "Make some food." }                                     //
   else if (roulette >= .3){ "Cod some stuff, Yay." }                                //
   else if (roulette >= .4){ "Video Games." }                                        //
   else if (roulette >= .5){ "Do some laundry." }                                    // If statments basing of the math. random
   else if (roulette >= .6){ "Do dishes." }                                          //
   else if (roulette >= .7){ "Forge the Mona Lisa and sell it on the Black Market" } //
   else if (roulette >= .6){ "Do some laundry" }                                     //
   else if (roulette >= .8){ "Cure Cancer" }                                         //
   else if (roulette >= .9){ "Solve World Hunger" }                                  //
   return toDoList // returns the result the user.
}

console.log (toDoList())