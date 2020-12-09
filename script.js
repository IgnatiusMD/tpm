console.log("Hello World");
// alert("Hello World");
document.write("Hello World");
document.getElementById("halodunia").innerHTML="Hello Dunia";
// Inner HTML kayak replace element gitu

var d = 1 //bisa diakses dimana saja
let b = 1 // harus diinisialisasi variabel dulu baru bisa akses
const e = 3

// var sama let itu sama, bedanya var itu variabel GLOBAL, kalo taro fungsinya dibawah, masih bisa dipanggil diatas
// let itu variabel LOCAL, kalo kita declare blakangan, atas gabisa pake..
// const itu variabel konstanta (CONSTANT)

b=2;
console.log(b);

// alert(); //muncul kotak diatas, muncul informasi
// prompt("siapa namamu?"); //dipake kalo butuh jawaban
// confirm("Are you sure?"); //dipake kayak "are you sure" gitu gitu

// d=1-1; // bisa + - / % *
// d="10"+1;
// d="10"*3;
// d="Halo";
// console.log(d);


var x=11;
// if(x===11){
//     console.log("Angka = 11");
// }else if(x<10){
//     console.log("Angka dibawah 10");
// }else{
//     console.log("Angka diatas 10");
// }
// == perbandingan value ; === perbandingan value dan tipe data
// if(x===11){
//     console.log("True");
// }else{
//     console.log("False");
// }
// switch(key){
//     case value:
//         break;
//     default:
//         break;
// }

function perbandingan(a){
    a===11?console.log("True"):console.log("False");
}
perbandingan(x);
x+=2;
x--;
console.log(x);

//          looping
// for(let i=0;i<10;i++){
//     console.log(i);
// }
// while(condition){ 
// }
// do{
// }while(condition);

// foreach
array=[1,2,3,4,5];
array.forEach(i => {
    console.log(i);
});

// arrow function - kayak function, modelnya pake arrow gitu
var m=()=>{
    console.log("ada");
}
// function asd(){
// } // yang kayak gini uda jarang dipake

avanza={
    merek : "toyota",
    tahun : 2005
};
console.log(avanza.merek)