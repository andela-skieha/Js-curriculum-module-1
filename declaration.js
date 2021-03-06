// Declaring Variables
// using keyword 'var', can be used for both local and global variables
var x = 42;

/* simply assigning it a value, this always declares a global variable.
   Not recommended.
*/
y = 23;

// using keyword 'let', this can be used to declare a block scope local var
let z = 234;

// Evaluating Variables
/* a variable declared using the var statement without an initial specified value
   logs 'undefined'
*/
var a;
console.log("The value of a is " + a); // logs "The value of a is undefined"

// attempting to access an undeclared variable results in a ReferenceError exception
console.log("The value of b is " + b); // throws ReferenceError exception

/* attempting to access an identifier declared with 'let' before initialization
 results in ReferenceError exception
*/
console.log("The value of c is " + c); // throws ReferenceError exception
let c = 45;

// Variable Scope
if (true) {
  var x = 5; // logs 5
  let y = 4; // ReferenceError: y is not defined
}
console.log(x);
console.log(y);

// Variable Hoisting
// Example 1
console.log(x === undefined); // true
var x = 3;

// Example 2
var myvar = 'my value';
console.log(myvar); // logs 'my value'

(function() {
  console.log(myvar); // undefined
  var myvar = 'local value';
})();

// Constants
const PI = 3.14;

/* constants cannot be declared with the same name as a function or
   a variable.
*/
function f() {};
const f = 5; // SyntaxError: Identifier 'f' has already been declared

function f () {
  const g = 5;
  var g; SyntaxError: Identifier 'g' has already been declared
};

// Object attributes are not protected, so the following will work
const MY_OBJECT = {'name': 'Kieha'};
console.log(MY_OBJECT);
MY_OBJECT.name = 'Njerry'
console.log(MY_OBJECT); // he value changes to 'Njerry'
