const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (arr, sort) => {
  const hasil = []
  hasil.push(sort(arr));
  return hasil;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (arr) => { 
  const hasil = [];
  const sorted = arr.sort();
  for (let index = 0; index < sorted.length; index++) {
    hasil.push(index+1 +". " + arr[index]);
  }
  return hasil;
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (arr) => { 
  const hasil = [];
  const sorted = arr.reverse();
  for (let index = 0; index < sorted.length; index++) {
    hasil.push(index+1 +". " + arr[index]);
  }
  return hasil;
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
