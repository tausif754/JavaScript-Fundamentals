/*
Q2. Create a JavaScript program that demonstrates the basic usage of regular expressions. Write a function
that takes a regex pattern and a string as input and returns true if there is a match, and false otherwise. Test
the function with various patterns and strings.
*/

function testRegex(pattern, inputString) {
  let regex = new RegExp(pattern);
  return regex.test(inputString);
}
console.log(testRegex(/[0-9]+/, "123")); //true
console.log(testRegex(/[a-z]+/, "TAUSIF"));
console.log(testRegex(/[a-z]+/, "tausif"));
