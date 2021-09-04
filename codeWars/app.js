//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// dublicateEncode = () =>{
//   let a = prompt("Enter your a word").toLowerCase().split("")
//  let bos = ""
//  for (let index = 0; index < a.length; index++) {
//      const element = array[index];     
//  }
 
  
// }

function xxx(word) {
    let x = word.toLowerCase().split("");
    let y =""
    for (const i of x) {
        if (x.indexOf(i)===x.lastIndexOf(i)){
            y+="("
        }else {
            y+=")"
        }
    }
    return y
}
console.log(xxx);