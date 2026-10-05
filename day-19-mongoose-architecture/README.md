# Day 19 - Mongoose API Architecture

Bu çalışmada MongoDB ve Mongoose kullanan Notes REST API, daha düzenli ve sürdürülebilir bir klasör yapısına ayrıldı.

## Proje Yapısı

- `config/` - MongoDB bağlantısı
- `models/` - Mongoose Schema ve Model
- `controllers/` - CRUD işlemleri
- `routes/` - API adresleri
- `app.js` - Uygulamanın başlangıç dosyası

## API Endpointleri

- `POST /notes` - Not oluşturur
- `GET /notes` - Bütün notları getirir
- `GET /notes/:id` - Tek notu getirir
- `PATCH /notes/:id` - Notu günceller
- `DELETE /notes/:id` - Notu siler

## Öğrendiklerim

- Route, Controller, Model ve Config ayrımı
- Dosyalar arasında `module.exports` ve `require()` kullanımı
- MongoDB bağlantısını ayrı dosyada yönetme
- Mongoose CRUD işlemlerini controller içerisinde kullanma
- `npm start` scripti oluşturma