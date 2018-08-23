console.log("Starting app.js");

const fs = require('fs');
const os = require('os')
const _ = require('lodash')
const notes = require('./notes.js')

//console.log(_.isString(true));
//console.log(_.isString('Al'));

var a = [1,2,3,4,4,'Al','nodejs','js'];

console.log(a);

console.log(_.uniq(a));


/*var res = notes.addNote();
console.log(res);

var val = notes.add(1,2);
console.log(val);

console.log('Results:', notes.add(9,-10) );

var val = notes.Subtract(1,2);
console.log(val);

console.log('Results:', notes.Subtract(10,10) );
*/

// var user = os.userInfo();
// //console.log(user);

// //fs.appendFile('greetings.txt','hello world!');
// /*
// fs.appendFile('greetings.txt','Hello ' + user.username + ' !',function (err) {
//     if (err) {
//         console.log('Unable to write file');
//     }
// })
// */
// //fs.appendFileSync('greetings.txt','Hello ' + user.username + '!');

// console.log(`Hello ${user.username}! You are ${notes.age}`);
// fs.appendFileSync('greetings.txt',`Hello ${user.username}! You are ${notes.age}`);

