// In this challenge, you have to find the numeric value of a given word. Instead of the usual sum of Unicode values, you have to convert the whole word into a decimal number from a base equal to ten plus the position in the alphabet of the "highest" letter of the word (counting from a = 1 to z = 26).

// Given a word, implement a function that returns an integer being the decimal value obtained after the conversion from the word specific base, accordingly to the instructions above
// The English Alphabet consists of 26 letters: A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.

// const alpha = Array.from(Array(26)).map((e, i) => i + 65);
// const alphabet = alpha.map((x) => String.fromCharCode(x));
// console.log(alphabet); 
////-------------------parseInt(string, radix)
// let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
// convektor = (a,b) =>{
//     a = prompt ("Please Enter a Word")
// //  b = prompt (Number("Enter the base number you want to convert"))
//     let c = a.toUpperCase().split("").sort()
//     console.log(c);
//     b = Number(letters.indexOf(c[c.length-1]))+11
//     console.log(b);
// return parseInt(a,b)
// }
// console.log(convektor());

// //-------------------------2.yol
// function wordToDecimal(word) {
//     let indexArr = []
//     let arr = word.toUpperCase().split("")
//     arr.map(ltr => alphabet.map( a => {
//       if (a == ltr) indexArr.push(alphabet.indexOf(a) + 1)
//     }))
  
//     let maxNumberedLetter = Math.max(...indexArr)
//     return parseInt(word, maxNumberedLetter+10)
//   }
  
//   console.log( wordToDecimal("ZERO"));
//   console.log( wordToDecimal("JavaScript"));
//   console.log( wordToDecimal("Edabit"));
//   console.log( wordToDecimal("Edabit"));

