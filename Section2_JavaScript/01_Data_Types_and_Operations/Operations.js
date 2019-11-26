// simple math with numbers
var num1 = 3
var num2 = 2

// add
console.log(num1 + num2)

// minus
console.log(num1 - num2)

// multiply
console.log(num1 * num2)

// divide
console.log(num1 / num2)


/**
 * increment, add one to the origianl number
 * num1 = num1 + 1
 */
var num1 = 3

num1++

console.log(num1)



/**
 * decrement, minus one from the origianl number
 * num1 = num1 - 1
 */

var num1 = 3

num1--

console.log(num1)





// convert string to number
var string = "19"
parseInt(string)

string = "19.2"
parseInt(string)

// convert string to float
parseFloat(string)



// convert a number to string
var num = 19
typeof num

num = String(num)
typeof num



// merge strings
var s1 = "This is a"
var s2 = "string ..."

var s3 = s1 + s2

console.log(s3)

var s3 = s1 + " " + s2

console.log(s3)



// find index of a substring
s1.indexOf('a')

// if not found -1
s1.indexOf('not')

// find and replace
s1.replace('a', 'a strange')

// convert string to upper case
s1.toUpperCase()

// convert string to lower case
s1.toLowerCase()





// comparisons

// greater than
console.log(10 > 0)

// equan or greater than
console.log(0 >= 0)

// lesser than
console.log(1 < 3)

// equan or lesser than
console.log(3 <= 3)





// double equals vs triple equals

console.log(0 == "0")

console.log(0 === 0)


// not equal
console.log(0 != "0")

console.log(0 !== "0")








// object
var person = {
    firstName: "Michael",
    lastName: "Hu",
    year: 2019,
    isTalking: true
}


// get the value of object property
person.firstName

person['firstName']

var key = 'firstName'
person[key]



// update the value of object property
person.firstName = "Hello"
person.lastName = "JavaScript"

console.log(person)


// get all properties (keys) of an object
Object.keys(person)

// get all values of an object
Object.values(person)




// array operations
var list = ['this', 'is', 'a', 'list']

list.length

// get item in an array by index
// this
list[0]

// a
list[2]

// list
list[3]

// get last item in an array
list[list.length - 1]

// undefined
list[4]



// get index by item value
list.indexOf('is')



// update array item's value
list[0] = 'This'



// add to the end of an array - last one
list.push('end')

// add to the top of an array - first one
list.unshift('hello')



// remove the last one from an array
list.pop()

// remove the fist one from an array
list.shift()


// remove item by index 
blist = list.splice(3)

console.log(blist)

console.log(list)