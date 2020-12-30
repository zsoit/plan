function Item(item, lection) {
    document.querySelector(item).innerHTML = lection;
}

function ItemsTI() {
    Item('#Item1', lection[0]);
    Item('#Item2', lection[11]);
    Item('#Item3', lection[9]);
    Item('#Item4', lection[10]);
    Item('#Item5', lection[2]);
    Item('#Item6', lection[12]);
    Item('#Item7', lection[8]);
    Item('#Item8', lection[3]);
    Item('#Item9', lection[7]);
    Item('#Item10', lection[4]);
    Item('#Item11', lection[5]);
    Item('#Item12', lection[6]);
    Item('#Item13', lection[14]);
    Item('#Item14', lection[13]);
    Item('#Item15', lection[26]);
}

function ItemsTU() {
    Item('#Item1', lection[19]);
    Item('#Item2', lection[20]);
    Item('#Item3', lection[21]);
    Item('#Item4', lection[22]);
    Item('#Item5', lection[23]);
    Item('#Item6', lection[24]);
    Item('#Item7', lection[25]);
    Item('#Item8', lection[16]);
    Item('#Item9', lection[7]);
    Item('#Item10', lection[4]);
    Item('#Item11', lection[5]);
    Item('#Item12', lection[6]);
    Item('#Item13', lection[14]);
    Item('#Item14', lection[13]);
    Item('#Item15', lection[26]);
}

let className = document.getElementById("checkClass").value;
if (className == "TI") {
    ItemsTI();
} else {
    ItemsTU();
}

function main() {
    document.getElementById("print").style.display = "block";
    document.getElementById("info").style.display = "block";
    let name = document.getElementById("nameOfStudent").value;
    const tab = [];
    const gradesID = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15"];
    for (let i = 0; i <= 14; i++) {
        tab[i] = Number(document.getElementById(gradesID[i]).value);
    }

    let d = 0;
    let sum = 0;
    let sumPro = 0;
    let alert;

    function divisor(a) {
        if (a > 0 && a <= 6) {
            d++;
        }
    }

    for (let i = 0; i < 15; i++) {
        divisor(tab[i]);
        if (tab[i] >= 7) {
            document.getElementById(gradesID[i]).style.color = "red";
        } else {
            document.getElementById(gradesID[i]).style.color = "black";
        }
    }

    for (let i = 0; i < tab.length; i++) {
        sum += tab[i]
    }

    for (let i = 0; i <= 7; i++) {
        sumPro += tab[i];
    }

    let result = sum / d;
    let resultPro = sumPro / 8;

    multi = 1000;
    result = Math.round(result * multi) / multi;
    resultPro = Math.round(resultPro * multi) / multi;

    function errorSix(a) {
        if (a >= 7) {
            alert = "Błędne dane! Średnia nie może być wyższa niz 6"
            result = alert;
            resultPro = alert;
            d = alert;
        }
    }

    for (let i = 0; i <= 14; i++) {
        errorSix(tab[i]);
    }

    if (d == 0) {
        alert = "Brak danych";
        result = alert;
        resultPro = alert;
        d = alert;
        name = alert;
    }

    function showHTML(id, show) {
        document.querySelector(id).innerHTML = show;
    }

    let checkClass = document.getElementById("checkClass").value;
    if (checkClass == "TI") {
        showHTML("#itemsPro", 'Przedmioty zawodowe: 8');
        showHTML('#class', 'Klasa: III TI 2020/2021');
    } else {
        showHTML('#class', 'Klasa: III TU 2020/2021');
        showHTML("#itemsPro", 'Przedmioty zawodowe: 7');
    }

    showHTML("#result", 'Średnia: ' + result);
    showHTML("#resultPro", 'Średnia zawodowa: ' + resultPro);
    showHTML('#name', 'Uczeń: ' + name);
    showHTML("#items", 'Liczba przedmiotów: ' + d);
}