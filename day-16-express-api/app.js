const express = require('express');
const app = express();
app.use(express.json()); //middleware, gelen requestin body kısmını json formatında parse ediyor

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); //bir sonraki middleware veya route handler'a geçmek için çağrılır
})
const port = 3000;

const notlar = [{
    id: 1,
    content: 'HTML is easy',
    isDone: true
},
{
    id: 2,
    content: 'Learn Express',
    isDone: false
}];

app.get('/', (req, res) => {
    res.send('Express sunucusu calisiyor.');
});

app.get(`/notlar`, (req, res) => {
    const durum = req.query.isDone;
    if(durum === undefined){
        return res.json(notlar); 
    }

    const isDone = durum === 'true'; //stringi booleana çeviriyor
    const filtrelenmisNotlar = notlar.filter(not => not.isDone === isDone);
    return res.json(filtrelenmisNotlar); //notlar?isdone=true veya notlar?isdone=false şeklinde filtreleme yapabiliyoruz
});

//response.setHeader("Content-Type", "application/json");
//response.end(JSON.stringify(notlar));

//express kullandığında bunlar yerine direkt: 
//res.json(notlar);


//notu idsi ile bulmak için
app.get(`/notlar/:id`, (req, res) => {
    const id = Number(req.params.id); //urlden idyi alıyor ve numbera çeviriyor
    const bulunanNot = notlar.find(not => not.id === id); //notlar dizisinden idsi eşleşen notu buluyor
    if (bulunanNot) {
        res.json(bulunanNot);
    } else {
        res.status(404).json({ error: 'Not bulunamadı' });
    }
});



app.post('/notlar', (req, res) => {
    const metin = req.body.content;
    if (!metin || metin.trim() === '') {
        return res.status(400).json({ error: 'Not içeriği boş olamaz' });
    }
    const yeniNot = {
        id: Date.now(), //benzersiz id oluşturmak için timestamp kullanıyoruz
        content: metin.trim(),
        isDone: false
    };
    notlar.push(yeniNot);
    res.status(201).json(yeniNot); // 201 status code, resource created anlamına gelir yeni kayıt oluşturulduğunda kullanılır
})


app.patch('/notlar/:id', (req, res) => {
    const id = Number(req.params.id);
    const bulunanNot = notlar.find(not => not.id === id);
    if (!bulunanNot) {
        return res.status(404).json({ error: 'Not bulunamadı' });
    }
    if(typeof req.body.isDone !== 'boolean'){
        return res.status(400).json({ error: 'isDone alanı boolean olmalıdır' });
    }
    bulunanNot.isDone = req.body.isDone;
    res.json(bulunanNot);
});


app.delete('/notlar/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = notlar.findIndex(not => not.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Not bulunamadı' });
    }
    const silinenNotlar= notlar.splice(index, 1) //splice metodu ile diziden silinen notu alıyoruz, silme işlemi yapılıyor
    const silinenNot = silinenNotlar[0]; //splice metodu bir dizi döndürdüğü için ilk elemanı alıyoruz
    res.json({
        mesaj: 'Not silindi',
        not: silinenNot
    });

});
app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
})
