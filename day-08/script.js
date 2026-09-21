const kullanici = {
    ad : "eylül",
    yas : 23,
    mezunMu : true,
    hedef : "Full Stack Dev.",
    kendiniTanit : function (){
        console.log("isim: ", this.ad)
        console.log("hedef: ", this.hedef)
    }
   
}

console.log(kullanici)
console.log(kullanici.ad)
console.log(kullanici.hedef)
console.log(kullanici["yas"])
kullanici.hedef = "Full Stack Engineer"
kullanici.sehir = "İstanbul"
console.log(kullanici)
kullanici.kendiniTanit()

const ogrenciler = [
    { ad : "eylul", not : 60, gectiMi: true},
    { ad : "ece", not : 30, gectiMi: false},
    { ad : "elif", not: 90, gectiMi: true}
]

console.log(ogrenciler)
console.log(ogrenciler[1].ad)
console.log(ogrenciler[2].not)
 
ogrenciler.forEach(function(ogrenci){
    console.log(ogrenci.ad+ ": " + ogrenci.not)
})

const ogrenciAdlari = ogrenciler.map(function(ogrenci){
    return ogrenci.ad
})

console.log(ogrenciAdlari)

const gecenOgr = ogrenciler.filter(function(ogrenci){
    return ogrenci.gectiMi
})

console.log(gecenOgr)

const bulunanOgr = ogrenciler.find(function(ogrenci){
    return ogrenci.ad === "ece"
})

console.log(bulunanOgr)

const ogrList = document.getElementById("ogrList")

function ogrencileriGoster(liste){
    ogrList.innerHTML = "";

    liste.forEach(function(ogrenci){
    const ogrKarti = document.createElement("div")
    ogrKarti.classList.add("ogrenci-karti")
    const adBasligi = document.createElement("h3")
    adBasligi.textContent = ogrenci.ad
    const notBilgisi = document.createElement("p")
    notBilgisi.textContent = "Not: " + ogrenci.not
    const durumBilgisi = document.createElement("p")
    
    if(ogrenci.gectiMi){
        durumBilgisi.textContent = "Durum: Geçti"
        durumBilgisi.classList.add("gecti")
    } else {
        durumBilgisi.textContent = "Durum: Kaldı"
        durumBilgisi.classList.add("kaldi")
    }
    ogrKarti.appendChild(adBasligi)
    ogrKarti.appendChild(notBilgisi)
    ogrKarti.appendChild(durumBilgisi)
    ogrList.appendChild(ogrKarti)
})

}
const tumuButonu = document.getElementById("tumuButonu")
const gecenButonu = document.getElementById("gecenButonu")
const kalanButonu = document.getElementById("kalanButonu")

const kalanOgr = ogrenciler.filter(function(ogrenci){
    return !ogrenci.gectiMi
})

tumuButonu.addEventListener("click", function(){
    ogrencileriGoster(ogrenciler)
})

kalanButonu.addEventListener("click", function(){
    ogrencileriGoster(kalanOgr)
})

gecenButonu.addEventListener("click", function(){
    ogrencileriGoster(gecenOgr)
})

ogrencileriGoster(ogrenciler)