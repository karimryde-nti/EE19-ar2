// Väljer elementen som vi behöver
const rutaPris = document.querySelector(".pris");
const rutaAntal = document.querySelector("input");
const rutaSumma = document.querySelector(".summa");
const knappPlus = document.querySelector(".plus");
const knappMinus = document.querySelector(".minus");

// Globala variabler
var antal = rutaAntal.value;
console.log("antal", antal);
var pris = rutaPris.textContent;
console.log("pris", pris);

// Räkna ut summan
var summa = antal * pris;
console.log("summa", summa);

// Skriv ut summan
rutaSumma.textContent = summa + " kr";

// Lyssna på ändring i input-rutan
rutaAntal.addEventListener("input", function () {
    // Läs av nya antalet
    antal = rutaAntal.value;

    // Räkna ut nya summan
    summa = antal * pris;

    // Skriv ut nya summan
    rutaSumma.textContent = summa + " kr";
});

// Lyssna på click på knappen Plus
knappPlus.addEventListener("click", function () {
    console.log("Klickat på Plus!");
    antal++;
    rutaAntal.value = antal;

    // Räkna ut summan och skriv ut den
    summa = antal * pris;
    rutaSumma.textContent = summa + " kr";
});

// Lyssna på click på knappen Minus
knappMinus.addEventListener("click", function () {
    console.log("Klickat på Minus!");

    // Om antal är större än noll då kan man räkna ned
    if (antal > 0) {
        antal--;
        rutaAntal.value = antal;

        // Räkna ut summan och skriv ut den
        summa = antal * pris;
        rutaSumma.textContent = summa + " kr";
    }
});