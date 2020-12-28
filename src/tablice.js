//TABLICE

const lekcja = [
    "Administracja bazami danych ", //0
    "Administracja sieciowymi systemami operacyjnymi ", //1
    "Działalność gospodarcza w branży informatycznej ", //2
    "Język angielski zawodowy w branży informatycznej ", //3
    "Język angielski ", //4
    "Język niemiecki ", //5
    "Język polski ", //6
    "Matematyka ", //7
    "Programowanie aplikacji internetowych ", //8
    'Projektowanie i montaż lokalnych sieci komputerowych', //9
    'Sieci komputerowe', //10
    'Systemy baz danych', //11
    'Witryny i aplikacje internetowe', //12
    'Wychowanie fizyczne', //13
    'Historia i Społeczeństwo', //14
    'Lekcja wolna', //15
    '--------------', //16
    'Wychowawcza', //17
    'Wolne', //18
    //LEKCJE DLA TU
    "Podstawy kosztorysowania w budownictwie", //19
    "Systemy energetyki odnawialnej", //20
    "Język angielski w budownictwie", //21
    "Technologia montażu systemów energetyki odnawialnej", //22 rozni
    "Kosztorysowanie w budownictwie", //23 mynio
    "Montaż systemów energetyki", //24 6 //roznica
    "Obsługa systemów energetyki odnawialnej", //25 7 //rozni
    "Religia", //26
    // "", //27
    // "" //28
];

const link = [
    "https://zsoitmiastko.webex.com/meet/bformela ", //0
    "https://zsoitmiastko.webex.com/meet/eugeniuszlisiecki ", //1
    "https://zsoitmiastko.webex.com/meet/katarzyna.kowalczyk ", //2
    "https://meetingsemea30.webex.com/meet/pr1633467325 ", //3
    "https://zsoitmiastko.webex.com/meet/agnieszka.lesinska ", //4
    "https://zsoitmiastko.webex.com/meet/maria.mynio ", //5
    "https://zsoitmiastko.webex.com/meet/lkwasniewski ", //6
    "https://zsoitmiastko.webex.com/meet/tkwasniewski ", //7
    "brak linku ", //8
    "https://zsoitmiastko.webex.com/meet/boguslawszkwarek ", //9
    "https://zsoitmiastko.webex.com/meet/monika.m.mi", //10
    "https://zsoitmiastko.webex.com/join/kzawiesnicka", //11
    // LINKI DLA TU
    "https://teams.microsoft.com/_#/school/conversations/Og%C3%B3lny?threadId=19:bccbea7f4c094a21a3624f739647963a@thread.tacv2&ctx=channel.", //12
    "https://zsoitmiastko.webex.com/join/andrzej.mynio ", //13
    "https://zsoitmiastko.webex.com/join/kwiatek901208 " //14


];

const nauczyciel = [
    "Bartosz Formela ", //0
    "Eugeniusz Lisiecki ", //1
    "Katarzyna Kowalczyk ", //2
    "Aleksandra Biernacka ", //3
    "Agnieszka Lesińska ", //4
    "Maria Mynio ", //5
    "Łukasz Kwaśniewski ", //6
    "Tomasz Kwaśniewski ", //7
    "Marek Zabłocki ", //8
    "Bogusław Szkwarek ", //9
    "Iwona Muła", //10
    "Jolanta Szczepanowska", //11
    "Monika Miedzielska", //12
    "Katarzyna Zawieśnicka", //13
    // NAUCZYCIELE DLA TU
    "Andzej Mynio", //14
    "Przemysław Pakuła", //15
    "Różni", //16
    "Przemysław Kwiatek", //17
    "Roman Dykyj" //18
];


const l = {
    TI: {
        BF: {
            ABD: lekcja[0],
            SBD: lekcja[11],
            PIMLSK: lekcja[9],
            Sieci: lekcja[10],

        },
        EL: {
            DzialanoscGospodarcza: lekcja[2],
            Witryny: lekcja[12],
        },
        Programowanie: lekcja[8],
        AngielskiZawodowy: lekcja[3],
    },
    ALL: {
        Angielski: lekcja[4],
        Niemiecki: lekcja[4],
        Polski: lekcja[6],
        Matematyka: lekcja[7],
        HIS: lekcja[14],
        WF: lekcja[13],
        Religia: lekcja[26],
        Wolna: "Lekcja Wolna",
        Wolne: "Wolne",
    }

}


function hourN(string) {
    document.getElementById("hourLesson").innerHTML = string;
}
const hourLesson1 = () => {
    hourN("Lekcja 1: 8.00 - 8:45")
}

const hourLesson2 = () => {
    hourN("Lekcja 2: 8.50 - 9:35");
}

const hourLesson3 = () => {
    hourN("Lekcja 3: 9.40 - 10:25");

}

const hourLesson4 = () => {
    hourN("Lekcja 4: 10:40 - 11:25");
}

const hourLesson5 = () => {
    hourN("Lekcja 5: 11:30 - 12:15");
}

const hourLesson6 = () => {
    hourN("Lekcja 6: 12:20 - 13:05");
}

const hourLesson7 = () => {
    hourN("Lekcja 7: 13:10 - 13:55");
}

const hourLesson8 = () => {
    hourN("Lekcja 8: 14:00 - 14:45");
}