const makeChange = (c) => {
  let num = parseInt(c); // Parse the input to ensure it's a number
  let units = {
    q: 25,
    d: 10,
    n: 5,
    p: 1,
  };
  let output = {};
  for (let i in units) {
    let currentUnits = units[i];
    output[i] = Math.floor(num / currentUnits); // Use Math.floor to get the whole number of coins
    num = num % currentUnits;
  }
  return output; // Return the result instead of using alert
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
