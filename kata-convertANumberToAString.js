// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?
// Examples (input --> output):

// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

function numberToString(num) {
    // Return a string of the number here!
  }

// -----------------------------------------------------------------

function numberToString(num) {
    return num.toString();
  };

OU 

function numberToString(num) {
    return ''+num;
  }
 
OU 

function numberToString(num) {
    return String(num);
  }
