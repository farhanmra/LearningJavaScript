//> Function
//fungsi adalah kunci utama pada javascript, yang membuat javascript sangat powerful -Douglass Crockford

//di bahasa lin, ada istilah method, class, constructor, module, di javascript semuanya di handle di function.

//function adalah sub routine yang dapat dipanggil pada bagian lain pada program
//function merupakan structur dasar pembentuk javascript
//disebut juga kumpulan tugas . statement / prosedur
//untuk dapat menggunakannya, kita harus buat terlebih dahulu baru bisa digunakan

//kenapa menggunakanan function
//reusability (DRY)
//Dekomposisi / abstarksi  (untuk menyembunyikan kompleksitas program yang kita buat. )
//modularitas (mempermudah penelusuran kesalahan pada saat proses debuging)

//kategori function
//build in
//user defined function

//build in function
//fungsi yang sudah disediakan oleh javacript
//kita tinggal panggil aja

//contoh :
//alert()
//prompt()
//confirm()
// dan masih banyak lagi

//build in function : String
//CharAt(); slice();split();toString(); many more

//build in function : String
//sin(); cos(); tan(); random(); round(); floor(); ceil(); log()

//use defined function
//fungsi yang kita buat sendiri
//menggunakan keyword function
//nama function (optional)
//parameter / argument
//disimpan dalam()
//parameter boleh ada dan boleh tidak ada, 
//parameter boleh lebih dari satu
//parameter dipisahkan oleh koma
//function body dibungkus dengan {}
//dapat mengembalikan nilai (return value) atau tidak

//membuat user defined function
//dengan deklarasi / function declaration
//dengan ekpresi / function expretion

//function declaration
// function jmlDuaBilangan(a,b){
//     var total;
//     total = a + b;

//     return total

// }

//function expretion

// var jumlahDuaBilangan = function(a,b){
//     var total;
//     total = a + b;

//     return total;
// }

//menjalankan function
// document.write(jumlahDuaBilangan(5,5) + "<br>");
// document.write(jumlahDuaBilangan(8,7) + "<br>");
// document.write(jumlahDuaBilangan(6,15) + "<br>");

// > Fuction 
//blok kode yang dibuat untuk melakukan tugas yang specifik
//dapat dipanggil berulang kali
//memudahkan penelusuran
//reusability 

//menjumlahkan volume 2 kubus
//1. ketahui sisi masing2 kubus 8 & 3
//2. hitung volume kubus a 8^3 = 512
//3. hitung volume kubus b 3^3 = 27
//4 jumlahkan hasilnya 512 + 27 = 
//5. kembalikan nila jawaban 539

// var sisiKubusA = parseInt(prompt("masukan sisi kubus a :"));
// var sisiKubusB = parseInt(prompt("masukan siki kubus b :"))


// function volumeKubus(sisi){
//     var volume
//     volume = sisi * sisi * sisi 
//     return volume

// }


// function jumlahVolumeKubus(a,b){
//     var total
//     var volumeKubusA
//     var volumeKubusB

//     volumeKubusA = a * a * a;
//     volumeKubusB = b * b * b;

//     total = a + b

//     return total
// }

//document.write(jumlahVolumeKubus(sisiKubusA,sisiKubusB))

// document.write('Sisi kubus a          : ' + sisiKubusA + "<br>");
// document.write('sisi kubus b          : ' + sisiKubusB + '<br>')
// document.write('Volume kubus a        :  ' + volumeKubus(sisiKubusA) + '<br>')
// document.write('Volume kubus b        : ' + volumeKubus(sisiKubusB) + '<br>')
// document.write('jumlah volume 2 kubus : ' + jumlahVolumeKubus(volumeKubus(sisiKubusA),volumeKubus(sisiKubusB)) + '<br>')


//parameter dan argument
//paramete adalah variable yang ditulis dalam kurung saat fungsi dibuat. digunakan untuk menampung nilai  yang dikirimkan saat fungsi di panggil


//argument adalah nilai yang dikirimkan ke parameter saat fungsi dipanggil

// function tambah(a,b){
//     return a+b;
// }

// var hasil = tambah(2,3);
// document.write(hasil + '<br>') 

// var hasil = tambah(10,3);
// document.write(hasil + '<br>')

// var hasil = tambah(7,6);
// document.write(hasil + '<br>')

// function tambah(a,b){
//     var hasil =  a+b;
//     document.write('Hasil penjumlahan angka ' + a + ' dan ' + b + 'adalah : ' + hasil + '<br>')

// }

// tambah(5,6);

//jika jumlah parameter dan argumentya tidak sesuai?
//jika parameternya lebih sedikit dari argument, maka argument yang selebihnya akan diabaiakan

//jika parameternya lebih banyak dari argument, parameter yang selebihnya akan di isi dengan nilai default / undefined.

// function tambah(a,b){
//     var hasil =  a+b;
//     document.write('Hasil penjumlahan angka ' + a + ' dan ' + b + ' adalah : ' + hasil + '<br>')

// }

// tambah(5);

//arguments
//array yang berisi nilai yang dikirim saat fungsi dipanggil (psudoparameter)

//  function tampilkanArguments(){
//      document.write(arguments.length + '<br>')
//  }
//  tampilkanArguments(1,'halo', true)

// function tambah(a,b){
//     var hasil =  a+b;
//     document.write('Hasil penjumlahan angka ' + a + ' dan ' + b + 'adalah : ' + hasil + '<br>')

// }

// tambah(5,6, 7);

//CONTOH FUNCTION MENGGUNAKAN ARGUMENTS
// function tambah(){
//     var hasil = 0

//     for(var i = 0; i < arguments.length;i++){
//         hasil += arguments[i]
//     }
//     document.write(hasil + '<br>')    
// }
// tambah(3,4,5)

// > variable Scope
//bagaimana sebuah variable dapat diakses dalam program kita
//block scope & function scope

//block sope (c dan java)
//java script tidak menganut block scope
//melainkan javascript menganut function scope

//glogal scope / window scope

//function scope,
//variable yang kita buat didalam sebuah function, variable tersebut hanya bisa diakses di dalam functionnya saja
//didalam sebuah function bisa mengakses variable global

// var akademi='Dojobox.ID'

// function abc(){
//     var akademia = 'Dojobers'
//     // document.write(akademi + '<br>')
//     document.write(akademia + '<br>')
//     document.write(akademi + '<br>')
// }

// abc()
// //document.write(akademia + '<br>')

// var a = 1;
// function test(){
//     var b=2;
//     console.log(b);
// }

// test()


//name conflict 
//dua variable yang memiliki nama yang sama tapi pada scope yang berbeda tidak akan saling memperngaruhi

// var a = 1
// function test(a){
//     document.write(a + '<br>')
// }

// test(2);
// document.write(a + '<br>')

// var a = 1;

// function test(a){
//     document.write(a)
// }

// test(a)
// document.write(a)



// > Object
//kumpulan nilai yang memiliki nama.
//array yang lebih sakti
//in javascript, object are king, If you understand object, ypu undertand jacascript

//kenapa menggunaka object

//contoh penerapan dalam source code
// var Dojober = {
//     //properti
//     tipe : 'Manusia',
//     nama : 'Jonathan',
//     bootcamp : 'Dojobox',

    
// //method
// berjalan: function () {
//     console.log(nama + 'jalan');
//     },
//     makan: function () {
//     console.log(nama + 'makan');
//     },
//     minum: function () {
//     console.log(nama + 'minum');
//     }    
// };    

/* ar akademia = {
    nama : "Dojober",
    perkerjaan : "tukang testing",
    usia : "27",
    hobi : ['membaca', 'ngoding', 'ngetest'],
    Pengalaman : {
        manualTester : 'perusahaan a',
        automationTestter : 'perusahaan b',
    },

    menyapa: function (){
        document.writeln('halo dojober semua, nama saya ' & this.nama + '<br>');
    },

    getUmur: function(){
        document.write('usia saya adalah ' + this.usia + ' tahun' + '<br>');

    },

    getHobies: function(){
        document.write ('hobi saya adalah : ' + this.hobi.join(' - ') + '<br>');

    }
}
 */

//membuat object
//object literal
/* var akademia = {
    nama : 'andika',
    noInduk : '001',
    email : 'andika.mentor@dojobox.id',
    specialitation : 'tester documentation'
} */

/* var akademia1 = {
    nama : 'andikabw',
    noInduk : '001',
    email : 'andikabw.mentor@dojobox.id',
    specialitation : 'tester documentation'
} */

/* var akademia2 = {
    nama : 'bagus',
    noInduk : '002',
    email : 'bagus.mentor@dojobox.id',
    specialitation : 'tester documentation'
} */


//function declaration
/* function buatObjectAkademia(nama, noInduk,email,specialitation){
    var akademia={};
    akademia.nama = nama;
    akademia.noInduk = noInduk;
    akademia.email = email;
    akademia.specialitation = specialitation;
    return akademia;
}

var akademia1 = buatObjectAkademia('jojo','004','jojo.mentor@dojobox.id','web automation tester');

var akadmia2 = buatObjectAkademia('alif','005','livianda.mentor@dojobox.id','automation engineer'); */

//contructor function
/* function Akademia(nama,noInduk, email,specialitation){
    this.nama =nama;
    this.noInduk = noInduk;
    this.email = email;
    this.specialitation=specialitation;
} */

/* var akademia3 = new Akademia('juki','006','juki.student@dojobox.id','manual testter'); */

/* document.write(akademia3.nama) */;

//object.create
