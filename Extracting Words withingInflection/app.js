//Write a function that takes a string as an argument and returns a list of all the words inflected by "-ing". Your function should also exclude all the mono-syllabic words ending in "-ing" (e.g. bing, sing, sling, ...). Although these words end in "-ing", the "-ing" is not an inflection affix.
//ingExtractor("coming bringing Letting sing") ➞ ["coming", "bringing", "Letting"]
// ingExtractor("going Ping, king sHrink dOing") ➞ ["going",, "dOing"]
// ingExtractor("zing went ring, ding wing SINk") ➞ []

// let ingExtractor = (a) =>{
//    let b = a.match("ing")
//     return b
// }
// console.log(ingExtractor("coming bringing Letting sing"));
let stringg = "coming bringing Letting sing ank"
let array = stringg.split(" ")
let result = []
for (let index = 0; index < array.length; index++) {
   array[index].includes("ing") ? result.push(array[index]) : null ;
}
console.log(result);