// let username = "mark"
// username ? console.log(`Merhaba ${username}`): console.log("please login");

// let username = "eric";
// username && console.log(`"Merhaba ${username}"`);


// let i = 1;
// let sum = 0;
// while (i < 11 ){
//     sum +=i;
//     console.log(i);
//     if(i == 8) break;
//     i++
// }
// console.log(sum);

// let i = 0;
// let sum = 0;
// while (i < 11 ){
//     sum +=i;
//     i++
//     if(i == 8) continue;
//     console.log(i);
// }

// let i = 5
// let sum = 0
// do {
//     sum +=i;
//     i++;
// } while (i<7);
// console.log(sum);

let i = 1
for (let i = 1; i <= 100; i++) {
    if(i%3 == 0 && i%5 == 0 ){
        console.log(i,"=fizzbuzz");
    }
    else if (i % 3 == 0){
        console.log(i,"=Fizz")
    }
    else if (i % 5 == 0){
        console.log(i,"=buzz")
    }
    // console.log(i);
}