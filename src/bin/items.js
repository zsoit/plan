//PRZEDMIOTY

function p(linkT, linkA, lection, teacher) {
    document.getElementById("link").href = linkA;
    document.getElementById("link").innerHTML = linkT;
    document.getElementById("lection").innerHTML = 'Lekcja to: ' + lection;
    document.getElementById("teacher").innerHTML = " Nauczyciel: " + teacher;
}

function p2(linkT, linkA, teacher) {
    document.getElementById("teacher1").innerHTML = " Nauczyciel: " + teacher;
    document.getElementById("link1").href = linkA;
    document.getElementById("link1").innerHTML = linkT;
}

const all = {
    Angielski() {
        p(link[3], link[3], lection[4], teacher[3]);
        p2(link[11], link[11], teacher[13]);

    },
    Niemiecki() {
        p(link[4], link[4], lection[5], teacher[4]);
        p2(link[10], link[10], teacher[12]);
    },
    Polski() {
        return p(link[5], link[5], lection[6], teacher[5]);
    },
    Matematyka() {
        return p(link[6], link[6], lection[7], teacher[6]);
    },
    WF() {
        return p(link[8], link[8], lection[13], teacher[10]);
    },
    HIS() {
        return p(link[9], link[9], lection[14], teacher[9]);
    },

    Wychowawcza() {
        return p(link[10], link[10], lection[17], teacher[12]);
    },
    Wolna() {
        return document.getElementById("lection").innerHTML = 'Lekcja wolna';
    },
    EndLesson() {
        document.getElementById('df').style.display = "none";
        document.getElementById('weekday').innerHTML = "Koniec lekcji na dziś, wróć jutro!";
    },
}

//TI
const ti = {
    Programowanie() {
        return p(link[7], link[7], lection[8], teacher[7]);
    },
    ABD() {
        return p(link[0], link[0], lection[0], teacher[0]);
    },
    DzialanoscGospodarcza() {
        return p(link[1], link[1], lection[2], teacher[1]);
    },
    AngielskiZawodowy() {
        return p(link[2], link[2], lection[3], teacher[2]);
    },

    PIMLSK() {
        return p(link[0], link[0], lection[9], teacher[0]);
    },
    Sieci() {
        return p(link[0], link[0], lection[10], teacher[0]);
    },
    SBD() {
        return p(link[0], link[0], lection[11], teacher[0]);
    },
    Witryny() {
        return p(link[1], link[1], lection[12], teacher[1]);
    }
}

//TU
const tu = {
    PKwBudownictwie() {
        return p(link[13], link[13], lection[19], teacher[14]);
    },
    SEO() {
        return p(link[12], link[12], lection[20], teacher[15]);
    },
    AngielskiwBudownictwie() {
        return p(link[3], link[3], lection[21], teacher[3]);
    },
    TechnologiaMontazuSEO() {
        return p("/", link[8], lection[22], teacher[16]);
    },
    Kosztorysowanie() {
        return p(link[13], link[13], lection[23], teacher[14]);
    },
    MontazSEO() {
        return p("/", link[8], lection[24], teacher[16]);
    },
    ObslugaSEO() {
        return p("/", link[8], lection[25], teacher[16]);
    },
}