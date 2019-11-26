// an empty function
function empty() {

}

typeof empty

// execute (call) function
empty()


// function without return
function sayHello() {
	console.log("Hello")
}

sayHello()


// function with return
function fnPerson() {
	var person = {}
	person.firstName = "Michael"
	return person
}

var me = fnPerson()

console.log(me)



// function with input parameters
var fnPerson = function (sFirstName, sLastName) {
	var person = {}
	person.firstName = sFirstName
	person.lastName = sLastName
	return person
}

var me = fnPerson("Michael", "Hu")

console.log(me)




// ES6 arrow functions
var fnPerson = () => {
	var person = {}
	person.firstName = "Michael"
	return person
}

var me = fnPerson()

console.log(me)


var fnPerson = (sFirstName, sLastName) => {
	var person = {}
	person.firstName = sFirstName
	person.lastName = sLastName
	return person
}

var me = fnPerson("Michael")

console.log(me)






// strict mode 
window.firstName = 'Michael'

// 'this' will access global object 
var sayHello = function () {
	return "Hello " + this.firstName
}

// undefined
var sayHello = function () {
	'use strict'
	return "Hello " + this.firstName
}

sayHello()




// function binding
var person = {
	firstName: 'Michael',
	lastName: 'Hu'
}


// bind function to person object
var sayHello = function () {
	'use strict'
	return "Hello " + this.firstName
}.bind(person)

sayHello()
