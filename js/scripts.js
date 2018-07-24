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
