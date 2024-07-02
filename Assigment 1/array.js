// Create the array
const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);

console.log("first element",fruits[0]); 

console.log("last element",fruits[fruits.length - 1]); 

//Modify Array Elements:
fruits[1] = "Orange";
console.log("Replace banana to Orange",fruits);

fruits.push("Pineapple");
console.log("Add Pineapple",fruits);  

fruits.shift();
console.log("Remove 1st Element",fruits); 

//Array Methods:

const newFruit = fruits.map(fruit => fruit.length);

console.log("length of each Fruit Items with Map", newFruit);

const newFruit1 = fruits.filter(fruit => fruit.length > 5);

console.log("Filter with more the 5 length",newFruit1);

//Sort and Reverse:

fruits.sort();
console.log("fruits array in alphabetical order",fruits); 

fruits.reverse();
console.log("Reverse the order of elements in the sorted array",fruits); 

//Find and Index:
const fruitWithG = fruits.find(fruit => fruit.includes("g"));

console.log("first fruit that contains the letter g",fruitWithG);

const indexOfMango = fruits.indexOf("Mango");

console.log("index Of Mango",indexOfMango); 

//Array Transformation with map and filter:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squaredNumbers = numbers.map(number => number * number);
console.log("Square of each no.",squaredNumbers);

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("even no.",evenNumbers);

//Aggregate Data with reduce:
const expenses = [
    { amount: 50, category: 'Groceries' },
    { amount: 20, category: 'Transportation' },
    { amount: 100, category: 'Entertainment' },
    { amount: 80, category: 'Groceries' },
    { amount: 30, category: 'Transportation' }
];


const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
console.log("Total Amount of Expenses",totalAmount);

const groupedExpenses = expenses.reduce((sum, expense) => {
    sum[expense.category] = (sum[expense.category] || 0) + expense.amount;
    return sum;
}, {});

console.log("total amount for each category",groupedExpenses); 

//Array Flattening:
const nestedArray = [1, [2, [3, [4, 5]], 6], 7, [8, 9]];

const flattenedArray = nestedArray.flat(Infinity);
console.log("nestedArray into a single-level array",flattenedArray);


//Object assigment

const car = {
    make: "Mahindra",
    model: "XUV300",
    year: 2022
};

console.log("access make",car.make);
console.log("access year",car.year);

car.model = "XUV 700";
console.log("change model",car);

car.colour = "blue"
console.log("add colour",car);

for (let key in car) {
    if (car.hasOwnProperty(key)) {
        console.log(key,":", car[key]);
    }
}

//Nested Objects:

const person = {
    firstName: "Anjali",
    lastName: "Rathi",
    address: {
        street: "1 Murti",
        city: "Noida",
        zipCode: "201301"
    }
};

console.log("Access the city of the address",person.address.city);

//Array of Objects:

const students = [
    { name: "Anjali", grade: "A" },
    { name: "Prachi", grade: "B" },
    { name: "Abhi", grade: "C" }
];

students.forEach(student => {
    console.log("Name:",student.name, "&" ,"Grade:", student.grade);
});


//Destructuring:
//Object
const cars = {
    make: "Mahindra",
    model: "XUV300",
    year: 2022
};

const { make, model } = cars;
console.log(make); 
console.log(model);

//Array
const fruit = ["Apple", "Banana", "Mango", "Pineapple"];

const [x, y] = fruit;
console.log(x); 
console.log(y);


// Merge Object

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const newObj = { ...obj1, ...obj2 };
console.log("Merged Object",newObj);



