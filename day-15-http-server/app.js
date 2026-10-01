const http = require("http");

const notlar = [
    {
        id: 1,
        metin: "Node.js çalış",
        tamamlandiMi: true
    },
    {
        id: 2,
        metin: "HTTP öğren",
        tamamlandiMi: false
    }
];

const server = http.createServer(function (request, response) {
    console.log("İstek adresi:", request.url);
    console.log("İstek metodu:", request.method)
    if (request.url === "/") {
        response.end("Ana sayfaya hos geldiniz.");
    } else if (request.url === "/hakkimda") {
        response.end("Ben Eylulnaz, Full Stack Developer olmayi ogreniyorum.");
    } else if (request.url === "/notlar" && request.method === "GET") {

        response.statusCode = 200
        response.setHeader(
            "Content-Type",
            "application/json; charset=utf-8"
        );

        response.end(JSON.stringify(notlar));
    } else {
        response.statusCode = 404;

        response.setHeader(
            "Content-Type",
            "application/json; charset=utf-8"
        );

        const hataCevabi = {
            hata: "Bu adres bulunamadı."
        };
        response.end(JSON.stringify(hataCevabi));
    }
});

server.listen(3000, function () {
    console.log("sunucu http://localhost:3000 adresinde çalışıyor.")
})