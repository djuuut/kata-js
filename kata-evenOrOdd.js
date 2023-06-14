// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {

}

// -----------------------------------------------------------------

function evenOrOdd(number) {
    if ( number % 2 === 0 ){
      return "Even";
    }
    else {
      return "Odd";
    }
  }
  
OU 

function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
  }

OU 

function even_or_odd(number) {
   return number % 2 === 0 ? 'Even' : 'Odd';
}

OU 

const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';

OU 

const even_or_odd = number => number % 2 === 0 ? 'Even' : 'Odd';

OU 

function even_or_odd(number) {
    return ( (number % 2) == 0 ) ? "Even" : "Odd";
  }

OU 

var even_or_odd = n => n & 1 ? 'Odd' : 'Even'