/*
day 10 Javascript
Here we are working with timers
/*
fat arrow functions
*/

let clearBtn= document.querySelector("#clearBtn");
/*let myTimeout;

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
*/
/*
let myInterval;

function remindUser() {
  alert("Hey balloons are on sale");
};


function clear() {
  clearInterval(myInterval);
};

clearBtn.addEventListener("click", clear);
*/

/*let try it day 10
*/

//string.substring(start, end)

/*

clearIntervalBtn = document.querySelector("#clearIntervalBtn"); //searches html for this id
clearTimeoutBtn = document.querySelector("#clearTimeoutBtn");

let randomQuote= ["to be", "or not to be", "that is", "the question" ];

let timeOutAnswer= prompt("How long in second would you like to wait");
let intervalAnswer= prompt("How long intervals in seconds?")

function createTimer(time, type){
  endIndex = time.indexOf(" ");
  let parsedTime = parsedInt(time.substring(0, endIndex));
  if(!isNaN(parsedTime)){
    parsedTime *=1000;
    if(type === "timeout"){
      timeOutReference = setTimeout(alertRandomQuote, parsedTime);
    }
  }else if(type==="interval"){
    intervalReference= setInterval(alertRandomQuote, parsedTime);

  }else{
    //..
    console.log("oh no!!");
  }
};


function alertRandomQuote() {
  let maxIndex = quotes.length - 1;
    let indexToChoose = Math.floor(Math.random() * maxIndex); //Math.floor gets you the int value of a float // Math.random() generates a float value between 0-1;
  alert(quotes[indexToChoose])
}

createTimer(timeOutAnswer, "timeout");

createTimer(intervalAnswer, "interval")


clearIntervalBtn.addEventListener("click", () => { clearInterval(intervalReference);});
clearTimeoutBtn.addEventListener("click", () => { clearInterval(timeoutReference);});
*/

//local storage Session storage
function storeUserInfo(){
  if(!sessionStorage.getitem("firstName")){
    let firstName = prompt("whats your name ");
    sessionStorage.setItem("firstName", firstName);
  }

}

storeUserInfo();

let retrievedValue=()//code goes here)

alert('Hello ${retrievedValue}!');
}
