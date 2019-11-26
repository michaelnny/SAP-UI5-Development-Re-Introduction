/** 
 * if(condition){
 * 		// execute code here if condition is true
 * }else{
 * 		// execute code here if condition is false
 * }
*/

var a = 10
var b = 3

if (a > b) {
	console.log("true")
} else {
	console.log("false")
}



/** one-line if-else ? :
 * condition ? execute code here if condition is true : execute code here if condition is false 
 */
a > b ? console.log("true") : console.log("false")





/**
 * if(condition1){
 * 		// execute code here if condition1 is true
 * }else if(condition2){
 * 		// execute code here if condition2 is true
 * }else if(condition3){
 * 		// execute code here if condition3 is true
 * }else{
 * 		// execute code here if no condition is true
 * }
 */
var checkNumber = function (a) {
	if (a > 1) {
		console.log("greater than 1")
	} else if (a === 1) {
		console.log("equal to 1")
	} else if (a < 1) {
		console.log("lesser than 1")
	} else {
		console.log("not a number")
	}
}

checkNumber(1)
checkNumber(9)
checkNumber(0)
checkNumber('test')






// multiple conditions
// and (&&): two or more conditions must all be true
var checkNumber = function (a) {
	if (a >= 1 && a <= 2) {
		console.log("between 1 and 2")
	} else {
		console.log("not between 1 and 2")
	}
}

checkNumber(0)
checkNumber(1)
checkNumber(2)
checkNumber(3)



// or (||): at least one condition is true
var checkNumber = function (a) {
	if (a > 0 || a < 0) {
		console.log("not equal to 0")
	} else {
		console.log("equal to 0")
	}
}

checkNumber(0)
checkNumber(1)
checkNumber(-1)






// switch
var checkNumber = function (a) {
	switch (a) {
		case 0:
			// when a equal to 0, execute code here	
			console.log("equals 0")
			break;
		case 1:
			// when a equal to 1, execute code here
			console.log("equals 1")
			break;
		case 2:
			// when a equal to 2, execute code here
			console.log("equals 2")
			break;
		default:
			// when a not equal to any of the value in above cases, execute code here
			console.log("unknow")
	}
}


checkNumber(0)
checkNumber(2)
checkNumber(15)
