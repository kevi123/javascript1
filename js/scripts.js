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
// console.log(my//Favs, 'AFTER')    //show the myFaves array after we splice
//
// //
// console.log(myFavs, "before the slice")
// let copy = myFavs.slice(1); //slice copies the list starting at the indexed so[1,2.....]
// console.log(copy, myFavs)
//
////
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
// let titles= [];
// titles.push(favoriteMovies[0][0],favoriteMovies[1][0],favoriteMovies[2][0],favoriteMovies[3][0],favoriteMovies[4][0]);
// console.log(titles)

//alert()
//confirm()
//prompt()

// var item ={todo:"string"; days:"int"; }

//this is a for loop
const colors = ['blue','purple','green','red','aquamarine','chartreuse','dodgerblue'];
for (let index=0; index< colors.length; index++){
  console.log(colors[index], index)
  if (index === 1){
    console.log("the index is equal to one")
  }    //this is a comparison
  continue;
  console.log("hello do you see me")
}

//this is a while loop
let counter = 0;
while (counter<10){
  console.log("i like while loopzz", counter)
  counter++
}


//this loop displays everything in the array
// const captains = ["kirk","Picard","Sisko","Janeway","Lorca"];
// captains.forEach( (captain, num) => {
  // console.log(captain, num);
// });


//this is a FOR OF loop..... this is only for arrays
const captains = ["kirk","Picard","Sisko","Janeway","Lorca"];
for (let captain of captains) {
  console.log("Hello Captain $(captain)");
}


//create an object
const me = {
  firsName: "Kevin",
  lastName: "Hinojosa",
  age: 28
};

//this is a FOR IN loop....this is only for objects
for(let property in me){
  console.log(me[property]);
}
