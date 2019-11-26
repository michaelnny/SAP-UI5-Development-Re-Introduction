// build a counter-down from 10 to 1

// while loop
var iNum = 10

while (iNum >= 1) {
	console.log(iNum)
	iNum--
}




// do-while
var iNum = 10

do {
	console.log(iNum)
	iNum--
} while (iNum >= 1)




// for loop
for (var iNum = 10; iNum >= 1; iNum--) {
	console.log(iNum)
}




// ES6 for loop
for (var item of alist) {
	console.log(item)
}





// loop an array object
var list = ['this', 'is', 'a', 'list']

for (var i = 0; i < list.length; i++) {
	console.log(list[i])
}

// forEach() method with item and index for array
list.forEach(function (item, index) {
	console.log(item)
	console.log(index)
})


// ES6 arrow function
list.forEach((item, index) => {
	console.log(item)
	console.log(index)
})
