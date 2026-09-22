const adInput = document.getElementById("adInput")
const kaydetButonu = document.getElementById("kaydetButonu")
const kayitliBilgi = document.getElementById("kayitliBilgi")
const silButonu = document.getElementById("silButonu")
const sehirInput = document.getElementById("sehirInput")
const getUsers = document.getElementById("getUsers")
const userList = document.getElementById("userList")

kaydetButonu.addEventListener("click", function(){
    const girilenAd = adInput.value.trim()
    const girilenSehir = sehirInput.value.trim()
     if(girilenAd === "" || girilenSehir === ""){
        return
    }

    const kullanici = {
        ad: girilenAd,
        sehir: girilenSehir
    }

    localStorage.setItem("kullanici", JSON.stringify(kullanici))

    kayitliBilgi.textContent = "Ad: " + kullanici.ad + " | Şehir: " + kullanici.sehir
   
})

const kayitliKullaniciMetni = localStorage.getItem("kullanici");

if(kayitliKullaniciMetni){
    const kayitliKullanici = JSON.parse(kayitliKullaniciMetni)
    kayitliBilgi.textContent =
        "Ad: " + kayitliKullanici.ad +
        " | Şehir: " + kayitliKullanici.sehir;
}

silButonu.addEventListener("click", function(){
    localStorage.removeItem("kullanici")
    kayitliBilgi.textContent = ""
    adInput.value = ""
    sehirInput.value = ""
})

// getUsers.addEventListener("click", function(){
//     console.log("Kullanıcılar istenecek")
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function(response){
//         if(!response.ok){
//             throw new Error("Sunucu hatası: " + response.status)
//         }
        
//         return response.json()
        
//     })
//     .then(function(users){
//         userList.innerHTML = "" /*Butona tekrar basıldığında aynı kullanıcıların çoğalmasını engeller.*/

//         users.forEach(function(user){
//             const userCard = document.createElement("div")
//             const name = document.createElement("h3")
//             const email = document.createElement("p")

//             name.textContent = user.name
//             email.textContent = user.email

//             userCard.appendChild(name)
//             userCard.append(email)
//             userList.appendChild(userCard)
//         })
//     })

//     .catch(function(error){
//         console.log("Hata: ", error)
//         userList.textContent = "Kullanıcılar yüklenemedi"
//     })
// })


async function kullanicilariGetir() {
    try {
        userList.textContent = "Kullanıcılar yükleniyor...";
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Sunucu hatası: " + response.status);
        }

        const users = await response.json();
        userList.innerHTML = "";

        users.forEach(function (user) {
            const userCard = document.createElement("div");
            userCard.classList.add("user-card")
            const name = document.createElement("h3");
            const email = document.createElement("p");

            name.textContent = user.name;
            email.textContent = user.email;

            userCard.appendChild(name);
            userCard.appendChild(email);
            userList.appendChild(userCard);
            
        });

        console.log(users);
    } catch (error) {
        console.log("Hata:", error);
        userList.textContent = "Kullanıcılar yüklenemedi";
    }
}

getUsers.addEventListener("click", function () {
    kullanicilariGetir();
});