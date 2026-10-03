const fs = require("fs");
const path = require("path");

const dosyaYolu = path.join(__dirname, "../data/notlar.json");

function notlariOku() {
    const jsonMetni = fs.readFileSync(dosyaYolu, "utf-8");
    return JSON.parse(jsonMetni);
}

function notlariKaydet(notlar) {
    const jsonMetni = JSON.stringify(notlar, null, 2);
    fs.writeFileSync(dosyaYolu, jsonMetni, "utf-8");
}

function tumNotlariGetir(req, res) {
    const notlar = notlariOku();
    res.json(notlar);
}

function tekNotuGetir(req, res) {
    const id = Number(req.params.id);
    const notlar = notlariOku();

    const not = notlar.find(n => n.id === id);

    if (!not) {
        return res.status(404).json({
            error: "Not bulunamadı"
        });
    }

    res.json(not);
}

function notEkle(req, res) {
    const content = req.body.content;

    if (!content || content.trim() === "") {
        return res.status(400).json({
            error: "Content alanı boş olamaz"
        });
    }

    const notlar = notlariOku();

    const yeniNot = {
        id: Date.now(),
        content: content.trim(),
        isDone: false
    };

    notlar.push(yeniNot);
    notlariKaydet(notlar);

    res.status(201).json(yeniNot);
}

function notuGuncelle(req, res) {
    const id = Number(req.params.id);
    const isDone = req.body.isDone;

    if (typeof isDone !== "boolean") {
        return res.status(400).json({
            error: "isDone true veya false olmalıdır"
        });
    }

    const notlar = notlariOku();
    const not = notlar.find(n => n.id === id);

    if (!not) {
        return res.status(404).json({
            error: "Not bulunamadı"
        });
    }

    not.isDone = isDone;
    notlariKaydet(notlar);

    res.json(not);
}

function notuSil(req, res) {
    const id = Number(req.params.id);
    const notlar = notlariOku();

    const notIndex = notlar.findIndex(n => n.id === id);

    if (notIndex === -1) {
        return res.status(404).json({
            error: "Not bulunamadı"
        });
    }

    const silinenNot = notlar.splice(notIndex, 1)[0];

    notlariKaydet(notlar);

    res.json({
        mesaj: "Not silindi",
        not: silinenNot
    });
}

module.exports = {
    tumNotlariGetir,
    tekNotuGetir,
    notEkle,
    notuGuncelle,
    notuSil
};