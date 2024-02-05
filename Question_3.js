/*
Q3. Write a JavaScript program that demonstrates the use of character classes in regular expressions.
Create a function that searches for specific character classes in a given string and returns the matches. Test
the function with patterns for digits, uppercase letters, lowercase letters, and special characters.
*/

function findCharacterClasses(inputString) {
  let digitPattern = /\d/g;
  let uppercasePattern = /[A-z]/g;
  let lowercasePattern = /[a-z]/g;
  let specialCharPattern = /[^a-zA-Z0-9]/g;

  let digits = inputString.match(digitPattern) || [];
  let uppercaseLetters = inputString.match(uppercasePattern) || [];
  let lowercaseLetters = inputString.match(lowercasePattern) || [];
  let specialCharacter = inputString.match(specialCharPattern) || [];
  return {
    digits: digits,
    uppercaseLetters: uppercaseLetters,
    lowercaseLetters: lowercaseLetters,
    specialCharacter: specialCharacter,
  };
}
let inputString = "Hello123! world";
let result = findCharacterClasses(inputString);

console.log("Original String:", inputString);
console.log("Digits", result.digits);
console.log("Uppercase letters:", result.uppercaseLetters);
console.log("Lowercase letters:", result.lowercaseLetters);
console.log("Special characters:", result.specialCharacter);
