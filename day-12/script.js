const basvuruFormu =
    document.getElementById("basvuruFormu");

const sirketAdiInput =
    document.getElementById("sirketAdi");

const pozisyonInput =
    document.getElementById("pozisyon");

const basvuruTarihiInput =
    document.getElementById("basvuruTarihi");

const basvuruDurumuSelect =
    document.getElementById("basvuruDurumu");

const durumFiltresiSelect =
    document.getElementById("durumFiltresi");

const basvuruListesi =
    document.getElementById("basvuruListesi");

const toplamBasvuru =
    document.getElementById("toplamBasvuru");

const mulakatSayisi =
    document.getElementById("mulakatSayisi");

const teklifSayisi =
    document.getElementById("teklifSayisi");


let basvurular =
    JSON.parse(localStorage.getItem("basvurular")) || [];


const durumMetinleri = {
    basvuruldu: "Başvuruldu",
    mulakat: "Mülakat",
    olumsuz: "Olumsuz",
    teklif: "Teklif"
};


basvuruFormu.addEventListener("submit", function (event) {
    event.preventDefault();

    const sirketAdi = sirketAdiInput.value.trim();
    const pozisyon = pozisyonInput.value.trim();
    const tarih = basvuruTarihiInput.value;
    const durum = basvuruDurumuSelect.value;

    if (
        sirketAdi === "" ||
        pozisyon === "" ||
        tarih === "" ||
        durum === ""
    ) {
        alert("Lütfen bütün alanları doldurunuz.");
        return;
    }

    const yeniBasvuru = {
        id: Date.now(),
        sirketAdi: sirketAdi,
        pozisyon: pozisyon,
        tarih: tarih,
        durum: durum
    };

    basvurular.push(yeniBasvuru);

    basvurulariKaydet();
    filtreyiUygula();
    ozetiGuncelle();

    basvuruFormu.reset();
    sirketAdiInput.focus();
});


function basvurulariKaydet() {
    localStorage.setItem(
        "basvurular",
        JSON.stringify(basvurular)
    );
}


function basvurulariGoster(liste) {
    basvuruListesi.innerHTML = "";

    if (liste.length === 0) {
        basvuruListesi.textContent =
            "Bu durumda kayıtlı başvuru bulunmuyor.";
        return;
    }

    liste.forEach(function (basvuru) {
        const kart = document.createElement("article");
        const sirketBasligi = document.createElement("h3");
        const pozisyonBilgisi = document.createElement("p");
        const tarihBilgisi = document.createElement("p");
        const durumBilgisi = document.createElement("p");
        const silButonu = document.createElement("button");

        kart.classList.add("basvuru-karti");
        kart.classList.add("durum-" + basvuru.durum);

        sirketBasligi.textContent =
            "Şirket adı: " + basvuru.sirketAdi;

        pozisyonBilgisi.textContent =
            "Pozisyon: " + basvuru.pozisyon;

        tarihBilgisi.textContent =
            "Tarih: " + basvuru.tarih;

        durumBilgisi.textContent =
            "Durum: " + durumMetinleri[basvuru.durum];

        silButonu.textContent = "Sil";
        silButonu.classList.add("sil-butonu");

        silButonu.addEventListener("click", function () {
            const silmeOnayi = confirm(
                basvuru.sirketAdi +
                " başvurusunu silmek istediğinize emin misiniz?"
            );

            if (!silmeOnayi) {
                return;
            }

            basvurular = basvurular.filter(function (eleman) {
                return eleman.id !== basvuru.id;
            });

            basvurulariKaydet();
            filtreyiUygula();
            ozetiGuncelle();
        });

        kart.appendChild(sirketBasligi);
        kart.appendChild(pozisyonBilgisi);
        kart.appendChild(tarihBilgisi);
        kart.appendChild(durumBilgisi);
        kart.appendChild(silButonu);

        basvuruListesi.appendChild(kart);
    });
}


function ozetiGuncelle() {
    const mulakatlar = basvurular.filter(function (basvuru) {
        return basvuru.durum === "mulakat";
    });

    const teklifler = basvurular.filter(function (basvuru) {
        return basvuru.durum === "teklif";
    });

    toplamBasvuru.textContent =
        "Toplam: " + basvurular.length;

    mulakatSayisi.textContent =
        "Mülakat: " + mulakatlar.length;

    teklifSayisi.textContent =
        "Teklif: " + teklifler.length;
}


function filtreyiUygula() {
    const secilenDurum = durumFiltresiSelect.value;

    if (secilenDurum === "tumu") {
        basvurulariGoster(basvurular);
        return;
    }

    const filtrelenmisBasvurular =
        basvurular.filter(function (basvuru) {
            return basvuru.durum === secilenDurum;
        });

    basvurulariGoster(filtrelenmisBasvurular);
}


durumFiltresiSelect.addEventListener(
    "change",
    function () {
        filtreyiUygula();
    }
);


filtreyiUygula();
ozetiGuncelle();