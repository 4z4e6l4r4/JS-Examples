

// let baslikEkle=()=>{
//     const baslikYazisi=document.getElementById("baslikYazisi").value;
//     const baslikBoyutu=document.getElementById("baslikBoyutu").value;
//     const baslikClass=document.getElementById("baslikClass").value;

//     let baslik='<'+baslikBoyutu+' class="'+baslikClass+'">'+
//                 baslikYazisi+'</'+baslikBoyutu+'>';
//     try{
//         content.innerHTML+=baslik;
//         alert("Başlık Ekleme Başarılı")  
//     }
//     catch(hata){
//         alert("Beklenmedik Bir Hata Oluştu.\n"+hata.name+": "+hata.Message)
//     }

// }
// let paragrafEkle=()=>{
//     const paragrafYazisi=document.getElementById("paragrafYazisi").value;
//     const paragrafFontu=document.getElementById("paragrafFontu").value;
//     const paragrafClass=document.getElementById("paragrafClass").value;

//     let paragraf='<p class="'+paragrafClass+'" style="font-size:'+paragrafFontu+'px">'+paragrafYazisi+'</p>';

//     content.innerHTML+=paragraf;
//     alert("Paragraf Ekleme Başarılı")  

// }
// let linkEkle=()=>{
//     const linkYazisi=document.getElementById("linkYazisi").value;
//     const linkYolu=document.getElementById("linkYolu").value;
//     const linkClass=document.getElementById("linkClass").value;

//     let link='<a class="'+linkClass+'" href="'+linkYolu+'" target="_blank">'+linkYazisi+'</a>';
//     content.innerHTML+=link;
//     alert("Link Ekleme Başarılı")  

// }
// let inputEkle=()=>{
//     const inputYazisi=document.getElementById("inputYazisi").value;
//     const inputType=document.getElementById("inputType").value;
//     const inputClass=document.getElementById("inputClass").value;
//     let input="";
//     switch(inputType){
//         case "textarea":
//             input='<textarea class="'+inputClass+'">'+inputYazisi+'</textarea>'
//             break;
//         case "password":
//         case "number":
//         case "text":
//             input='<input type="'+inputType+'" class="'+inputClass+'" placeholder="'+inputYazisi+'">';
//             break;
//         case "color":
//             input='<label>'+inputYazisi+'</label> <input type="'+inputType+'" class="'+inputClass+'">';
//             break;
//         case "submit":
//         case "button":
//             input='<input type="'+inputType+'" class="'+inputClass+'" value="'+inputYazisi+'">';
//             break;
//         case "radio":
//             let inputName=document.getElementById("inputName").value;
//             input='<label>'+inputYazisi+'</label><input type="'+inputType+'" class="'+inputClass+'" name="'+inputName+'"><br>';
//             break


//     }
//     input==""? alert("Tanımsız Input Türü") : alert("input ekleme başarılı");

//     content.innerHTML+=input;


// }

// const nameInput=document.getElementById("inputName");
// nameInput.style.display="none";

// let nameInputControl=(selected)=>{

//     let inputText=selected.options[selected.selectedIndex].textContent;
//     // if(inputText=="Radio"){
//     //     nameInput.style.display="block";
//     // }
//     // else{
//     //     nameInput.style.display="none";
//     // }

//     nameInput.style.display= inputText=="Radio"? "block" : "none";
// }



// for(let i=0;i<20;i++){

//     if(i%2==0){
//         continue;
//     }

//     content.innerHTML+=i+"<br>";
// }

//sonsuz döngü
// for(;true;){

// }
// alert("Toplama programına hoşgeldiniz.");
// let sayi;
// let sonuc=0;

// for(;true;){

//     sayi=prompt(`Sayı giriniz (Son Durum= ${sonuc}) \n Çıkış için exit yazınız.`);

//     if(sayi=="exit"){
//         break;
//     }
//     sonuc+=Number(sayi);
// }



// let listeEkle = () => {

//     const listeElemanSayisi = document.getElementById("listeElemanSayisi").value;
//     const listeClass = document.getElementById("listeClass").value;

//     let listeElemanlari = "";
//     for (let i = 0; i < listeElemanSayisi; i++) {

//         let eleman = prompt((i + 1) + ". Elemanı Giriniz");
//         if (eleman == "Exit" || eleman === null) {
//             break;
//         }

//         else if(eleman=="Adem"  || eleman=="Meryem"){

//         }

// if(eleman==""){
//     i--;
//     continue;
// }

//         listeElemanlari += `<li>${eleman}</li>`;
//     }

//     let liste = `<ul class"${listeClass}">${listeElemanlari}</ul>`;


//     content.innerHTML += liste;
//     alert("liste ekleme başarılı");

// }

// WHILE DÖNGÜSÜ (YAŞAM DÖNGÜSÜ)

// let i = 0;

// while (i < 5) {
//     alert("Merhaba JS")

//     if (i == 2) {
//         break;
//     }
//     i++;

//     alert("Erhan Kaya");

// }

// for(let i=0;i<5;i++){
//     alert("Merhaba JS")
// }


// DO WHILE

let i = 0;
// do {
//     alert("Merhaba");
//     i++;
// }

// while (i < 5);

while (i>5){
    alert("Merhaba");
    i++;
}
































// 