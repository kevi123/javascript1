// var myString ="Hello World";
// console.log(myString)
//
// //
// var myNumber= 43;
// console.log(myString)
//
// var newVariable=
// console.log(myVariable)

//Day 2
let num=11;
let string=12;

console.log (num ==string);
console.log(num!== string);

const prim = "my string"
const objectString = new String ("my string");

console.log(prim==objectString);
console.log(prim!=objectString);

//modulus
console.log(5 % 2);  //returns 1

let start = 1;

//after some logic


start = start + 1
start++;
console.log(start);

start--;


let nonNumber = "cheese"
// console.log(parseInt(nonNumber));

//this function check if it Not a Number
// console.log(!isNaN(nonNumber));

//create variable equal to 50;
let fifty = "50";


// console.log(parseInt(fifty));

let nonString= 50000;

//display integer to a string
// console.log(nonString.toString())

//convert interger to a string and reassign variable to this string.
// console.log(nonString = nonString.toString())


//this adds 20 to my variable
nonString +=20;

console.log(nonString);

//lets add 2 numbers by asking user
//create variable for sum

// let sum=0;
// let userNum1=10;
// let userNum2=10;

//promt user for 2 numbers
// userNum1=prompt("Hello, Please enter first number?");
// userNum2=prompt("Please enter second number");

// this initializes
// userNum1=prompt("Hello, Please enter first number?",10);


//get the values of these 2 input into Int representation
// sum= parseInt(userNum1) + parseInt(userNum2);
// //display sum
// alert(sum);


//lets practice for if statements
// if(!isNaN(userNum1) && !isNaN(secondNum)){
//   alert(userNum1 + userNum2);
// } else if (isNaN(userNum2)) {
//   userNum2= promp('No, I said a number', '10');
//   alert(userNum1+ userNum2);
// } else{
//   alert("No dummy!");
// }


// let greeting = prompt("Tell me how to say hello","IUGUIFIF");
//
// switch(greeting) {
//   case 'hello':
//     alert("I love saying ${greeting}!");
//     break;
//   case 'whats up':
//     alert("${greeting} is so 90's")
//     break;
//   default:
//     alert("I have never heard (${greeting}) before");
//     break;
// }


// let money = 10;
// let currency = confirm("in dollars or not")
// currency ? alert('$${money}') :alert(money); //ternary


let age=0;
let answer=0;
let answerStarWars

age= parseInt(prompt("Hello, what is your age?"));
if(age>=18){
  alert("You may proceed")
 answer= prompt("are you under 80years old?")
  if((answer=="yes")||(answer=="y"))
    {alert("Great! you are under 80")
    {answerStarWars= prompt("Do you like star wars?")}
      if((answerStarWars=="yes")|| answerStarWars=="y")
        {alert("Awesome, you have the force")}
      else{
        (alert("You fool, the darkside will consume you"))
      }
    }
  else{
      alert("Do you like prunes!")
    }
}
else {
  alert ("user under 18 goodbye")
}
