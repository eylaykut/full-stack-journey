# Day 13 – Modern JavaScript

Bu çalışmada modern JavaScript özelliklerini ve kodu modüllere ayırmayı öğrendim.

## Öğrendiğim Konular

- Template literals
- Arrow functions ve implicit return
- Nesne ve dizi destructuring
- Spread ve rest operatörleri
- Varsayılan parametreler
- `reduce()` metodu
- `import` ve `export`
- `try...catch` ve `throw`

## Kısa Örnekler

### Template Literal ve Arrow Function

```js
const selamVer = (isim) => `Merhaba ${isim}!`;
```

### Destructuring

```js
const kullanici = {
    ad: "Eylülnaz",
    hedef: "Full Stack Developer"
};

const { ad, hedef } = kullanici;
```

### Spread ve Rest

```js
const teknolojiler = [...frontend, ...backend];

const topla = (...sayilar) =>
    sayilar.reduce((toplam, sayi) => toplam + sayi, 0);
```

### Modüller

```js
export const topla = (a, b) => a + b;
```

```js
import { topla } from "./utils.js";
```

HTML dosyasında modül kullanımı:

```html
<script type="module" src="script.js"></script>
```

### Hata Yönetimi

```js
try {
    throw new Error("Bir hata oluştu.");
} catch (error) {
    console.log(error.message);
}
```

## Dosyalar

- `index.html`
- `script.js`
- `utils.js`
- `README.md`

## Çalıştırma

```powershell
python -m http.server 5500
```

Tarayıcı adresi:

```text
http://localhost:5500
```