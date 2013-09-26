/**
 * Created with JetBrains WebStorm.
 * User: julianrodriguez
 * Date: 9/25/13
 * Time: 6:50 PM
 * To change this template use File | Settings | File Templates.
 */

//Functions Industry

   var weight1= parseInt (prompt("First Weight")); //
   var weight2= parseInt (prompt("Second Weight"));// weight values
   var weight3= parseInt (prompt("Third Weight")); //

    function weightAvr( ){      //Function to set up averege weight.
   var totalWeight= weight1+weight2+weight3; //variables for total
   return totalWeight/3
    }

console.log(weightAvr())