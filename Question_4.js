/*
Q4. Create a JavaScript program that takes a regex pattern and a string as input. Write a function that not
only checks if there is a match but also extracts specific parts of the matched text using groups. Test the
function with patterns that include groups to capture different parts of a date (e.g., day, month, and year)
from a given string.
*/

function extractDateParts(pattern, inputString) {
  let regex = new RegExp(pattern);
  let match = regex.exec(inputString);
  if (match) {
    let day = match[1] || "Not available";
    let month = match[2] || "Not available";
    let year = match[3] || "Not available";

    //return an object with extracted date parts
    return {
      day: day,
      month: month,
      year: year,
    };
  } else {
    //return null if there is no match
    return null;
  }
}
//test the function with a sample string and date pattern
let inputString = "Today's  date is 08-02-2004";
// let datePattern = /(\d{2})-(\d{2}-(\d{4})/;
// Corrected regular expression pattern
let datePattern = /(\d{2})-(\d{2})-(\d{4})/;

//extract and display date parts
let result = extractDateParts(datePattern, inputString);
console.log("Original String:", inputString);
console.log("Extracted Date parts:", result);
