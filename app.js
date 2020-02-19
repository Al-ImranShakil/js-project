// // person constractor
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log(this)
// };
// const emon = new Person("EMon", 21);
// const sizer = new Person("Sizer", 22);

const name1 = "sizer";
const name2 = new String("sizer");

console.log(name2);

name2 === "sizer" ? console.log("yes") : console.log("no");

// number 

const num1 = 5;
const num2 = new Number(5);

// boolean

const bool1 = true;
const bool2 = new Boolean(true);

// Function

const getSUm =  function(x, y) {
    return x + y;
}