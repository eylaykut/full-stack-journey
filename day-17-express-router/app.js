const express = require('express');
const notlarRouter = require('./routes/notlar'); //notlar.js dosyasını dahil ettik

const app = express();
const PORT = 3000;

app.use(express.json()); //json formatında veri alabilmek için express.json() middleware'ini ekledik
app.use('/notlar', notlarRouter); //notlar.js dosyasındaki router'ı /notlar path'ine yönlendirdik, yani /notlar ile başlayan istekleri notlarRouter yönetecek

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});