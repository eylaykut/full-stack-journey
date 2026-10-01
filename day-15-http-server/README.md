# Day 15 – Node.js HTTP Server

Node.js'in yerleşik `http` modülü kullanılarak temel bir HTTP sunucusu ve JSON API oluşturuldu.

## Öğrenilenler

- İstemci, sunucu, request ve response kavramları
- `http.createServer()` ile sunucu oluşturma
- `server.listen()` ile port dinleme
- `request.url` ve `request.method`
- Route ve endpoint oluşturma
- JSON cevabı gönderme
- `Content-Type` başlığı
- `200` ve `404` durum kodları
- `npm start` komutu

## API Adresleri

- `GET /` – Ana sayfa
- `GET /hakkimda` – Hakkımda
- `GET /notlar` – Not listesini JSON olarak döndürür
- Bilinmeyen adresler – `404` hatası

## Çalıştırma

```bash
npm start

