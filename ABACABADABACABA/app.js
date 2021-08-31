let list = ["A", "B", "C", "D", "E"]
// console.log(list.indexOf("B"));
// let received = (prompt ("bir harf giriniz")).toUpperCase()

 function bar(i){
    //  console.log(received);
    let resultindex = list.indexOf(i);
    //   console.log(resultindex);
     if (resultindex < 0){
         return "";
     }
        let result = bar(list[resultindex-1])
        // console.log(list[resultindex-1]);
        return result + i + result;

}
console.log(bar("E"));
console.log(bar("E"));


// function abacabaPattern(n){
//     if(n<=0){
//         return"";
//     }
//     let prev = abacabaPattern(n-1);
//     return prev+letters[n-1]+prev;    
// }
// console.log(abacabaPattern(3));