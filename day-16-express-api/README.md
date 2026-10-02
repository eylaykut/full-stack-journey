# Day 16 – Express Notes API

Express.js kullanılarak temel CRUD işlemlerine sahip bir not API'si geliştirildi.

## Öğrenilenler

- Express kurulumu ve sunucu oluşturma
- Route ve endpoint mantığı
- `req.params`, `req.query` ve `req.body`
- Middleware ve `next()`
- JSON verisi alma ve gönderme
- HTTP metotları ve durum kodları
- `node_modules` ve `.gitignore`

## Endpointler

- `GET /notlar` – Notları listeler
- `GET /notlar/:id` – ID ile not getirir
- `POST /notlar` – Yeni not oluşturur
- `PATCH /notlar/:id` – Not durumunu günceller
- `DELETE /notlar/:id` – Notu siler

## Çalıştırma

```bash
npm install
npm start