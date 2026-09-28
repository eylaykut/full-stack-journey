const fs = require("fs")

const [komut, not] = process.argv.slice(2)

if (komut === "ekle") {
    if (!not) {
        console.log("Lütfen eklenecek bir not yazınız.")
    } else {
        fs.appendFileSync("notlar.txt", `${not}\n`);
        console.log("Not eklendi.");
    }

} else if (komut === "listele") {
    if (fs.existsSync("notlar.txt")) {
        const notlar = fs.readFileSync("notlar.txt", "utf-8")
        console.log(`Notlar: \n ${notlar}`)
    } else {
        console.log("Henüz kayıtlı bir not bulunmuyor.")
    }

} else{
    console.log("Geçerli bir komut girin: ekle veya lsitele")
}
