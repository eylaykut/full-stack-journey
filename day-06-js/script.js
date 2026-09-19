console.log("javascript çalışıyor mu?");
const ad = "Eylülnaz Aykut";
let yas = 23;
const fullStackOgreniyorMu=true;

yas=yas+1;

console.log("Ad:", ad);
console.log("Yas:", yas);
console.log("Full Stack Öğreniyor mu?:", fullStackOgreniyorMu);

let sayi1=10;
let sayi2=20;
const toplam=sayi1+sayi2;
const fark = sayi1-sayi2;
const carpim = sayi1*sayi2;
const bolum = sayi1/sayi2;
const kalan = sayi1%sayi2;
console.log("Toplam:", toplam);
console.log("Fark:", fark);
console.log("Çarpım:", carpim);
console.log("Bölüm:", bolum);
console.log("Kalan:", kalan);
console.log("Yaş 18'den büyük mü?", yas>18);
console.log("Sayı1, sayı2'den büyük mü?", sayi1>sayi2);
console.log("sayi1 ile 10 birbirine eşit mi?:", sayi1===10);

if(yas>=18){
    console.log("Reşitsin");
} else {
    console.log("Reşit değilsin.");
}

let puan=73;
if(puan>=90){
    console.log("NOT: A");
}else if(puan>=70){
    console.log("not: b");
}else if(puan>=50){
    console.log("not:c");
}else{
    console.log("not:f");
}

const kullaniciAdi="admin";
let sifre=1234;
if(kullaniciAdi==="admin"&& sifre===1234){
    console.log("giriş başarılı");
} else{
    console.log("başarısız");
}

const rol ="editor";
if(rol==="editor" || rol==="admin"){
    console.log("yönetim paneline erişebilir");
} else{
    console.log("erişim reddedildi.");
}

const girisYapmisMi = false;
if(!girisYapmisMi){
    console.log("lütfen giriş yapınız");
}else{
    console.log("hoşgeldiniz");
}

function selamVer(isim){
    console.log("Merhaba", isim);
}
selamVer("Eylülnaz");

function kullaniciBilgisi(isim, yas){
    console.log("Kullanıcı:", isim, "Yaş:", yas);
}

kullaniciBilgisi("Eylülnaz", 23);

function topla(a,b){
    return a+b;
}

const sonuc = topla(10,5);
console.log(sonuc);

function carp(a,b){
    return a*b;
}

const carpimSonucu = carp(4,6);
console.log(carpimSonucu);

const teknolojiler = ["HTML", "CSS", "JavaScript"];
console.log(teknolojiler);
console.log(teknolojiler[0]);

teknolojiler.push("React");
console.log(teknolojiler);
console.log("Dizideki eleman sayısı:",teknolojiler.length);
console.log(teknolojiler[teknolojiler.length - 1]);

for(const teknoloji of teknolojiler){
    console.log(teknoloji);
}

for(let i=0; i < teknolojiler.length; i++){
    console.log(i+1+". ", teknolojiler[i]);
}

const notlar = [45, 50, 72, 90, 38];
for(const eleman of notlar){
    if(eleman>=50){
        console.log(eleman + ": geçti");
    } else{
        console.log(eleman+ ": kaldı");
    }
}

function notlariKontrolEt(notlar){
    let gecenSayisi=0;
    for(const eleman of notlar){
    if(eleman>=50){
        console.log(eleman + ": geçti");
        gecenSayisi++;
    } else{
        console.log(eleman+ ": kaldı");
    }
}
return gecenSayisi;
}
const notes=[24,57,85,12,90,56,44,32];
const toplamGecen = notlariKontrolEt(notes);
console.log("Geçen Kişi Sayısı:", toplamGecen);
const toplamKalan = notes.length - toplamGecen;
const basariOran = toplamGecen / notes.length *100;
console.log("Geçen:",toplamGecen);
console.log("Kalan:", toplamKalan);
console.log("Başarı Oranı:", basariOran);



const mesajAlani=document.getElementById("mesaj");
const buton=document.getElementById("mesajButonu");
console.log(mesajAlani);
console.log(buton);

buton.addEventListener("click", function(){
    console.log("butona tıklandı!");
    mesajAlani.classList.toggle("aktif");
    if(mesajAlani.classList.contains("aktif")){
        mesajAlani.textContent="değişti.";
    }else{
        mesajAlani.textContent="Butona henüz basılmadı";
    }
    
});

const sayacAlani = document.getElementById("sayac");
const artirButonu = document.getElementById("artirButonu");
let sayacDegeri = 0;

artirButonu.addEventListener("click", function(){
    sayacDegeri++;
    sayacAlani.textContent=sayacDegeri;
});

const azaltButonu = document.getElementById("azaltButonu");
const sifirButonu = document.getElementById("sifirButonu");

azaltButonu.addEventListener("click", function(){
    if(sayacDegeri>0){
        sayacDegeri = sayacDegeri-1;
        sayacAlani.textContent = sayacDegeri;
    }
});

sifirButonu.addEventListener("click", function(){
    sayacDegeri=0;
    sayacAlani.textContent=sayacDegeri;
});


const isimInput = document.getElementById("isimInput");
const selamButonu = document.getElementById("selamButonu");
const selamMesaji = document.getElementById("selamMesaji");


selamButonu.addEventListener("click", function(){
    const girilenIsim = isimInput.value.trim();
    if(girilenIsim===""){
        selamMesaji.textContent="Lütfen isim giriniz.";
    }else{
        selamMesaji.textContent = "Merhaba " +girilenIsim;
    } 
});


isimInput.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        selamButonu.click();
    }

});
