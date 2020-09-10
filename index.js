/*
    Object
*/

const mahasiswa1 = ["John", "Doe", 31, true];

// 1. Object Literals

const mhs1 = {
    namaDepan: 'John',
    namaBelakang: 'Doe',
    umur: 31,
    sudahLulus: true,
    alamat : {
        jalan: 'jln Arnold Mononutu',
        kecamatan: 'Airmadidi',
        kabupaten: 'Minahasa utara',
    },
    IpSemester: [3.05, 3.25, 3.0, 3.4],
    htiungIPK: function () {
      let total = 0;
      this.IpSemester.forEach(function (el) {

      });
      this.IPKumulatif = total / 4;
    },
};
delete mhs1.namaBelakang;
console.log(mhs1);

// 2. kata kunci new

const mhs2 = new Object();
mhs2.namaDepan = "Jane";
mhs2.namaBelakang = "Smith";

// mengakses Properti Object
// // 1. Dot notation
console.log(mhs1.umur);
//2. Bracket notation
console.log(mhs1["namaBelakang"]);

console.log(mhs1.alamat.jalan);
console.log(mhs1.IpSemester[2]);
mhs1.htiungIPK();
console.log(mhs1);

// menyimpan nama mahasiswa lebih dari 1

// const mahasiswa = [
//     {
//         nim: "001",
//         namaDepan: "John",
//         namaBelakang: "Doe",
//     },
//     {
//         nim: "002",
//         namaDepan: "Jane",
//         namaBelakang: "Smith",
//     },
//     {
//         nim: "003",
//         namaDepan: "Stenly",
//         namaBelakang: "Adam",
//     },
// ];

// mahasiswa.forEach(function (el) {
//     console.log(el);
// });