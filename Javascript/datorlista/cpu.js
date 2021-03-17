// Hitta element vi behöver
const rutaNamn = document.querySelector("input");
const meny = document.querySelector("select");
const knapp = document.querySelector("button");
const lista = document.querySelector("ul");

// Vad händer när man klickar på knappen?
knapp.addEventListener("click", function () {
    console.log("Du har klickat på knappen!");

    // Läs av textrutan och lagra i en variabel
    var namn = rutaNamn.value;
    console.log(namn);

    // Läs in valet i meny
    var cpu = meny.value;
    console.log(cpu);

    // Skriv i ul-listan
    if (cpu == "Ryzen3") {
        lista.innerHTML = "<li>" + 
                          "<img src=\"https://inetimg.se/img/86x86/5303157_0.jpg\"> " +
                          "AMD Ryzen 3 3100 3.6GHz 18MB<br>" + 
                          "Antal kärnor: 4 st | Antal trådar: 8 st | TDP: 65 W" + 
                          "</li>";
    }
    if (cpu == "Ryzen5") {
        lista.innerHTML = "<li>" + 
                          "<img src=\"https://inetimg.se/img/86x86/5303157_0.jpg\"> " +
                          "AMD Ryzen 5 3600 3.6 GHz 35MB<br>" + 
                          "Antal kärnor: 6 st | Antal trådar: 12 st | TDP: 65 W" + 
                          "</li>";
    }
    if (cpu == "Ryzen7") {
        lista.innerHTML = "<li>" + 
                          "<img src=\"https://inetimg.se/img/86x86/5303157_0.jpg\"> " +
                          "AMD Ryzen 7 3700X 3.6 GHz 36MB<br>" + 
                          "Antal kärnor: 8 st | Antal trådar: 16 st | TDP: 65 W" + 
                          "</li>";
    }
    
});