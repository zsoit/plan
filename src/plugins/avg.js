const checkClass = document.getElementById("checkClass").value;
const print = document.getElementById("print");
const btn__main = document.getElementById('btn__main');
const info = document.getElementById("info");

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
    Item('#Item9', lection[28]);
    Item('#Item10', lection[7]);
    Item('#Item11', lection[4]);
    Item('#Item12', lection[5]);
    Item('#Item13', lection[6]);
    Item('#Item14', lection[14]);
    Item('#Item15', lection[13]);
    Item('#Item16', lection[26]);

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
    Item('#Item9', lection[28]);
    Item('#Item10', lection[7]);
    Item('#Item11', lection[4]);
    Item('#Item12', lection[5]);
    Item('#Item13', lection[6]);
    Item('#Item14', lection[14]);
    Item('#Item15', lection[13]);
    Item('#Item16', lection[26]);

}
if (checkClass == "TI") ItemsTI();
else ItemsTU();

function main() {
    let name = document.getElementById("nameOfStudent").value;
    print.style.display = "block";
    info.style.display = "block";
    const tab = [];
    const gradesID = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"];

    let alert = "Błędne dane! Średnia nie może być wyższa niż 6";
    let d = 0;
    let sum = 0;
    let sumPro = 0;
    let result = 0;
    let resultPro = 0;

    function divisor(a) {
        if (a > 0 && a <= 6) d++;
    }

    for (let i = 0; i < gradesID.length; i++) {
        tab[i] = Number(document.getElementById(gradesID[i]).value);
        divisor(tab[i]);
        let grades = document.getElementById(gradesID[i]);
        if (tab[i] >= 7) {
            grades.style.color = "red";
            grades.style.border = "1px solid red";
        } else {
            grades.style.color = "black";
            grades.style.border = "none";
        }
        sum += tab[i];
    }
    for (let i = 0; i < 9; i++) sumPro += tab[i];
    if (checkClass == "TI") resultPro = sumPro / 9;
    else resultPro = sumPro / 8;
    result = sum / d;
    multi = 1000;
    result = Math.round(result * multi) / multi;
    resultPro = Math.round(resultPro * multi) / multi;


    for (let i = 0; i < gradesID.length; i++) {
        if (tab[i] >= 7) {
            result = alert;
            resultPro = alert;
            d = alert;
        }
    }
    if (d == 0) {
        alert = "Brak danych";
        result = alert;
        resultPro = alert;
    }

    function showHTML(id, show) {
        document.querySelector(id).innerHTML = show;
    }

    if (checkClass == "TI") {
        showHTML("#itemsPro", 'Przedmioty zawodowe: 9');
        showHTML('#class', 'Klasa: III TI 2020/2021');
    } else {
        showHTML('#class', 'Klasa: III TU 2020/2021');
        showHTML("#itemsPro", 'Przedmioty zawodowe: 8');
    }

    showHTML("#resultPro", `Średnia zawodowa: ${resultPro}`);
    showHTML("#result", `Średnia: ${result}`);
    showHTML('#name', `Uczeń: ${name}`);
    showHTML("#items", `Liczba przedmiotów: ${d}`);
}

btn__main.addEventListener('click', () => main())

print.addEventListener('click', () => {
    window.print();
    return false;
})