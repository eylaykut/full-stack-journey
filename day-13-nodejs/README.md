# Day 13 – Node.js Temelleri

Bu çalışmada JavaScript’i tarayıcı dışında çalıştırmayı ve terminal üzerinden kullanılan basit bir not uygulaması geliştirmeyi öğrendim.

## Öğrendiğim Konular

- Node.js ve npm kullanımı
- `package.json` oluşturma
- npm script’leri
- CommonJS ve `require()`
- `os` modülü
- `fs` modülü
- Dosya oluşturma, okuma ve güncelleme
- `process.argv` ile terminalden veri alma
- Terminal komutlarını kontrol etme

## Kullanılan Komutlar

Projeyi çalıştırmak:

```powershell
npm start
```

Not eklemek:

```powershell
node notlar.js ekle "Node.js çalış"
```

Notları listelemek:

```powershell
node notlar.js listele
```

## Uygulamanın Özellikleri

- Terminalden not ekleme
- Notları `notlar.txt` dosyasında saklama
- Kayıtlı notları listeleme
- Eksik veya geçersiz komutları kontrol etme
- Dosyanın var olup olmadığını kontrol etme

## Dosyalar

- `app.js` – Node.js temel çalışmaları
- `notlar.js` – Terminal not uygulaması
- `notlar.txt` – Kaydedilen notlar
- `package.json` – Proje bilgileri ve npm komutları