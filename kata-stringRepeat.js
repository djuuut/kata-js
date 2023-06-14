// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)

// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
    return '';
  }

// -----------------------------------------------------------------

function repeatStr(n, s) {
    if (n <= 0) {
      return ""; // Si n est inférieur ou égal à zéro, retourne une chaîne vide
    } else {
      return s.repeat(n); // Utilise la méthode repeat() pour répéter la chaîne s n fois
    }
  }

OU 

function repeatStr (n, s) {
    return s.repeat(n);
  }

OU 

repeatStr = (n, s) => s.repeat(n)

OU

