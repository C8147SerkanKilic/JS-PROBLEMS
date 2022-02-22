// const MOVES = [
//     "Shimmy",
//     "Shake",
//     "Pirouette",
//     "Slide",
//     "Box Step",
//     "Headspin",
//     "Dosado",
//     "Pop",
//     "Lock",
//     "Arabesque",
//   ];
  
//   function danceConvert(pin) {
//     const danceOutput = [];
//     let val = [];
//     for (let i in pin) {
//       console.log();
//       if (!Number.isInteger(parseInt(pin[i]))) return "Invalid Input!";
//       val.push(Number(pin[i]) + Number(i));
//     }
  
//     val = val.map((e) => {
//       if (e > MOVES.length - 1) return e - MOVES.length;
//       else return e;
//     });
  
//     val.map((e) => danceOutput.push(MOVES[e]));
  
//     console.log(val);
//     return danceOutput;
//   }
//   console.log(danceConvert("0000")); //  ➞ ["Shimmy", "Shake", "Pirouette", "Slide"]
  
//   console.log(danceConvert("3856")); //  ➞ [ "Slide", "Arabesque", "Pop", "Arabesque" ]
  
//   console.log(danceConvert("9999")); //  ➞ [ "Arabesque", "Shimmy", "Shake", "Pirouette" ]
  
//   console.log(danceConvert("32a1")); //  ➞ "Invalid input."

// let str = 'string'
// let arr = [...str]  ya da === > let arr = [..."string"]
// console.log(arr)
// Prints ['s', 't', 'r', 'i', 'n', 'g']