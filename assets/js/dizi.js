//Tek boyutlu diziler

// var isimler=["Erhan","Adem","Şeyma","Süheyla"];
// var yillar=[1990,1980,1960];
// //0 dan başlar n-1
// var isim="Erhan"

// alert(isim);
// alert(isimler);//dizinin obje değerini çağırma
// alert(isimler[3]);//index numarasıyla değer çağırma
// alert(isimler[1]);
// isimler[1]="Yasin";//Adem değerini Yasin ile değiştirme (Değer atama)
// alert(isimler[1]);

// alert(isimler.length)

// let yazi=document.getElementById("yazi");
// for(let i=0;i<isimler.length;i++){//dizi elemanlarını dizinin boyutuna göre döndürüp
//                                   //dönen dizi elemanlarını index numaraları ile html'e gönderiyoruz
//     yazi.innerHTML+=isimler[i]+"<br>";
// }

    //Dizi oluşturma

let isimler = ["Erhan", "Furkan", "Dilara", "Gülsüm"];
let sehirler = new Array("İstanbul", "Ankara", "İzmir");

     //diziye eleman ekleme

// yazi.innerHTML+=isimler+"<br>";
// yazi.innerHTML+="------------------------<br>"

// isimler.push("Azra");//Diziye ekleme yapma

// yazi.innerHTML+=isimler+"<br>";
// yazi.innerHTML+="------------------------<br>"

// isimler.pop();// Diziden son elemanı silme
// yazi.innerHTML+=isimler+"<br>";
// yazi.innerHTML+="------------------------<br>"

// isimler.shift();//Dizinin ilk elemanını siler
// yazi.innerHTML+=isimler+"<br>";
// yazi.innerHTML+="------------------------<br>"

// isimler.unshift("Erhan", "Emrullah");
// yazi.innerHTML += isimler + "<br>";
// yazi.innerHTML += "------------------------<br>"

// let yeniIsimler = isimler.slice(2, 4);

// yazi.innerHTML += yeniIsimler + "<br>";
// yazi.innerHTML += "------------------------<br>"

// let gidenIsimler = isimler.splice(1, 3);

// yazi.innerHTML += isimler + "<br>";
// yazi.innerHTML += "------------------------<br>"

// let sehir = prompt("Şehir Adı Giriniz");
// // let sonuc=sehirler.IndexOf(sehir); ilk eşleşen değerin indexini verir
// // let sonuc = sehirler.indexOf(sehir); son eşleşen değerin indexini verir.
// alert(sonuc=-1?"Şehir Bukunamadı":sonuc);

// LİSTEYİ TERSTEN YAZDIR

// alert(sehirler);
// alert(sehirler.reverse())

// alfabetik sıralama
// alert(sehirler.sort())
// alert(sehirler.reverse)


sehirler.splice(1, 0, "Antalya");
alert(sehirler);

sehirler[3]="Malatya";
alert(sehirler);

























// 