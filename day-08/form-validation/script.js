const kayitFormu = document.getElementById("kayitFormu")
const adInput = document.getElementById("ad")
const emailInput = document.getElementById("email")
const sifreInput = document.getElementById("sifre")
const adHata = document.getElementById("adHata")
const emailHata = document.getElementById("emailHata")
const sifreHata = document.getElementById("sifreHata")
const basariMesaji = document.getElementById("basariMesaji")

kayitFormu.addEventListener("submit", function(event){
    event.preventDefault();
    const adDegeri = adInput.value.trim()
    const emailDegeri = emailInput.value.trim()
    const sifreDegeri = sifreInput.value

    let formGecerli = true;
    if(adDegeri===""){
        adHata.textContent = "Ad alanı boş bırakılamaz."
        formGecerli = false;
    } else{
        adHata.textContent=""
    }

    if(emailDegeri===""){
        emailHata.textContent = "E-posta alanı boş bırakılamaz."
        formGecerli = false;
    } else if(!emailDegeri.includes("@")){
        emailHata.textContent = "Geçerli bir e-posta adresi giriniz."
        formGecerli = false;
    } else{
        emailHata.textContent = ""
    }

    if(sifreDegeri===""){
        sifreHata.textContent = "Şifre alanı boş bırakılamaz."
        formGecerli = false;
    } else if(sifreDegeri.length<8){
        sifreHata.textContent = "Şifre en az 8 karakter olmalıdır."
        formGecerli = false;
    }
    else {
        sifreHata.textContent = ""
    }

    if(formGecerli){
        basariMesaji.textContent = "Kayıt başarıyla tamamlandı."
        console.log("Form gönderildi.")
        kayitFormu.reset()
    } else {
        basariMesaji.textContent = ""
    }

    
    console.log(adDegeri)
    console.log(emailDegeri)
})


