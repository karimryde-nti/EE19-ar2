const rutaTal1 = document.querySelector(".tal1");
const rutaTal2 = document.querySelector(".tal2");
const knappPlus = document.querySelector(".plus");
const knappSlumpa = document.querySelector(".slumpa");
const knappRita = document.querySelector(".rita");

const rutaSvar = document.querySelector("textarea");

const rityta = document.querySelector("canvas");

// Ställer in storleken
rityta.width = 350;
rityta.height = 200;

// Slå på ritmotorn
var ctx = rityta.getContext("2d");

knappPlus.addEventListener("click", function () {
    // Läs av rutorna
    var tal1 = rutaTal1.value;
    var tal2 = rutaTal2.value;
    console.log(tal1, tal2);

    // Om ruta 1 är tom
    if (tal1 == "") {
        rutaSvar.value = "Ruta 1 är tom!";
    } else if (tal2 == "") {
        rutaSvar.value = "Ruta 2 är tom!";
    } else {
        // Räkna ut summan
        var summa = parseInt(tal1) + parseInt(tal2);

        // Skriv ut
        rutaSvar.value = "tal1 + tal2 = " + summa;
    }
})

knappSlumpa.addEventListener("click", function () {
    rutaTal1.value = Math.ceil(Math.random() * 10);
    rutaTal2.value = Math.ceil(Math.random() * 10);
})

knappRita.addEventListener("click", function () {
    // Läs av rutorna
    var tal1 = rutaTal1.value;
    var tal2 = rutaTal2.value;

    //ctx.fillStyle = "Red";
    for (var i = 0; i < tal1; i++) {
        ctx.fillRect(50 * i, 0, 20, 100);
    }
})