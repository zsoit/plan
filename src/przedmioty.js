//PRZEDMIOTY

function p(linkT, linkA, lekcja, nauczyciel) {
    document.getElementById("link").href = linkA;
    document.getElementById("link").innerHTML = linkT;
    document.getElementById("lekcja").innerHTML = 'Lekcja to: ' + lekcja;
    document.getElementById("nauczyciel").innerHTML = " Nauczyciel: " + nauczyciel;
}

function p2(linkT, linkA, nauczyciel) {
    document.getElementById("nauczyciel1").innerHTML = " Nauczyciel: " + nauczyciel;
    document.getElementById("link1").href = linkA;
    document.getElementById("link1").innerHTML = linkT;
}

const all = {
    Angielski() {
        p(link[3], link[3], lekcja[4], nauczyciel[3]);
        p2(link[11], link[11], nauczyciel[13]);

    },
    Niemiecki() {
        p(link[4], link[4], lekcja[5], nauczyciel[4]);
        p2(link[10], link[10], nauczyciel[12]);
    },
    Polski() {
        return p(link[5], link[5], lekcja[6], nauczyciel[5]);
    },
    Matematyka() {
        return p(link[6], link[6], lekcja[7], nauczyciel[6]);
    },
    WF() {
        return p(link[8], link[8], lekcja[13], nauczyciel[10]);
    },
    HIS() {
        return p(link[9], link[9], lekcja[14], nauczyciel[9]);
    },

    Wychowawcza() {
        return p(link[10], link[10], lekcja[17], nauczyciel[12]);
    },
    Wolna() {
        return document.getElementById("lekcja").innerHTML = 'Lekcja wolna';
    },
    EndLesson() {
        document.getElementById('roznica').style.display = "none";
        document.getElementById('weekday').innerHTML = "Koniec lekcji na dziś, wróć jutro!";
    },
}

//TI
const ti = {
    Programowanie() {
        return p(link[7], link[7], lekcja[8], nauczyciel[7]);
    },
    ABD() {
        return p(link[0], link[0], lekcja[0], nauczyciel[0]);
    },
    DzialanoscGospodarcza() {
        return p(link[1], link[1], lekcja[2], nauczyciel[1]);
    },
    AngielskiZawodowy() {
        return p(link[2], link[2], lekcja[3], nauczyciel[2]);
    },

    PIMLSK() {
        return p(link[0], link[0], lekcja[9], nauczyciel[0]);
    },
    Sieci() {
        return p(link[0], link[0], lekcja[10], nauczyciel[0]);
    },
    SBD() {
        return p(link[0], link[0], lekcja[11], nauczyciel[0]);
    },
    Witryny() {
        return p(link[1], link[1], lekcja[12], nauczyciel[1]);
    }
}

//TU
const tu = {
    PKwBudownictwie() {
        return p(link[13], link[13], lekcja[19], nauczyciel[14]);
    },
    SEO() {
        return p(link[12], link[12], lekcja[20], nauczyciel[15]);
    },
    AngielskiwBudownictwie() {
        return p(link[3], link[3], lekcja[21], nauczyciel[3]);
    },
    TechnologiaMontazuSEO() {
        return p("/", link[8], lekcja[22], nauczyciel[16]);
    },
    Kosztorysowanie() {
        return p(link[13], link[13], lekcja[23], nauczyciel[14]);
    },
    MontazSEO() {
        return p("/", link[8], lekcja[24], nauczyciel[16]);
    },
    ObslugaSEO() {
        return p("/", link[8], lekcja[25], nauczyciel[16]);
    },
}