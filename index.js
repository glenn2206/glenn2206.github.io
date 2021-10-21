/* geln help
Pembagian Tugas Hangman
1. Cari database untuk kata dan pertanyaannya (Andre, Glenn)
  1. buat database dulu -> array ["kategori",["kata-kata"]]
  2. 


2. Tampilan (Luga,David, Putra )
  1. Loadear -> start untuk mulai
  2. Page 2 -> pilihan kategori
  3. Game mulai
    -> kesempatan
  4. Animasi solved
  5. Animasi salah 
3. 
test123


ABSENSI!!
1. GLENN
2. david
3. hallo gaes
4. Andre cek

*/
//   GLENN

/*

*/
//========================================================
//L O A D E R
//========================================================
let database = {
    food: ["Pizza", "Pecel", "Mango", "Bread", "Seafood", "Pasta", "Salad", "Cereals"],
    sport: ["Soccer", "Basket", "Futsal", "Chess", "Tinju", "SmackDown"],
    brand: ['Samsung', 'Apple', 'Asus', 'Nokia', 'Intel', 'Sony', 'Motorola', 'Huawei', 'Google', 'Oneplus']
}


//========================================================
//PAGE 1, PILIH KATEGORI
//========================================================

// kategori ini masuk dari input HTML nyambung di button
kategori = "food"
// function pilihKategori(kategori) {
let rand = "";
if (kategori === "food") {
    rand = database.food[Math.floor(Math.random() * database.food.length)]
    // hasil randFood jadi jawaban
} else if (kategori === "sport") {
    rand = database.sport[Math.floor(Math.random() * database.sport.length)]
} else if (kategori === "brand") {
    rand = database.brand[Math.floor(Math.random() * database.brand.length)]
}
//   return rand;
// }
// console.log(pilihKategori(kategori));

// Jika huruf ke x sesuai dengan huruf dari randfood

//========================================================
//PAGE 2, JALANKAN GAMENYA
//========================================================

//========================================================
//1. TAMBAHIN FITUR RANDOM KATA UNTUK START (NIKO)


//2. TAMBAHIN FITUR BATAS KLIK (DAVID)


//========================================================

let jawaban = ""
let kataTerpilih = ""
for (let i = 0; i < rand.length; i++) {
    jawaban += "_ "
    kataTerpilih += rand[i] + " "
}
console.log(kataTerpilih + " INI KATA KUNCINYA")
console.log(jawaban + " INI KATA YANG HARUS DITEBAK")
// }
// console.log(jawaban.length);

// JIKA KLIK BUTTON a, MAKA MASUK INPUTAN a


let input = "a"
let newJawaban = ""
let nyawa = 5;

// function pilihHuruf(input) {
  for (let i = 0; i < kataTerpilih.length; i++) {
      // if (i == 0) {
      //   newJawaban += input
      // }
      if (kataTerpilih[i] === input) {
          newJawaban += input
          nyawa--;
      } else newJawaban += jawaban[i];
  }
  console.log(newJawaban + " INI KATA YANG SUDAH DIBERI INPUTAN")
  console.log(nyawa);
  // return [newJawaban, nyawa]
// }

// console.log(pilihHuruf('a'))

//   GLENN
