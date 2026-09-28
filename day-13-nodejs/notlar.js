const fs = require("fs");

const [komut, not] = process.argv.slice(2);

if (komut === "ekle") {
    if (!not) {
        console.log("Lütfen eklenecek bir not yazınız.");
    } else {
        fs.appendFileSync("notlar.txt", `${not}\n`);
        console.log("Not eklendi.");
    }
} else if (komut === "listele") {
    if (fs.existsSync("notlar.txt")) {
        const notlar = fs.readFileSync("notlar.txt", "utf-8");

        if (notlar.trim() === "") {
            console.log("Henüz kayıtlı bir not bulunmuyor.");
        } else {
            console.log(`Notlar:\n${notlar}`);
        }
    } else {
        console.log("Henüz kayıtlı bir not bulunmuyor.");
    }
} else if (komut === "temizle") {
    if (fs.existsSync("notlar.txt")) {
        fs.writeFileSync("notlar.txt", "");
        console.log("Bütün notlar temizlendi.");
    } else {
        console.log("Temizlenecek bir not bulunmuyor.");
    }
} else if (komut === "say") {
    if (fs.existsSync("notlar.txt")) {
        const notlar = fs.readFileSync("notlar.txt", "utf-8");

        const notDizisi = notlar
            .split("\n")
            .filter((not) => not.trim() !== "");

        console.log(`Toplam not sayısı: ${notDizisi.length}`);
    } else {
        console.log("Toplam not sayısı: 0");
    }
} else {
    console.log(
        "Geçerli bir komut girin: ekle, listele veya temizle"
    );
}