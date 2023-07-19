/*import greet from './greet.js'

// call the function & print the result on the screen
console.log(greet('Musa_Baloyi')) */

import chalk from 'chalk';
//import the greet module that is in the current folder
import greet from './greet.js'

const styledMessage = chalk.bgBlue.black(greet('Musa'));
console.log(styledMessage)

import figlet from 'figlet';

figlet("Now Its Getting Hot!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});