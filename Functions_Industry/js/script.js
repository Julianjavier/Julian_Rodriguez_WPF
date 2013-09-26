/**
 * Created with JetBrains WebStorm.
 * User: julianrodriguez
 * Date: 9/25/13
 * Time: 6:50 PM
 * To change this template use File | Settings | File Templates.
 */

//Functions Industry

   var weight1= prompt (parseInt("First Weight")); //
   var weight2= prompt (parseInt("Second Weight"));// weight values
   var weight3= prompt (parseInt("Third Weight")); //

    function weightAvr( ){      //Function to set up averege weight.
   var totalWeight= weight1+weight2+weight3; //variables for total
   return totalWeight/3
    }

console.log(weightAvr())