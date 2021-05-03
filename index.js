// # Objects: Part 1

// Please print each of your answers to the console.

// **1. Object Person.**
// Create an object named person. Loop through the object and print both the property and value of the object. 
const person = {
    firstName: "Kalaya",
    lastName: "Chatelain",
    age: 26,
    city: "Berlin",
}

for (const nameOfProperty in person) {
    const value = person.nameOfProperty;
console.log(nameOfProperty, value);
}

for (var key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ": " + person[key]);
    }
}



// **2. Get Values.** 
// Create a function that returns an array of all **values** of an object's properties. 
// * Examples:
// ```javascript
const getObjectValues = {
choice1: "tea",
choice2: "coffee",
choice3: "milk"
};
// ```
// * Expected output: 
// ```javascript
// ["tea", "coffee", "milk"] 
// ```
 const values = Object.values(getObjectValues);
 console.log(values);

// **3. Add A Method.**
// Create an object and add a method to that object which prints the values of the objects in a string. 
// * Example
// ```javascript
let person2 = {
  firstName: "Michael",
  lastName: "Smith", 
  job: "driver",
  age: 20, 
  city: "Paris",
}
// ```
// * Example of Expected Output 
// "Michael Smith is a 20 year old driver in Paris".
function aboutPerson(){
console.log(this.firstName + " " + this.lastName + " is a " + this.age + " year old " + this.job + " in " + this.city);
}

person2.fullSentence = aboutPerson;
person2.fullSentence();

console.log(person2);
// ## Bonus Questions

// **1. Convert keys and values into an array.** 
// Create a function that converts an object into an array of keys and values. 
// * Examples:
// ```javascript
// objectToArray({
//   A: 1,
//   B: 2,
//   C: 3
// }) 
// ```
// * Expected output: 
// ```javascript
// [["A", 1], ["B", 2], ["C", 3]]
// ```
const animals = {
    monkeys: 8,
    cats: 12,
    dogs: 78,
    snakes: 56,
}

const ObjectToArray = Object.entries(animals);
console.log(ObjectToArray);


// **2. List Properties.**
// Create a function that returns an array of **properties** of a javascript object. 
// * Example
// ```javascript
// let student = {
//   name: "Mike", 
//   class: "4A" 
//   course: "English"
// }
// ```
// * Expected output: 
// ```javascript
// ["name", "class", "course"]
// ```
const fruits = {
    banana: 78,
    mango: 12,
    apple: 61,
};
const keys = Object.keys(fruits);
console.log(keys)
// **3. Merge.**
// Create a function that takes two objects as its parameters and merges them together into a new object. 
// * Example
// ```javascript
// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
// ```
// * Expected output:
// ```javascript
// {firstName: "John", lastName: "Smith"}
// ```
// **Extra Credit:** What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.

// **4. Switch Keys and Values.**
// Create a function to get a copy of an object. The copy must switch the keys and values.
// * Example: 
// ```javascript
// let person = {
//   name: "John", 
//   job: "teacher"
// }
// ```
// * Expected Output: 
// ```javascript
// {"John": name, "teacher": job} 
// ```

// **5. Return Keys and Values.**
// Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

// * Examples:
// ```javascript
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]
// ```