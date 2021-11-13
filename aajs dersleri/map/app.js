// *=======================================================
//                       FOREACH
// *=======================================================

//---------------------------------------------------------
// print each element of array into console
//---------------------------------------------------------

const students = ["John", "Ali", "Can"];

students.forEach(print);

// * function decleration
function print(x) {
  console.log(x);
}

//  * with Arrow funct
students.forEach((x) => console.log(x));

//---------------------------------------------------------------
// Calculate the sum of the array
//----------------------------------------------------------------

const array1 = [5, 6, 7, 2, 3];

let sum = 0;
array1.forEach((v) => (sum += v));
console.log("SUM= ", sum);

// =======================================================
//                        MAP
// =======================================================
// map() metodu, dizilerin içerisindeki değerleri
// güncelleyerek ayrı bir diziye saklamak içinn kullanablriz.

//---------------------------------------------------------------
// Dizinin her bir elamanının 5 katını alarak ayrı bir dizide
// saklayan uygulamayı map() metodu ile yazınız.
//----------------------------------------------------------------

// Eğer bir diziyi trasnformasyona uğratacak isek forEach yerine map()
// kullanmak çok daha basit. map() metodu, güncellenmiş diziyi doğrudan
// bir değişkene atmaya izin  vermektedir.

const numberArray = [3, 7, 17, 8, 9, 3, 0];

const doubled = numberArray.map((x) => x * 2);

console.log(doubled, numberArray);

//---------------------------------------------------------------
// Beliritilen dizideki isimleri büyük harfe çevirerek bir dizide
// saklayan uygulamayı map() metodu ile yazınız.
//----------------------------------------------------------------
const names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "ayşe", "canan"];

const bigNames = names.map((v) => v.toUpperCase());
console.log(bigNames, names);

//---------------------------------------------------------------
// Ürünlerin TL fiyatlarının saklandığı bir dizimiz var. Bu dizideki
// değerlerin Euro ve Dolar karşılıklarını verilen oranlara göre
// hesaplayarak ayrı dizilere saklayan uygulamayı map() ile yazınız
//----------------------------------------------------------------

const euro = 11;
const dolar = 10.3;

const tlPrices = [100, 150, 100, 50, 80];

const dolarPrices = tlPrices.map((tl) => (tl / dolar).toFixed(2));
const euroPrices = tlPrices.map((tl) => (tl / euro).toFixed(2));

console.log(tlPrices, dolarPrices);
console.log(euroPrices);

//---------------------------------------------------------------
// tlFiyatlar dizidekisindeki ürünlere zam yapılmak isteniyor.
// Şartımız:  Fiyatı 100 TL den fazla olanlara %10 zam,
// 100 TL den az olanlara ise %15 zam yapılmak isteniyor.
// Ayrıca, zamlı olan yeni değerleri
// New Price of Product 1 : 110 TL şekilde diziye saklamak istiyoruz.
//----------------------------------------------------------------

const increasedPrices = tlPrices.map((tl, i) => {
  if (tl > 100) {
    return `New Price of Product ${i + 1} : ${(tl * 1.1).toFixed(2)}`;
  } else {
    return `New Price of Product ${i + 1} : ${(tl * 1.15).toFixed(2)}`;
  }
});

console.log(increasedPrices);


// =======================================================
//                       FILTER
// =======================================================

// filter() metodu bir dizideki elemanları istediğimiz kritere
// göre flitreleyerek seçmek için kullanabilriz.

//---------------------------------------------------------------
// koordinatlar dizisindeki negatif koordinatları alıp
// yeni bir diziye saklayan uygulamayı filter() ile yapınız.
//----------------------------------------------------------------

//---------------------------------Fİlter

const coords = [-100, 150,-32,-20,10]
negatives = coords.filter((c)=> c>=0)
console.log(negatives);