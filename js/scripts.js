//Day 7 more Dom Stuff
//In this code we are modifying html via javascript. we add remove change classes and content
const div = document.querySelector(".myDiv");   //in the Html file, we find the first tag that has class myDiv...this is what querySelector does, we then grab all the text in it and its children and put it in variable div
const trekkies =" https://massolutions.biz/wp-content/uploads/2014/12/e5a06942fa42823c88be5f3a834e063d-fantastic-art-bat-family.jpg" // this puts our image into oue new variable

let image =documnet.querySelector("img");





console.log(div.textContent);//Returns only the text in ALL children
console.log(div);     //this lets us see every property of div in console


//div.textContent = "Say cheese and die!!"; //Reset the value of the text inside an element and replace it with this string
//console.log(div.textContent);//Returns only the text in ALL children



console.log(div.innerHTML);   //this grabs everthing in the first div, and returns text and tags

div.innerHTML = "<h1>Hey there R.L stein, did you die in the 90s?</h1>" //we are replace all text and tags with this line


let newH1 = document.createElement("h1");   //this created a varianle
console.log(newH1)

newH1.textcontext = "I am the greatest....I...I"; //this inserts the string into newH1

div.appendChild(newH1);  //always adds AFter the last element in the parent

let newH2 = document.createElement("h2");
newH2.textContext = "I am before the h1"
newH2.className ="blue-bg"; //this overwrites and adds this class to the tag
newH2.className += "white-text"; /// this is a way to add additional classes
console.log(newH2); //this logs every property of newH2 ie text, tags, characters
div.insertBefore(newH2, newH1);

let newP = document.createElement("p");   //we are creating a new p tag and saving the empty p tag in newP
newP.textContent = "I am a squirrel...";  //we are adding this text content into this p tag
newP.classList.add("purple-text", "green-bg");  //we are now adding these classes to our p tag
div.appendChild(newP) // this is putting our ptag inside our div tag ie <div><p></p></div>


let span = document.querySelector("span");    //lets search for the first instance of span and make a copy into variable span
span.addEventListener("mouseenter", (e)=> {   //this is waiting for a mouse to click on span and will remove the white text color //mouseenter is a key word
  span.classList.remove("white-text");    //this event is triggered when mouse enters
});

span.addEventListener("click", (e) =>{//we are waiting for user to click on the span
  span.classList.toggle("giant-text");
  span.classList.contains("green-bg");  //this looks at out span varible and checks if it contains class "green-bg". returns boolean
  span.classList.replace("green-bg", "blue-bg");  // this will replace first parameter with second parameter
})

//attribute are like src= class= rel=

image.addEventListener('click', (e) =>{
  image.setAttribute("src", trekkies); // we are replacing the attribute of src to trekkies
})
