# Day 18 - MongoDB ve Mongoose

Bu çalışmada Express API, MongoDB Atlas veritabanına Mongoose kullanılarak bağlandı.

## Öğrendiklerim

- MongoDB Atlas üzerinde cluster oluşturma
- `.env` ile bağlantı bilgilerini gizleme
- Mongoose ile MongoDB bağlantısı kurma
- Schema ve Model oluşturma
- MongoDB üzerinde CRUD işlemleri
- `find`, `findById`, `findByIdAndUpdate` ve `findByIdAndDelete`
- `async/await` ile veritabanı işlemlerini yönetme

## API Endpointleri

- `POST /notes` - Not oluşturur
- `GET /notes` - Bütün notları getirir
- `GET /notes/:id` - Tek notu getirir
- `PATCH /notes/:id` - Notu günceller
- `DELETE /notes/:id` - Notu siler

## Güvenlik

MongoDB bağlantı bilgilerini içeren `.env` dosyası GitHub'a gönderilmez.