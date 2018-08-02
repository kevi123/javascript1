/*
day 10 Javascript
Here we are working with timers
/*
fat arrow functions
*/

let clearBtn= document.querySelector("#clearBtn");
let myTimeout;

let annoyingPopup = () => {
  alert("Hey!!! Have you seen my insane and wacky discounts!");
  console.log("hey im in the timer, FIRST!!");
};


function startTimer() {
  myTimeout = setTimeout(annoyingPopup, 5000);
};


//setTimeout take 2 arguements(action, milliseconds)
// setTimeout(
//   () => (annoyingPopup, 5000);
// };
 startTimer();

function cancelTimer() {
  clearTimeout(myTimeout);
};

clearBtn.addEventListener("click", cancelTimer);
