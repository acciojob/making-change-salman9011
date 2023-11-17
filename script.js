const makeChange = (c) => {
  // your name here
	let units={
		penny:0.01,
		Nickle:0.05,
		Dime:0.10,
		Quater:0.25
		}
	let output={}
	for(let i in units){
		let currentUnits=units[i];
		output[i]=parseInt(num/currentUnits);
		num=num%currentUnits;
	}
	console.log(output);
	
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
