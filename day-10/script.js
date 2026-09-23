const spendings = document.getElementById("spendings");
const spendingNameInput = document.getElementById("spendingName");
const spendingTotalInput = document.getElementById("spendingTotal");
const harcamaListesi = document.getElementById("harcamaListesi");
const toplamTutarAlani = document.getElementById("toplamTutar");
const tumunuSilButonu = document.getElementById("tumunuSilButonu");

let harcamalar =
    JSON.parse(localStorage.getItem("harcamalar")) || [];

spendings.addEventListener("submit", function (event) {
    event.preventDefault();

    const spendingName = spendingNameInput.value.trim();
    const spendingTotal = Number(spendingTotalInput.value);

    if (spendingName === "" || spendingTotal <= 0) {
        alert("Lütfen geçerli bir harcama adı ve tutarı giriniz.");
        return;
    }

    const yeniHarcama = {
        id: Date.now(),
        ad: spendingName,
        tutar: spendingTotal
    };

    harcamalar.push(yeniHarcama);

    harcamalariKaydet();
    harcamalariGoster();
    toplamiGuncelle();

    spendingNameInput.value = "";
    spendingTotalInput.value = "";
    spendingNameInput.focus();
});

function harcamalariGoster() {
    harcamaListesi.innerHTML = "";

    harcamalar.forEach(function (harcama) {
        const listeElemani = document.createElement("li");

        listeElemani.textContent =
            harcama.ad + " - " + harcama.tutar + " TL";

        const silButonu = document.createElement("button");

        silButonu.textContent = "Sil";
        silButonu.classList.add("sil-butonu");

        silButonu.addEventListener("click", function () {
            harcamalar = harcamalar.filter(function (eleman) {
                return eleman.id !== harcama.id;
            });

            harcamalariKaydet();
            harcamalariGoster();
            toplamiGuncelle();
        });

        listeElemani.appendChild(silButonu);
        harcamaListesi.appendChild(listeElemani);
    });
}

function toplamiGuncelle() {
    let toplam = 0;

    harcamalar.forEach(function (harcama) {
        toplam = toplam + harcama.tutar;
    });

    toplamTutarAlani.textContent =
        "Toplam: " + toplam.toFixed(2) + " TL";
}

function harcamalariKaydet() {
    localStorage.setItem(
        "harcamalar",
        JSON.stringify(harcamalar)
    );
}

tumunuSilButonu.addEventListener("click", function () {
    if (harcamalar.length === 0) {
        alert("Silinecek harcama bulunmuyor.");
        return;
    }

    const silmeOnayi = confirm(
        "Bütün harcamaları silmek istediğinize emin misiniz?"
    );

    if (!silmeOnayi) {
        return;
    }

    harcamalar = [];

    harcamalariKaydet();
    harcamalariGoster();
    toplamiGuncelle();
});

harcamalariGoster();
toplamiGuncelle();