// /*
// let myArray = [];         //created emty array
// let favoriteFoods=["pizza","hamburger","french fries"]   //array of 3 items indexed [0,1,2]
// let allTheThings=["string",23,["stuff"],{}, false];//think tuples
//
// console.log(favoriteFoods[1]);//prints hamburgers
//
// alert(favoriteFoods.length);//gives you how many members in a myArray not index
//
//
// //try it out
// let myFavs= ["Captain America: Civil War", 42, true, 2004];
// console.log(myFavs, myFavs.length);
//
//
// console.log(Array.isArray(myFavs), typeof myFavs);// type of says myFavs is an Object
//
// myFavs.push("Logan");   //we are pushing item to the
//
// console.log(myFavs);//display myfavs
//
// myFavs.unshift("Faith Herndon");   //unshift adds to the head
//
// console.log(myFavs); //
//
// myFavs.pop();  //this always pops the last item of the array.
// console.log(myFavs);
//
// let removed = myFavs.splice(2);   //cut everything after and including that index also returns the values cut off
// //myFavs.splice(2,3) //this removes starting index 2 and remove 3 items
// console.log("the splice\n", myFavs, removed); // only thing left is [0,1]
//
//
//
//
// console.log(myFavs, "Before");
// myFavs.splice(3,1,["I got added!"]);  //splice starting and including at 3, remove 1qty and add last new paremeter in the middle
// console.log(myFavs, 'AFTER')    //show the myFaves array after we splice
//
// //
// console.log(myFavs, "before the slice")
// let copy = myFavs.slice(1); //slice copies the list starting at the indexed so[1,2.....]
// console.log(copy, myFavs)
//
//
// let removeIndex = myFavs.indexOf(42); //returns the index of item we are looking for
// console.log(removeIndex);
// myFavs.splice(removeIndex, 1)//we will remove only the first instance of the item we are looking for
//
// let myNums = [1,2,3,4,5]
// console.log(myNums.reverse());  //we are reversing the order of array myNums
// console.log(myNums);//
//
//
// //sorting
// console.log(myFavs)
// myFavs.sort();   //sorts the array in order, it only looks at the first character ie [ 2053, 42, "adfs"
// //console.log(myFavs)
//
//
// let multiDimensional = [["hello","0"],["goodbye","1"]];
// console.log(multiDimensional[0][0],multiDimensional[1][0]);
//
// */
//
// let favoriteMovies = []
// let movie1 = ["Wolverine", "logan"]
// let movie2 = ["The Dark Knight", "batman"]
// let movie3 = ["Avengers", "Thor"]
// let movie4 = ["xmen", "magneto"]
// let movie5 = ["step brother", "Will Farrel"]
//
// favoriteMovies.push(movie1,movie2,movie3,movie4,movie5);
// console.log(favoriteMovies);
//
// // let titles= [];
// // titles.push(favoriteMovies[0][0],favoriteMovies[1][0],favoriteMovies[2][0],favoriteMovies[3][0],favoriteMovies[4][0]);
// // console.log(titles)
//
// let userMovie = prompt("What movie are you looking for?")
// console.log(userMovie)
//
// for(let index=0; index<favoriteMovies.length; index++){
//   console.log(index)
//   if (favoriteMovies[index][0]==userMovie){
//     alert("The movie was found", userMovie, "at index", index);
//   };
// };
//
// //Anonymous function
// //define a function
// // function (string){
// //   console.log(string);
// //   return string.toUpperCase(); //data transformation
// // };//end of the function
//
// //named functions
// //function definition
// function addTwo(num){
//   return num + 2;
// };
//
// //call the function
// console.log(addTwo(8));
//
// let myNewNumber = addTwo(34);
//
// //this function displays th estring via a console.log
// function logMyString(string){
//   string= uppercasify(string);
//   console.log(string);
// };
//
//
// logMyString("KEvin Was here");
//
//
// function alertsAd(){
//   alert("Hey we have a sale on everything in the stroe");
// }
//
//
//
// // let confirmStuff = function(someString){
// //   let newVariable;
// // }
//
// //confirmStuff("Do you want to watch frozen?")
//
// let i=0;
// function iCallMyself(){
//   console.log(i);
//   i++;
//   iCallMyself();
// }
//
//
// //Recursion
// let i =0;
// function iCallMyself(){
//   console.log(i)
//   i++;
//   if()
// }
//
// (logFunction, alertFunction) => //NO Functions
//   logFunction("hello World");
//   alertFunction('Goodbye,friends!');
// };
//
//
// //only 1 arguments
// string => {//parans are optionsal
//   console.log(string);
// }
//
// logstring("Hello cats")
//
//
// //Implicit returns
// string =>(string.toUpperCase());
//
//
// //Day5takehome convert years to dog years via functions.
//
let userAge=0;

userAge=prompt("Please enter your age and press enter -->")
dogYears(userAge)

function dogYears(num){
   let dogYears;
   dogYears= num*7;
   alert("The age in dog years is " + dogYears);
   return (dogYears);
 }
