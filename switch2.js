function lcm(a, b) {
  let result;

  switch (true) {
    case (a === 0 || b === 0):
      result = "Undefined (One or both numbers are zero)";
      break;

    case (a % b === 0):
      result = a;
      break;

    case (b % a === 0):
      result = b;
      break;

    default:
      // Finding LCM using the formula: LCM(a, b) = (a * b) / GCD(a, b)
      result = (a * b) / gcd(a, b);
  }

  return result;
}

// GCD function using Euclidean algorithm
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// Example usage:
const num1 = 5;
const num2 = 4;

const result = lcm(num1, num2);
console.log(`LCM of ${num1} and ${num2}: ${result}`);
