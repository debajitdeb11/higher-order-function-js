// this program is used to perform addition & multiplication by passing 3 parameters into the calculate function

function add(num1, num2){            // 1st function to perform addition
	return num1+num2;
}

function multiply(num1, num2) {     // 2nd function to perform multiplication
	return num1*num2;
}

function calculate(num1, num2, operator){     // this function will perform calculation by passing 3 parameters into it!
	return operator(num1, num2);                // e.g. calculate(3, 4, add);
}                                             // > 7 (output).  
