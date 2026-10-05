# Day 19 - REST API Tekrarı

Bugün REST API yapısını genel olarak tekrar ettim.

## Öğrendiklerim

- Frontend, Backend API ve MongoDB arasındaki veri akışı
- REST ve RESTful kavramları
- Request ve response yapısı
- HTTP metotları:
  - GET: Veri getirir
  - POST: Yeni veri oluşturur
  - PATCH: Verinin bir kısmını günceller
  - PUT: Verinin tamamını değiştirir
  - DELETE: Veriyi siler
- Params, query ve body arasındaki fark
- HTTP status kodları
- Header ve Content-Type kullanımı
- Stateless çalışma mantığı
- RESTful URL isimlendirme kuralları

## Örnek Endpointler

```text
GET    /notes
POST   /notes
GET    /notes/:id
PATCH  /notes/:id
DELETE /notes/:id
GET    /notes?isDone=true