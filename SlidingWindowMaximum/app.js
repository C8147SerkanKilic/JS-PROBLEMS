// //given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8],
// 10 = max(10, 5, 2)
// 7 = max(5, 2, 7)
// 8 = max(2, 7, 8)
// 8 = max(7, 8, 7)

array = [10, 5, 2, 7, 8, 7]
let k = Number(prompt("Bir k sayısı giriniz"))
let kk = 1 <= k & k <= (array.length) ? k : "lütfen belirtilen aralıkta bir k sayısı giriniz";



// console.log(array.sort(function(a,b){return a-b}));