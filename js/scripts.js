let myArray = [];         //created emty array
let favoriteFoods=["pizza","hamburger","french fries"]   //array of 3 items indexed [0,1,2]
let allTheThings=["string",23,["stuff"],{}, false];//think tuples

console.log(favoriteFoods[1]);//prints hamburgers

alert(favoriteFoods.length);//gives you how many members in a myArray not index


//try it out
let myFavs= ["Captain America: Civil War", 42, true, 2004];
console.log(myFavs, myFavs.length);


console.log(Array.isArray(myFavs), typeof myFavs);// type of says myFavs is an Object

myFavs.push("Logan");   //we are pushing item to the

console.log(myFavs)

myFavs.unshift("Faith Herndon");   //unshift adds to the head

console.log(myFavs);
