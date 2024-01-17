// =====================================================================================================
// // Membuat dan memanggil function
// function hitungKubus(a, b) {
//   a **= 3;
//   b **= 3;
//   let hasil = a + b;
//   return hasil;
// }
// console.log(hitungKubus(8, 3));
// =====================================================================================================

// =====================================================================================================
// // Parameter dan Argument
// function tambah(a, b) {
//   return a + b;
// }
// let hasil = tambah(5, 3, 1);
// console.log(hasil);

// // Arguments
// function tambah() {
//   let hasil = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     hasil += arguments[i];
//   }
//   return hasil;
// }
// let coba = tambah(1, 2, 3, 4, 5);
// console.log(coba);
// =====================================================================================================

// =====================================================================================================
// // Rekursif Function
// function rekursif(a) {
//   if (a === 0) return;
//   console.log(a);
//   rekursif(a - 1);
// }
// rekursif(10);

// // Faktorial
// function faktorial(a) {
//   if (a === 0) return 1;
//   return a * faktorial(a - 1);
// }
// console.log(faktorial(5));

// faktorial(5)
// 5 * faktorial(4)
// 5 * (4 * faktorial(3))
// 5 * (4 * (3 * faktorial(2)))
// 5 * (4 * (3 * (2 * faktorial(1))))
// 5 * (4 * (3 * (2 * 1)))
// 5 * (4 * (3 * 2))
// 5 * (4 * 6)
// 5 * 24
// 120
// =====================================================================================================

// =====================================================================================================
// // Function Deklaration
// function cobaDeklaration(nama) {
//   alert(`hallo ${nama}`);
// }
// cobaDeklaration("Dhea Ramdani");

// // Function Expresion
// const cobaExpresion = function (nama) {
//   alert(`hallo ${nama}`);
// };
// cobaExpresion("Dhea Ramdani");
// =====================================================================================================
