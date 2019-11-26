// single line comment

/*
    multi-line comment
*/

/**
 * multi-line comment
 */


// string 
var firstName = "Michael";
var lastName = 'Hu'

// number
var num = 19
var num2 = -30
var num3 = 1.70

// boolean
var sunny = true // lowercase true or false
var rainy = Boolean(false)

// check data types
typeof sunny
typeof num
typeof firstName

// use console.log() to print out
console.log("Hello JavaScript")
console.log(firstName)




// null
var nullType = null

// undefined case 1
typeof somethingUndefined

console.log(somethingUndefined)

// undefined case 2
var somethingUndefined

console.log(somethingUndefined)




// dynamic typing
var a = "Welcome"   // string type

typeof a


a = 2019            // number type

typeof a



/**
 * Object
 * except string, number, boolean, and undefined
 * everything else in JavaScript is an Object
 */

// create an empty object
var object = new Object()

typeof object

console.log(object)


// create an empty object
var person = {}

typeof person

console.log(person)


// create object with properties
var person = {
    firstName: "Michael",
    lastName: "Hu",
    year: 2019,
    isTalking: true
}

console.log(person)




// date
var today = new Date()

typeof today

console.log(today)



// create an empty array
var array = []

typeof array



// create an simple list with strings
var list = ['this', 'is', 'a', 'list']

console.log(list)





// window global object
window.innerHeight
window.innerWidth

window.clientInformation

// create new property
window.aaa = "Hello"
window.aaa
