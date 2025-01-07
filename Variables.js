simpleVariable = "this is simple variable";
let letVariable = "this is let variable";
var varVariable = "this is var variable";
const constVariable = "this is const variable";

simpleVariable = "this is simple variable changed";
letVariable = "this is let variable changed";
var varVariable = "this is var variable changed";
// constVariable = "this is const variable changed";

console.log(simpleVariable);
console.log(letVariable);
console.log(varVariable);
console.log(constVariable);
console.table([simpleVariable, letVariable, varVariable, constVariable]);

if (constVariable) {
    
}