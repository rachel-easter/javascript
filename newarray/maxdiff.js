var r = [];

function maxDiff(s) {
  if (s.length < 2) {
    console.log("Insufficient elements in the array.");
    return;
  }

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] < s[i + 1]) {
      var diff = s[i + 1] - s[i];
      r.push(diff);
    }
  }

 return Math.max(...r);
}

// Prompt the user for an array
var userInput = prompt("Enter the array elements separated by space:");
var inputArray = userInput.split(' ').map(Number);

var result=maxDiff(inputArray);
console.log(result);
