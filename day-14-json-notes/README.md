# Day 14 – JSON Notes CLI

Node.js ve JSON kullanılarak terminal üzerinden çalışan bir not uygulaması geliştirildi.

## Öğrenilenler

- JSON verisini okuma ve yazma
- `JSON.parse()` ve `JSON.stringify()`
- `fs.readFileSync()` ve `fs.writeFileSync()`
- Terminal argümanlarını `process.argv` ile alma
- `find()`, `filter()` ve `forEach()` kullanımı
- Fonksiyonla tekrar eden kodları azaltma

## Komutlar

```bash
node app.js ekle "Node.js çalış"
node app.js listele
node app.js tamamla NOT_ID
node app.js sil NOT_ID