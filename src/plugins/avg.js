let p1, p2, p3, p4, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, imie;
// const grades = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15];
const gradesID = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15"];



function checkGrade() {
    document.getElementById("print").style.display = "block";
    document.getElementById("info").style.display = "block";




    imie = document.getElementById("nameOfStudent").value;


    p1 = Number(document.getElementById(gradesID[0]).value);
    p2 = Number(document.getElementById("p2").value);
    p3 = Number(document.getElementById("p3").value);
    p4 = Number(document.getElementById("p4").value);
    p5 = Number(document.getElementById("p5").value);
    p6 = Number(document.getElementById("p6").value);
    p7 = Number(document.getElementById("p7").value);
    p8 = Number(document.getElementById("p8").value);
    p9 = Number(document.getElementById("p9").value);
    p10 = Number(document.getElementById("p10").value);
    p11 = Number(document.getElementById("p11").value);
    p12 = Number(document.getElementById("p12").value);
    p13 = Number(document.getElementById("p13").value);
    p14 = Number(document.getElementById("p14").value);
    p15 = Number(document.getElementById("p15").value);
    // imie = document.getElementById("nameOfStudent").value;



    const grades = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15];

    n = 0;

    //dzielnik
    function df(a) {
        if (a > 0) {
            n = n + 1;
        }
    }

    for (let i = 0; i < 15; i++) {
        df(grades[i]);
    }

    //wzor
    suma =
        p1 +
        p2 +
        p3 +
        p4 +
        p5 +
        p6 +
        p7 +
        p8 +
        p9 +
        p10 +
        p11 +
        p12 +
        p13 +
        p14 +
        p15;
    srednia = suma / n;
    sredniaZawodowa = (p1 + p2 + p4 + p5 + p6 + p7 + p8 + p9) / 8;

    multi = 1000;

    srednia = Math.round(srednia * multi) / multi;
    sredniaZawodowa = Math.round(sredniaZawodowa * multi) / multi;

    if (srednia >= 7 || sredniaZawodowa >= 7) {
        srednia = "Błędne dane! Średnia nie może byc wyższa niz 6";
        sredniaZawodowa = " Błędne dane!  Średnia nie może byc wyższa niz 6";
    }

    if (n == 0) {
        srednia = "Brak danych";
        sredniaZawodowa = "Brak danych";
    }

    document.getElementById("dzielnik").innerHTML =
        "Liczba przedmiotów: " + n;

    document.getElementById("dzielnik2").innerHTML =
        "Przedmioty zawodowe: 8";

    document.getElementById("value").innerHTML = "Średnia: " + srednia;

    document.getElementById("value2").innerHTML =
        "Średnia zawodowa: " + sredniaZawodowa;

    document.getElementById("name").innerHTML = "Uczeń: " + imie;
    document.getElementById("class").innerHTML = "Klasa: III TI 2019/2020";

    // document.getElementById("print").style.display = "block";
    // document.getElementById("oblicz").style.display = "none";
};

function Item(item, lection) {
    document.querySelector(item).innerHTML = lection;
}
const Items = () => {
    Item('#Item1', lection[0]);
    Item('#Item2', lection[11]);
    Item('#Item3', lection[9]);
    Item('#Item4', lection[10]);
    Item('#Item5', lection[2]);
    Item('#Item6', lection[12]); //3
    Item('#Item7', lection[8]);
    Item('#Item8', lection[3]); //12
    Item('#Item9', lection[7]);
    Item('#Item10', lection[4]);
    Item('#Item11', lection[5]);
    Item('#Item12', lection[6]);
    Item('#Item13', lection[14]);
    Item('#Item14', lection[13]);
    Item('#Item15', lection[26]);
}
Items();