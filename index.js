//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
let greaterNumbers = numbers.filter( (num)=>{
    return num >= 25
} ) 

console.log(greaterNumbers)

let divisibleNumbers = numbers.filter( (num)=>{
    return num%5 == 0
})

console.log(divisibleNumbers)

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
let squaredNumbers = numbers.map( (num)=>{
    return num**2
})

console.log(squaredNumbers)

let multipliedNumbers = numbers.map( (num)=>{
    return num*2
})

console.log(multipliedNumbers)

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
let q5Numbers = numbers.filter( (num)=> num >= 20).map( (num)=> num ** 2)

console.log(q5Numbers)

let q6Numbers = numbers.filter( (num)=> num%5 == 0 ).map((num)=> num*3)

console.log(q6Numbers)


/*****************************************************************
Part 4: Extra not required 🌶️🌶️🌶️
******************************************************************/
/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger = function (array) {
    array.forEach(element => {
        console.log(element)
    });
};
 
logger(numbers)


/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const toCelsius = function (temperatures) {
         return temperatures.map( (num)=> (num - 32) * (5/9) )
};

let celsius = toCelsius(numbers)
console.log(celsius)


/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
const hottestDays = function (temperatures, threshhold) {

    return temperatures.filter( (num)=> num > threshhold)
};

console.log(hottestDays(numbers,25))

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/

//numbers = [10, 13, 20, 25, 38, 35, 40]
const logHottestDays = function (temperatures, threshhold) {

       let x = toCelsius(temperatures)
       let y =  hottestDays(x ,threshhold)
       y.forEach((num)=> console.log(num * 9/5 + 32))
     // temperatures.map( (num)=> (num - 32) * (5/9)  ).filter( (num)=> num > threshhold ).forEach( (num)=> console.log(num * 9/5 + 32))
};

logHottestDays(numbers ,  -1 )