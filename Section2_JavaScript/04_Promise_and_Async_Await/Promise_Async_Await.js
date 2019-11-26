var printFiles = function () {
	return "Your files printed successfully."
}

var work = printFiles()


var printFiles = function () {
	setTimeout(() => {
		return "Your files printed successfully."
	}, 3000)
}

var work = printFiles()



// function return promise
var printFiles = function () {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// use resolve() to tell the JavaScript engine our work is done
			resolve('Your files printed successfully.')
		}, 3000)
	})
}

printFiles().then(result => console.log(result)).catch()



// handle error
var printFiles = function () {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// use reject() to tell the JavaScript engine something went wrong
			reject('Your files not printed successfully.')
		}, 3000)
	})
}

printFiles().then().catch(error => console.log(error))




// nested promises
printFiles()
	.then(res => {
		console.log(res)
		printFiles().then(res => {
			console.log(res)
			printFiles().then(res => {
				console.log(res)
			})
		})
	})
	.catch(error => console.log(error))




// async function
var asyncAwait = async function () {
	// wait for the promise to be resolved
	// await only works inside async function
	var work1 = await printFiles()
	console.log(work1)

	var work2 = await printFiles()
	console.log(work2)

	var work3 = await printFiles()
	console.log(work3)
}

asyncAwait()




var asyncAwait = async function () {
	// use try-catch to get the error of a promise
	try {
		var work1 = await printFiles()
		console.log(work1)

		var work2 = await printFiles()
		console.log(work2)

		var work3 = await printFiles()
		console.log(work3)

	} catch (error) {	// get the promise reject() 
		console.log(error)
	}
}

asyncAwait()
