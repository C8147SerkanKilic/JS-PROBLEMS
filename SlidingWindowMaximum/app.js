// //given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8],
// 10 = max(10, 5, 2)
// 7 = max(5, 2, 7)
// 8 = max(2, 7, 8)
// 8 = max(7, 8, 7)

// console.log(array.length);
// console.log(kk);
// console.log(array.sort(function(a,b){return a-b}));
array = [10, 5, 2, 7, 8, 7]
let k = Number(prompt("Bir k sayısı giriniz"))
let kk = 1 <= k & k <= (array.length) ? k : "lütfen belirtilen aralıkta bir k sayısı giriniz";
let resultarray = []
for (let index = 0; index < array.length; index++) {
    let element = array.slice(index,index+kk); 
    // resultarray.push(element.length == kk ? element.sort(function(a,b){return a-b})[element.length-1]:null)
    element.length == kk ? resultarray.push(element.sort(function(a,b){return a-b})[element.length-1]):null
}
console.log(resultarray); 
console.log(resultarray); 
