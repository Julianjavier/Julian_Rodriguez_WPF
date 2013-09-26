/**
 * Created with JetBrains WebStorm.
 * User: julianrodriguez
 * Date: 9/25/13
 * Time: 11:29 PM
 * To change this template use File | Settings | File Templates.
 */

// DPS calculator.

function MyDPS (atk, speed, BossDef){
    var oneSecDamage = (atk*speed)/BossDef
    return oneSecDamage
}


for (i=0; i< parseInt (prompt("Over how much time?")); i++){
     console.log (MyDPS(prompt("Your attack?"), prompt("Your Speed"), parseInt (prompt ("Boss Defense?"))));
}