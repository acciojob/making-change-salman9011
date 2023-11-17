const makeChange = (c) => {
  // your name here
	let units={
		q:25,
	   d:10,
		n:5,
		p:1
		
		}
	let output={}
	for(let i in units){
		let currentUnits=units[i];
		output[i]=parseInt(num/currentUnits);
		num=num%currentUnits;
	}
	alert(output); 
	
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
