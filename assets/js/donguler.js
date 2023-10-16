// FOR DÖNGÜSÜ
// fordan hemen sonraki parantezinizin içinde şart olması gerek


// 1'den 5!e kadar yazdırma yöntemleri
// for (let i = 0; i < 5; i++) {
//     alert("Hello World")
// }

// for (let i = 0; i <= 5; i++) {
//     alert(i + "Hello World")
// }


// for (let i = 1; i < 6; i++) {
//     alert(i + "Hello World")
// }

// for (let i = 1; i <= 5; i++) {
//     alert((i + 1) + "Hello World")
// }



// i değerinin başlangıç değeri verilir
// i değerinin 5 ten küçük olma durumu kontrol edilir
// i değeri 5 ten küçük ise scope içerisindeki kodlar çalışır
// kodlar bittikten sonra i değeri 1 artar (i++) [eğer ikişer ikişer arttırmak istersen i+=2]
// i değeri 5 ten küçük mü diye kontrol eder küçükse kod tekrar çalışır.
// i değeri artar 5 ten küçük değilse döngü biter. (break)

// HTML HTML HTML


// let yazi = document.getElementById("yazi")

// for (let i = 0; i < 10; i++) {
// yazi.innerHTML+= (i) + " Javascript <br>";
// }

// let alertText=""
// for(let i=0; i<5;i++){
//     alertText+="Javascript \n";
// }
// alert(alertText);


// -----------------------------

// for(let i=10; i>0; i--){
//     yazi.innerHTML+=i+" Merhaba <br>";}

// ÇİFT SAYILARI VERMEK İÇİN

// for(let i=10;i>0;i--)
// {
//     if(i%2!=0)
//     {
//         yazi.innerHTML+=i+"<br>";
//     }
// }

// ------------------------------------------

// for(let i=0; i<20;i++){
//     if(i%2==0)
//     {
//         continue; //şart sağlandığında eğer devanımında kod varsa bunları es geçer,
//         // for döngüsü bu adımı atlayarak i arttırır ve kaldığı yerden devam eder.
//     }
//     yazi.innerHTML+=i+"<br>";
// }


// ------------------------------------------

// for (let i=0;i<20;i++)
// {
//     if(i==11)
// {
//     break;
// }
// yazi.innerHTML+=i+"<br>";}

// ------------------------------------------


// for ( let i = 0; i < 100; i++)
// {
//     let sayi = prompt(`Sayı Giriniz (Son Durum = ${sonuc}))\n Çıkış için 'Exit' yazınız.`);
//     if(sayi=="Exit"){
//         sonuc+=Number(sayi);
//     }
// sonuc+=Number(sayi);
// }

// ------------------------------------------






















// 