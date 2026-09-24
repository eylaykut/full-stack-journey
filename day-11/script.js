const fiyatSiniri = document.getElementById("fiyatSiniri")
const filtreleButonu = document.getElementById("filtreleButonu")
const tumunuGosterButonu = document.getElementById("tumunuGosterButonu")
const urunListesi = document.getElementById("urunListesi")



const urunler = [{ ad: "mouse", fiyat: 500, stoktaVarMi: false },
{ ad: "klavye", fiyat: 1400, stoktaVarMi: true },
{ ad: "defter", fiyat: 100, stoktaVarMi: true },
{ ad: "masa lambası", fiyat: 350, stoktaVarMi: true }
]

function urunleriListele(liste) {
    liste.forEach(function (urun) {
        console.log(urun.ad + " - " + urun.fiyat + " TL")
    })
}

urunleriListele(urunler)

const stoktakiUrunler = urunler.filter(function (urun) {
    return urun.stoktaVarMi;
});

console.log(stoktakiUrunler);

urunleriListele(stoktakiUrunler);

const urunAdlari = urunler.map(function (urun) {
    return urun.ad
})
console.log(urunAdlari)

const pahaliUrun = urunler.find(function (urun) {
    return urun.fiyat > 1000
})

console.log(pahaliUrun)

const bulunanUrun = urunler.find(function (urun) {
    return urun.fiyat > 2000
})
if (bulunanUrun) {
    console.log(bulunanUrun.ad)
} else {
    console.log("Bu fiyat aralığında ürün bulunamadı")
}


function toplamFiyatHesapla(liste) {

    let toplam = 0;
    liste.forEach(function (urun) {
        toplam = urun.fiyat + toplam
    })

    return toplam

}

const toplamFiyat = toplamFiyatHesapla(urunler);
console.log("Toplam fiyat:", toplamFiyat + " TL");

function urunleriEkrandaGoster(liste) {
    urunListesi.innerHTML = ""
    if (liste.length === 0) {
        urunListesi.textContent = "Bu fiyat aralığında ürün bulunamadı.";
        return;
    }
    liste.forEach(function (urun) {
        const urunKarti = document.createElement("div")
        urunKarti.classList.add("urun-karti")
        const urunAdi = document.createElement("h3")
        const urunFiyati = document.createElement("p")
        urunAdi.textContent = urun.ad
        urunFiyati.textContent = "Fiyat: " + urun.fiyat + " TL"
        const stokBilgisi = document.createElement("p")
        if (urun.stoktaVarMi) {
            stokBilgisi.textContent = "Stokta var";
            stokBilgisi.classList.add("stokta");
        } else {
            stokBilgisi.textContent = "Stokta yok";
            stokBilgisi.classList.add("stokta-yok");
        }

        urunKarti.appendChild(urunAdi)
        urunKarti.appendChild(urunFiyati)
        urunKarti.appendChild(stokBilgisi);
        urunListesi.appendChild(urunKarti)
    })

}

urunleriEkrandaGoster(urunler)

filtreleButonu.addEventListener("click", function () {
    const maxFiyat = Number(fiyatSiniri.value)

    if (maxFiyat <= 0) {
        alert("Lütfen geçerli bir değer giriniz.")
        return
    }

    const filtrelenmisUrunler = urunler.filter(function (urun) {
        return urun.fiyat <= maxFiyat

    })

    urunleriEkrandaGoster(filtrelenmisUrunler)
})


tumunuGosterButonu.addEventListener("click", function () {
    urunleriEkrandaGoster(urunler)
    fiyatSiniri.value = ""
})

fiyatSiniri.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        filtreleButonu.click();
    }
});