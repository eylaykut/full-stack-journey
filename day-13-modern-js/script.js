import { topla as ikiSayiyiTopla } from "./utils.js";

console.log("Modülden gelen sonuç: " + ikiSayiyiTopla(10, 5));

const ad = "eylül"
const yas = 23
const hedef = "Full Stack Developer olmak"

console.log(`Ben ${ad}, ${yas} yaşındayım ve hedefim ${hedef}`);

const sayi1 = 10;
const sayi2 = 5;

console.log(`toplam: ${sayi1 + sayi2}`)

const teknolojiler = ["HTML", "CSS", "JavaScript"];

console.log(`Şu anda ${teknolojiler.length} teknoloji biliyorum. Son öğrendiğim teknoloji ${teknolojiler[teknolojiler.length - 1]} `)

const selamVer = (isim) => {
    return `Merhaba ${isim}`;
}

console.log(selamVer("eylülnaz"))

const sayilar = [2, 4, 6]

const ikiKati = sayilar.map((sayi) => sayi*2 )

const fiyatlar = [100, 250, 400, 750]

const zamliFiyat = fiyatlar.map((sayi) => sayi*1.20)

console.log(zamliFiyat)


const urun = {
    urunAdi: "Klavye",
    fiyat: 1400,
    stoktaVarMi: true
};

const { urunAdi, fiyat, stoktaVarMi } = urun;

console.log(`${urunAdi} ürününün fiyatı ${fiyat} TL. Stok durumu: ${stoktaVarMi}`)

const renkler = ["Kırmızı", "Mavi", "Yeşil", "Sarı"];

const [birinciRenk, , ucuncuRenk] = renkler;

console.log(`Birinci renk ${birinciRenk}, üçüncü renk ${ucuncuRenk}`)

const temel = ["HTML", "CSS"];
const modern = ["JavaScript", "React"];

const tumTek = [...temel, ...modern, "Node.js"]

console.log(tumTek)

const profil = {
    ad: "Eylülnaz",
    hedef: "Frontend Developer"
};

const guncelProfil = {
    ...profil,
    hedef: "Full Stack Developer",
    sehir: "İstanbul"
}

console.log(guncelProfil)

const topla = (...sayilar) => sayilar.reduce((biriken, sayi) => biriken+sayi ,0)


console.log(topla(10,20,30,40))


const harcamalar = [
    { ad: "Market", tutar: 750 },
    { ad: "Ulaşım", tutar: 200 },
    { ad: "Kahve", tutar: 100 }
];

const {harcamaAdi, harcamaTutari} = harcamalar

const toplamHarcama = harcamalar.reduce((toplam, harcama) =>{
    return toplam + harcama.tutar
}, 0)

console.log(`Toplam harcama: ${toplamHarcama} TL`)


const kurs = {
    ad: "Modern JavaScript",
    sure: 6,
    tamamlandiMi: false
};

const kursBilgisi = ({ad, sure}) =>  `${ad} kursu ${sure} saat sürüyor`


console.log(kursBilgisi(kurs))

const profilOlustur = (isim="İsimsiz Kullanıcı", rol = "Öğrenci") => `Kullanıcı ${isim} | Rol: ${rol}`

console.log(profilOlustur("Eylülnaz", "Developer"))
console.log(profilOlustur())



try {
    const veri = JSON.parse('{"ad":"Eylülnaz"}');
    console.log(veri);
} catch (error) {
    console.log("Veri okunamadı:", error.message);
}


try {
    const veri = JSON.parse("hatalı veri");
    console.log(veri);
} catch (error) {
    console.log("Veri okunamadı:", error.message);
}

console.log("Program çalışmaya devam ediyor.");

const bol = (a, b) => {
    if (b === 0) {
        throw new Error("Bir sayı sıfıra bölünemez.");
    }

    return a / b;
};

try {
    const sonuc = bol(10, 2);
    console.log(`Sonuç: ${sonuc}`);
} catch (error) {
    console.log(`Hata: ${error.message}`);
}

try {
    const sonuc = bol(10, 0);
    console.log(`Sonuç: ${sonuc}`);
} catch (error) {
    console.log(`Hata: ${error.message}`);
}