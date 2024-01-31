/*
Q1. Write a JavaScript function called outerFunction that takes a parameter and returns an inner function.
The inner function should access both the parameter of outerFunction and a variable declared within
outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these
variables even after outerFunction has finished executing.
*/
//Solution:-
function outerFunction(parameter) {
  var outerVariable = "I am from outerFunction";

  function innerFunction() {
    console.log("Parameters from outerFunction:", parameter);
    console.log("Outer variable from outerFunction:", outerVariable);
  }
  return innerFunction;
  //   console.log(innerFunction);
}
var innerFunctionInstance = outerFunction("Hello");
innerFunctionInstance();
