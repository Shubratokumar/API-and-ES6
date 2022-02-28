/* ================================ Practice ==================================== */
//  1. object with property 
const mySelf = {
    name : {
        firstName : "Shubrato",
        middleName : "Kumar",
        lastName : "Gharami"
    },
    id : 101,
    job : "Front End Developer",
    isPassionate : true,
    moneyHave : 5000,
    monthlyExpense : function (expense){
        this.moneyHave = this.moneyHave - expense;
        // console.log(this);
        return this.moneyHave;
    },
    stacks : {
        frontEnd :["HTML", "CSS", "JS", "React.js"],
        backEnd : ["Experss.js", "Node.js", "MongoDB"], 
        fullStack : ['frontEnd',  'backEnd']
    }

}
// console.log("Now i have only taka : ",mySelf.monthlyExpense(2000));

// 2. template string

const myFullDesciption = `My full name is ${mySelf.name.firstName} ${mySelf.name.middleName} ${mySelf.name.lastName}. My id is ${mySelf.id}. I'm a professional ${mySelf.job}. My stack is ${mySelf.stacks.frontEnd}. I'm basically work with ${mySelf.stacks.frontEnd[3]}. My monthly expense not more than ${mySelf.monthlyExpense(4000)}. `
// console.log(myFullDesciption)

// ===================== Arrow function ======================
// 3.1 no parameter arrow function , will return 89
const number = () => 89;
// console.log(number())

// 3.1  single parameter arrow function, will return input divide by 7
const divideBySeven = (x) => x / 7;
// console.log(divideBySeven(49));

// 3.3 arrow function with two parameters add, multiplay and subtract
// single line 
const addSubtract = (x, y) => (x + y) / 2;
// console.log(addSubtract(5,5))
// multiline
const addSubtract2 = ( x, y, z) => {
    const sum = x + y + z;
    const subtract = sum / 2;
    return subtract;
};
// console.log(addSubtract2( 2,3,5));

// 3.4 multiline arrow function
// single line 
const addNum = (x, y) => ((x + 7) + (y + 7));
// console.log(addNum(3,3))
// multiline 
const addNum2 = (a, b) => {
    const sum1 = a + 7;
    const sum2 = b + 7;
    const total = sum1 + sum2;
    return total;
}
// console.log(addNum2(13, 13))

// 4. array map : divide each element by 7
const arrayNum = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];
const divideBy7 = arrayNum.map(divide)
function divide(number){
    const result = number * 7;
    return result;
}
// console.log(divideBy7)
// const divideBy7 = arrayNum.map( num => num / 7)
/* const divideBy7 = arrayNum.map(divide)
function divide(number){
    const result = number / 7;
    return result;
}
console.log(divideBy7) */

// 5. map, forEach, filter, find
const numberArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

//  map 
const map = numberArray.map(num => num - 1);
// console.log(map);
// forEach
const array = []
const forEach = numberArray.forEach(num =>{
    if(num < 15 ){
        array.push(num);
    }
    
})
// console.log(array)

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'apples', quantity: 3},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ];
// filter : returns all element which fullfil conditions
const filter = numberArray.filter(num => num > 15);
const filter1 = numberArray.filter(num => num > 20);
const filter2 = fruits.filter(fruit => fruit.length == 5);
const filter3= inventory.filter(invent => invent.name == 'apples')
const filter4= inventory.filter(invent => invent.quantity >= 2)
// console.log(filter3)
// find : returns only first element which fullfil conditions
const find = numberArray.find(num => num > 15)
const find1 = fruits.find(fruit => fruit.length == 5)
const find2 = inventory.find(invent => invent.name == "apples")
// console.log(find2)

// 6. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।

//  objcet destructruing : Object destructuring assigns the properties of an object to variables with the same names by default.
const object = {
    firstName : "shubrato",
    middleName : "kumar",
    lastName : "gharami",
    surName : "shuvo"
}
// console.log(bashudev)
const {surName : bashudev} = object;
let employee = {
    id: 1001,
    name: {
        firstName: 'John',
        lastName: 'Doe'
    }
};
// const{id : id1} = employee;
// console.log(id1)
const {name : {firstName,lastName}, name} = employee;
// console.log(name)
// console.log(firstName)
// console.log(lastName)
const {a, b, ...rest} = {a : 10, b : 21, c : 87, d : 34 , e : 65}
// console.log(rest)

// array destructuring
const arr = [ 12, 32,34,65,76];
const [ first, balance] = arr;
// console.log(first, balance)
const [ o, p] = arr;
// console.log(a,b)
const [, , , , , ,  x = 3, y = 7] = arr;
// console.log(x, y)

// Combined Array and Object Destructuring
const props = [
    { id: 1, name1: 'Fizz'},
    { id: 2, name1: 'Buzz'},
    { id: 3, name1: 'FizzBuzz'}
  ];
  const [,,{id,name1}] = props;
//   console.log(id,name1)

