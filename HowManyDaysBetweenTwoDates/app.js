//Create a function that takes two dates and returns the number of days between the first and second date.
//Yıl3,17×10-11
// Ay3,8×10-10
// Hafta1,65×10-9
// Gün1,16×10-8
// Saat2,78×10-7
// Dakika (minute)1,67×10-5
// Saniye (s)10-3
// Milisaniye (ms)1
// Mikrosaniye (µs)1.000
// Nanosaniye (ns)1.000.000

datefunc = (a,b) =>{
    let date1 = new Date (a)
    let date2 = new Date (b)
    return (date1-date2)/(1000*60*60*24)
}
console.log(datefunc("21 December 2021","2020 October 2"));