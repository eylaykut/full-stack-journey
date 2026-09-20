const gorevInput = document.getElementById("gorevInput");
const ekleButonu = document.getElementById("ekleButonu");
const gorevListesi = document.getElementById("gorevListesi");
const gorevOzeti = document.getElementById("gorevOzeti");

ekleButonu.addEventListener("click", function(){
    
    const yeniGorev = gorevInput.value.trim();
    if(yeniGorev===""){
        return;
    }

    const listeElemani = document.createElement("li");
    const gorevMetni = document.createElement("span");
    gorevMetni.textContent = yeniGorev;

    const silButonu = document.createElement("button");
    silButonu.textContent = "Sil";
    silButonu.classList.add("sil-butonu");
    silButonu.addEventListener("click", function(){
        listeElemani.remove();
        ozetiGuncelle();
    });

    const tamamlaButonu = document.createElement("button");
    tamamlaButonu.textContent = "Tamamla";
    tamamlaButonu.classList.add("tamamla-butonu");
    tamamlaButonu.addEventListener("click", function(){
        gorevMetni.classList.toggle("tamamlandi");
        if(gorevMetni.classList.contains("tamamlandi")){
            tamamlaButonu.textContent="Geri Al";
        }else{
            tamamlaButonu.textContent="Tamamla";
        }
        ozetiGuncelle();
    });
    listeElemani.appendChild(gorevMetni);
    listeElemani.appendChild(tamamlaButonu);
    listeElemani.appendChild(silButonu);
    gorevListesi.appendChild(listeElemani);
    ozetiGuncelle();
    gorevInput.value = "";

});

gorevInput.addEventListener("keydown", function(event){
        if(event.key === "Enter"){
            ekleButonu.click();
        }
    });

    function ozetiGuncelle(){
        const toplam = gorevListesi.querySelectorAll("li").length;
        const tamamlanan = gorevListesi.querySelectorAll(".tamamlandi").length;
        gorevOzeti.textContent = "Toplam: " + toplam + " | Tamamlanan: " + tamamlanan;

    }
