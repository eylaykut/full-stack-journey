const os = require("os")
const fs = require("fs")

fs.writeFileSync(
    "not.txt",
    "Node.js ile ilk dosyamı oluşturdum."
)

const notIcerigi = fs.readFileSync("not.txt", "utf-8")
console.log(`Dosyanın içeriği: ${notIcerigi}`)


const ad = "Eylülnaz";
const hedef = "Backend geliştirmeyi öğrenmek";

console.log(`Merhaba ${ad}! Hedefin: ${hedef}.`);

const byteToGB = (byte) => {
    return (byte / 1024 / 1024 / 1024).toFixed(2);
};


console.log(`işletim sistemi: ${os.platform()}`)
console.log(`bilgisayar mimarisi: ${os.arch()}`)
console.log(`toplam bellek: ${byteToGB(os.totalmem())} GB`)
console.log(`boş bellek: ${byteToGB(os.freemem())} GB`)


const girilenIsim = process.argv[2] || "Misafir";

console.log(`Merhaba ${girilenIsim}!`);