// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false

function boolToWord( bool ){
    //...
  }

// -----------------------------------------------------------------

function boolToWord( bool ){
    if (bool) {
      return "Yes";
    } else {
      return "No";
    }
  }

OU 

function boolToWord( bool ){
    return bool ? 'Yes':'No';
  }

OU 

let boolToWord = bool => bool ? 'Yes' : 'No';

OU 

function boolToWord( bool ){
  return bool === true ? "Yes" : "No";
}