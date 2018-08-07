//Day 11 JSOn.....API 
/*
const weCool = true;
const myPromise = new Promise( (resolve, reject) => {
  if (weCool) resolve("We are in fact, cool")
  else if (!weCool) reject ("sorry , No we aint cool");
});


myPromise.then(result =>{
  console.log(result);
}).catch( error =>{
  console.log(error);
});

function returnTwo() {
  return 2;
}

console.log(Promise.resolve(returnTwo()));
*/

//with promises, use .then()
fetch('http://stapi.co/api/v1/rest/series/search').then(response => {
  console.log(response)
  //if(response.status ===200){
  if(response.ok){
    console.log("Yes it works");
  }
  return response.json();
}).then(jsonResult =>{
  console.log(jsonResult.series);
  starTrekSeries = jsonResult.series;
}).catch( (err) => {console.log(err); });





/*
let myObject = {
  name: "Kevin",
  age: NaN
};


myObject = JSON.stringify(myObject);

console.log(myObject);

for(i=0; i<=5; i++){
  j=0;
  while(j=<5 and j>=0){
  console.log(j)
  j++
  }
  console.log("nline")
}

//Promise
const myPromise = new Promise((resolve, reject)=>{

})
*/
