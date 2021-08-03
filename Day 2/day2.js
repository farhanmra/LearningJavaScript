/* // alert('test');
var namaVariable = '1234';
// document.write(typeof(namaVariable) + '<br>');
namaVariable = 1234;
// document.write(typeof(namaVariable) + '<br>');
namaVariable = true;
// document.write(typeof(namaVariable));

var namaPengungjung = prompt('Silahkan masukan nama kamu',"dojobers setia");

document.write('Hai ' + namaPengungjung + ', selamat datang di DOJOBOX.id' + '<br>');

var konfirmasi = confirm("Mau tetap disini kan ? ")
var hasil = (konfirmasi==true)?  "Iya donk" : "Gak deh.."
document.write(hasil + "<br>") */

// var angka = parseInt(prompt("masukan angka yang mau di test : "));

// if(angka>10){
//     document.write("bilangan yang dimasukan lebih dari 10");
// }
// var nama ='andhika'
// var nama =prompt('masukan nama : ','nama pengunjung');

// if(nama=='andika'){
//     document.write('seorang mentor')
// }else{
//     document.write('nama yang dimasukan bukan andika')
// }

/* var nilai = prompt('masukan angka :');
if(nilai % 2 ==0){
    document.write(nilai + ' merupakan bilangan genap')
}else if(nilai % 2 ==1){
    document.write(nilai + ' merupakan bilangan ganjil')
}else{
    document.write(nilai + ' bukan merupakan bilangan')
} */

/* var nilaiKepuasan = parseInt(prompt("masukan nilai kepuasan kamu",'0-100'));

switch(nilaiKepuasan){
    case (nilaiKepuasan>=90):
        document.write('Nilai kamu adalah A')
        break 
    case nilaiKepuasan>=80:
        document.write('Nilai kamu adalah B')
        break
    case nilaiKepuasan>=70 :
        document.write('Nilai kamu adalah C')
        break
    case nilaiKepuasan>=60 :
        document.write('Nilai kamu adalah D')
        break      

}
 */




// var nilaiKepuasan = parseInt(prompt('masukkan nilai kepuasan kamu', '0-100'));

// switch(nilaiKepuasan){
//     case (nilaiKepuasan>=90):
//         document.write('Nilai kamu adalah A')
//         break
//     case (nilaiKepuasan>=80):
//         document.write('Nilai kamu adalah B')
//         break
//     case (nilaiKepuasan>=70):
//         document.write('Nilai kamu adalah C')
//         break
//     case (nilaiKepuasan>=60):
//         document.write('Nilai kamu adalah D')
//         break
//     default:
//         document.write('Nilai kamu adalah E')
// }


/* var nilai_ujian = parseInt(prompt("Masukkan nilai kepuasan anda?","0-100"));
switch(true){
    case (nilai_ujian >= 90):
        document.write('Grade A');
        break;
    case (nilai_ujian >= 80):
        document.write('Grade B');
        break;
    case (nilai_ujian >= 70):
        document.write('Grade C');
        break;
    case (nilai_ujian >= 60):
        document.write('Grade D');
        break;
    default:
        document.write('Input salah');
}   */

// var nilaiK = parseInt(prompt("masukan nilai ",'0-100'));

// switch(true){
//     case (nilaiK>=90): document.write('Nilai kamu A');
//     break;
//     case (nilaiK>=80): document.write("Nilai kamu B");
//     break;
//     case (nilaiK>=70): document.write("Nilai kamu C");
//     break;
//     case (nilaiK>=60): document.write("Nilai kamu D");
//     break;
//     default: document.write('Input salah');
// }

/* var nilaiKepuasan = parseInt(prompt('masukkan nilai kepuasan kamu', '0-100'));

switch(true){
    case (nilaiKepuasan>=90):
        document.write('Nilai kamu adalah A')
        break
    case (nilaiKepuasan>=80):
        document.write('Nilai kamu adalah B')
        break
    case (nilaiKepuasan>=70):
        document.write('Nilai kamu adalah C')
        break
    case (nilaiKepuasan>=60):
        document.write('Nilai kamu adalah D')
        break
    default:
        document.write('input salah')
} */
/* 
var grade=parseInt(prompt('masukan nilai mahasiswa','0-100'))
switch (true){
    case grade >=90 :
        document.write('selamat anda mendapat A')
        break
    case grade >=80 :
        document.write('selamat anda mendapat B')
        break
    case grade >=70 :
        document.write('selamat anda mendapat C')
        break
    case grade >=60 :
        document.write('selamat anda mendapat D')
        break
    default:
        document.write('anda useless')

} */


/* var nilaiKepuasan = parseInt(prompt("masukkan nilai kepuasan Anda",'0-100'));

switch(true){
    case (nilaiKepuasan >=90):
        document.write('Nilai Grade A')
        break
    case (nilaiKepuasan >=80):
        document.write('Nilai Grade B')
        break
    case (nilaiKepuasan >=70):
        document.write('Nilai Grade C')
        break
    case (nilaiKepuasan >=60):
        document.write('Nilai Grade D')
        break
    case (nilaiKepuasan >=50):
        document.write('Nilai Grade E')
        break
    default:
        document.write('masukkan angka yang sesuai')
} */

var nilaikepuasan = parseInt(prompt('masukan nilai anda', '0-100'));

switch (nilaikepuasan){
    case(nilaikepuasan>=90);
    document.write('nilai anda A')
    break
    case(nilaikepuasan>=80);
    document.write('nilai anda B')
    break
    case(nilaikepuasan>=70);
    document.write('nilai anda C')
    break
    case(nilaikepuasan>=60);
    document.write('nilai anda D')
    break
    case(nilaikepuasan>=50);
    document.write('nilai anda E')
    break
    default: document.write('Input salah cuy');
}