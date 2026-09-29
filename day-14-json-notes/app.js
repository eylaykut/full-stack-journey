const fs = require("fs");

const jsonMetni = fs.readFileSync("notlar.json", "utf-8");
const notlar = JSON.parse(jsonMetni);

function notlariKaydet(liste) {
    const jsonMetni = JSON.stringify(liste, null, 2);
    fs.writeFileSync("notlar.json", jsonMetni);
}

const [komut, ...metinParcalari] = process.argv.slice(2)
const metin = metinParcalari.join(" ").trim()

if (komut === "ekle") {
    if (metin === "") {
        console.log("Lütfen eklenecek bir metin yazınız.")
    } else {
        const yeniNot = {
            id: Date.now(),
            metin: metin,
            tamamlandiMi: false
        }

        notlar.push(yeniNot)

        notlariKaydet()

        console.log("Not kaydedildi.")

    }
} else if (komut === "listele") {
    if (notlar.length === 0) {
        console.log("Henüz kayıtlı bir not bulunmuyor.")
    } else {
        console.log("Notlar: ")

        notlar.forEach((not) => {
            const durum = not.tamamlandiMi ? "Tamamlandı" : "Bekliyor"

            console.log(`ID: ${not.id} | ${not.metin} | ${durum}`)
        })
    }
} else if (komut === "tamamla") {
    const id = Number(metin)

    const bulunanNot = notlar.find((not) => {
        return not.id === id
    })

    if (!bulunanNot) {
        console.log("Bu ID ile eşleşen bir not bulunamadı.");
    } else {
        bulunanNot.tamamlandiMi = true;
        notlariKaydet()

        console.log("Not tamamlandı olarak işaretlendi.")
    }
} else if (komut === "sil") {
    const id = Number(metin)

    const kalanNotlar = notlar.filter((not) => {
        return not.id !== id
    })

    if (kalanNotlar.length === notlar.length) {
        console.log("Bu ID ile eşleşen bir not bulunamadı.")
    } else {
        notlariKaydet()
        console.log("Not silindi")
    }
} else {
    console.log("Geçerli bir komut giriniz:");
    console.log("ekle, listele, tamamla veya sil");
}



