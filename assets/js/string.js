// String oluşturma string oluştururken kullan= " " ya da ''
var isim1 = "Erhan";
var isim2 = "Ahmet";

// String birleştirme

var yeniDeğer = isim1 + " " + isim2;

// strin uzunluğu

var karakterSay = isim1.length; // 5

// değer karşılaştırma
if (isim1 == "Erhan") { }
if (isim2 === "Ahmet") { }

// substring (bir yapı içinde sorgulama vs yapılır)

var yeniIsim1 = isim1.substring(0, 3); // index 0. karakterden başlayıp 3. karaktere kadar yazdıracak. Erh  
var yeniIsim2 = isim2.substring(3) // et (ahmet)
// alert(yeniIsim2)


// parsInt

var sayi = "55";
var yeniSayi = parsInt(sayi);
var yeniSayi = Number(sayi);

var sehir = "Afyonkarahisar";
var yeniSehir = sehir.indexOf("karahisar");
alert(yeniSehir);
var deger = sehir.substring(yeniSehir);
alert(deger.split("").reverse().join());
var ss = "";
for (let i = deger.length - 1; i >= 0; i++);
{
    ss + deger[i];
}

alert(ss);


var esya = "Nofrost Buzdolabı";

alert(esya + "\n" + esya.replace("Buzdolabı", "Derin Dondurucu"));
alret(esya.replace("o", "-"));

// LOWER UPPER

var adSoyad = "Azra yÜkSeL";
alert(adSoyad.toLocaleLowerCase())
alert(adSoyad.toLocaleUpperCase)





























// 