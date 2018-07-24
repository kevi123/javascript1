/*
Kevin Hinojosa Day 6 Notes

*/

// prompt("Hello enter value")
// alert("ALert with this message")
//
//
// if( x<0 || !(13)){
//   statements;
// } else-if(x!=50 && x<60 ){
//   statements;
// }else{
//
// };
//
// //Function SYntax
//
// let userAge2=0; //variable to hold age of user
// userAge2=prompt("Lets Calculate your lifetime supply, what is your age?");
//
// let amount=0; //variable will hold user input of amount per year
// amount=prompt("What is the amount per year?")
// lifeTimeSupplyCalculator(userAge2, amount);
//
//
// //this is the function for lifetimeSupply
// function lifeTimeSupplyCalculator(age, productAmount){
//   //Check for edge cases ie. negative age, alpha charactersS
//   if (age<0){
//     alert("EEROR: You cant be a negative age");
//   }
//   else if(80<age){
//     alert("ERROr : Sorry you are too old!")
//   }
//   //this is the safe case,
//   else{
// // We need to check for chars
//   let yearsValid=0;
//   yearsValid= 80-age;
//   lifeTimeSupply=yearsValid*productAmount;
//   alert("The lifetime supply for this user is "+ lifeTimeSupply + "pounds!!")
//   return(lifeTimeSupply)
// }}

/*

//////////^^^^^^^^^^^^^^^^^^NOTES^^^^^^^^^^^^^

const body = document.getElementsByTagName("body");  ///alays pass as a string so we dont pass an undeclared variable
console.log(body[0]);

// const header = document.getELementsByClassName("heading");


//These are faster because it only searches for ID's
const paragraph = document.getElementById("paragraph1");
console.log("paragraph1");

// let div = document.querySelector(".jr-is-the-best")
// let div = document.querySelector("#beth_is_the_worst");

// let divs = document.querySelectorAll(".jr-is-the-best");

//we are listening for actions done by the mouse and keyboard
div.addEventListener("mouseover", ev => {
  console.log(ev);
  div.style.backgroundColor = "#e40007";}
);



/*
Write a program that converts temperatures. It should:

    1)Ask your user to give you a scale (Celcius or Fahrenheit) and the tempurature they want to convert. So if they give you 90 Fahrenheit,
      they would want you to convert 90 degrees Fahrenheit to whatever that is in Celcius
    2)Employ a function that accepts those two values as arguments: temperature and scale (either celcius or fahrenheit) and
      converts the tempurature they gave you to the opposite scale.
    3)Display the temperature in an h3 with minimal styling.
    4)From that point on, when the user clicks on the h3, run the function to convert the temperature back and forth between Celcius and Fahrenheit.
    5)Display the converted temperature in the h3 each time it is changed.

*/

//We are saving this to an H3
const h3= document.querySelector('#temp');
let scale = prompt("WHat scale (C or F) do you want to use?", "F or C");
let temp = prompt("How hot is it?", "99");  //this creates a prompt and prefills it with 99


function convertTemp(scale, temp){
  scale= scale.toLowerCase();
  let returnVal;
  let oppositeVal = scale === 'c' ? "Fahrenheit" : "Celcius";
  temp = parseInt(temp);
  if(!isNaN(temp)){
    returnVal = scale === 'c' ? (1.8 * temp) + 32: (5/9) *(temp -32);  //this is known as a ternary statement
    //this is read as if (scale==c){ returnVal= (1.8* temp)+32}  else {returnval=(5/9)*(temp-32)};
    h3.innerText = `Your temperature is ${returnVal} ${oppositeVal}`;// we need to use back ticks to use placeholder variables.
  }else{
    scale = prompt("WHat scale (C or F) do you want to use?", "F or C");
    temp = prompt("How hot is it", "99");   //this prompt asks a question and prefills it with 99
    convertTemp(scale, temp);   //recursion call itself again
  }
}

convertTemp(scale,temp);


h3.addEventListener('click',(e) =>{
  let valueArray = e.target.innerText.split(' ');   //this splits innerText as an array [Your, temperature, is, returnVal, Calesius]
    scale= valueArr[valueArr.length - 1 ]==="Celsius" ? "C": "F";
    temp = valueArr[valueArr.length -2];
    convertTemp(scale,temp)
})
