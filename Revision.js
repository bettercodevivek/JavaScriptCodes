"use strict";

/*The "use strict" directive was new in ECMAScript version 5.

It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

With strict mode, you can not, for example, use undeclared variables.*/

/*Strict mode makes it easier to write "secure" JavaScript.

Strict mode changes previously accepted "bad syntax" into real errors.

As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.

In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error. */

// USE STRICT SHOULD ONLY BE MENTIONED IN THE STARTING OF THE SCRIPT ONLY THEN IT IS RECOGNIZED.

// batman = 8 ;
// console.log(batman);


var name1 = 'mahesh';
var name2 = 'ramesh';

console.log(name1,name2);

function Tester(){
    name1='batman'
    name2='robin'

    return name1+name2
}

console.log(Tester());


// var keyword can be used to declare variables