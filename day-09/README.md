# Day 09 - Local Storage, JSON ve API

Bu çalışmada tarayıcıda veri saklama, JavaScript nesnelerini JSON formatına dönüştürme ve bir API'den asenkron olarak veri alma konularını öğrendim.

## Öğrendiğim Konular

### Local Storage

- `localStorage.setItem()` ile veri kaydetme
- `localStorage.getItem()` ile kaydedilen veriyi okuma
- `localStorage.removeItem()` ile belirli bir veriyi silme
- Sayfa yenilendiğinde kayıtlı veriyi tekrar gösterme
- Local Storage'ın yalnızca metin sakladığını öğrenme
- Şifre gibi hassas bilgilerin Local Storage'da tutulmaması gerektiğini öğrenme

### JSON

- JavaScript nesnesi oluşturma
- `JSON.stringify()` ile nesneyi JSON biçimindeki metne dönüştürme
- `JSON.parse()` ile JSON metnini tekrar JavaScript nesnesine dönüştürme
- Birden fazla bilgiyi tek bir kullanıcı nesnesi olarak saklama

### API ve Fetch

- API kavramının temel mantığını öğrenme
- `fetch()` ile bir API'ye HTTP isteği gönderme
- Promise yapısının temelini öğrenme
- `.then()` ile API cevabını işleme
- `.catch()` ile oluşan hataları yakalama
- `response.ok` ile HTTP cevabının başarılı olup olmadığını kontrol etme
- API'den gelen kullanıcı verilerini sayfada gösterme

### Async/Await

- `async` fonksiyon oluşturma
- `await` ile asenkron işlemlerin sonucunu bekleme
- `try...catch` ile hata yönetimi
- `throw new Error()` ile hata oluşturma
- API isteği devam ederken yükleniyor mesajı gösterme
- Başarısız isteklerde kullanıcıya hata mesajı gösterme

### DOM İşlemleri

- `document.getElementById()` ile HTML öğelerini seçme
- `document.createElement()` ile dinamik HTML öğeleri oluşturma
- `textContent` ile öğelerin içeriğini değiştirme
- `classList.add()` ile oluşturulan öğelere CSS class'ı ekleme
- `appendChild()` ile öğeleri sayfaya yerleştirme
- `forEach()` ile API'den gelen kullanıcı dizisini dolaşma

## Uygulamanın Özellikleri

- Kullanıcının adını ve şehrini kaydetme
- Bilgileri Local Storage'da saklama
- Sayfa yenilendiğinde kayıtlı bilgileri yeniden gösterme
- Kayıtlı kullanıcı bilgilerini silme
- API'den kullanıcı listesini getirme
- Kullanıcıların ad ve e-posta bilgilerini kartlar halinde gösterme
- API isteği sırasında yükleniyor mesajı gösterme
- API hatalarını yakalama ve ekranda hata mesajı gösterme
- Mobil ekranlara uyumlu tasarım

## Kullanılan API

Bu çalışmada test verileri için JSONPlaceholder API kullanıldı:

https://jsonplaceholder.typicode.com/users

## Kullanılan Teknolojiler

- HTML5
- CSS3
- JavaScript
- Local Storage
- JSON
- Fetch API
- Async/Await

