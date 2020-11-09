//INFO-DNI-TYGODNIA
const weekDay = () => {

    let data = new Date();
    let hour = data.getHours();
    let m = new Date();
    let minute = m.getMinutes();

    // hour = 13;
    // minute = 56;

    var day = new Date().getDay();
    // day = 3;

    var godziny = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

    var minuty = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];

    var roznica;

    switch (day) {
        case 0: //Niedziela
            {
                document.getElementById('weekday').innerHTML = "Dziś jest niedziela co oznacza brak lekcji!";
                document.getElementById('roznica').style.display = "none";
                break;
            }
        case 1: //Poniedziałek
            {
                document.getElementById('weekday').innerHTML = " Dzień: Poniedziałek";
                if (hour == 8 && minute >= 00 && minute < 45 || hour == 7 && minute <= 59) { //lekcja1
                    document.getElementById('weekday').innerHTML = lekcja[15];
                    roznica = (hour * 60 + minute) - (godziny[8] * 60 + minuty[45]);
                    roznica = -roznica;
                    godzina1();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[19];
                    break;
                } else if (hour == 8 && minute <= 50 || hour == 8 && minute >= 45 || hour == 9 && minute < 35) { //lekcja2
                    roznica = (hour * 60 + minute) - (godziny[9] * 60 + minuty[35]);
                    roznica = -roznica;
                    PKwBudownictwie();
                    godzina2();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[5];
                    break;
                } else if (hour == 9 && minute >= 35 || hour == 10 && minute < 25) { //lekcja3
                    roznica = (hour * 60 + minute) - (godziny[10] * 60 + minuty[25]);
                    roznica = -roznica;
                    Niemiecki();
                    NiemieckiMonia();
                    godzina3();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[20];
                    break;
                } else if (hour == 10 && minute >= 25 || hour == 11 && minute < 25) { //lekcja4
                    roznica = (hour * 60 + minute) - (godziny[11] * 60 + minuty[25]);
                    roznica = -roznica;
                    SEO();
                    godzina4();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[6];
                    break;
                } else if (hour == 11 && minute >= 25 || hour == 12 && minute < 15) { //lekcja5
                    roznica = (hour * 60 + minute) - (godziny[12] * 60 + minuty[15]);
                    roznica = -roznica;
                    Polski();
                    godzina5();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[21];
                    break;
                } else if (hour == 12 && minute >= 15 || hour == 13 && minute < 05) { //lekcja6
                    roznica = (hour * 60 + minute) - (godziny[13] * 60 + minuty[5]);
                    roznica = -roznica;
                    AngielskiwBudownictwie();
                    godzina6();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[4];
                    break;

                } else if (hour == 13 && minute <= 54) { //lekcja7
                    roznica = (hour * 60 + minute) - (godziny[13] * 60 + minuty[55]);
                    roznica = -roznica;
                    Angielski();
                    AngielskiKaska();
                    godzina7();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[14];
                    break;

                } else if (hour == 13 && minute >= 55 || hour == 14 && minute < 45) { //lekcja8
                    roznica = (hour * 60 + minute) - (godziny[14] * 60 + minuty[45]);
                    roznica = -roznica;
                    HIS();
                    godzina8();
                    document.getElementById('next').innerHTML = 'Następna lekcja: Koniec lekcji!';
                    break;
                } else {
                    document.getElementById('roznica').style.display = "none";
                    document.getElementById('weekday').innerHTML = "Koniec lekcji na dziś, wróć jutro!";
                }
                break;


            }
        case 2: //Wtorek
            {
                document.getElementById('weekday').innerHTML = " Dzień: Wtorek";
                if (hour == 8 && minute >= 00 && minute < 45 || hour == 7 && minute <= 59) { //lekcja1
                    roznica = (hour * 60 + minute) - (godziny[8] * 60 + minuty[45]);
                    roznica = -roznica;
                    Polski();
                    godzina1();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[6];
                    break;
                } else if (hour == 8 && minute <= 50 || hour == 8 && minute >= 45 || hour == 9 && minute < 35) { //lekcja2
                    roznica = (hour * 60 + minute) - (godziny[9] * 60 + minuty[35]);
                    roznica = -roznica
                    Polski();
                    godzina2();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[7];
                    break;
                } else if (hour == 9 && minute >= 35 || hour == 10 && minute < 25) { //lekcja3
                    roznica = (hour * 60 + minute) - (godziny[10] * 60 + minuty[25]);
                    roznica = -roznica;
                    Matematyka();
                    godzina3();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[19];
                    break;
                } else if (hour == 10 && minute >= 25 || hour == 11 && minute < 25) { //lekcja4
                    roznica = (hour * 60 + minute) - (godziny[11] * 60 + minuty[25]);
                    roznica = -roznica;
                    PKwBudownictwie();
                    godzina4();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[13];
                    break;
                } else if (hour == 11 && minute >= 25 || hour == 12 && minute < 15) { //lekcja5
                    roznica = (hour * 60 + minute) - (godziny[12] * 60 + minuty[15]);
                    roznica = -roznica;
                    WF();
                    godzina5();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[22];
                    break;
                } else if (hour == 12 && minute >= 15 || hour == 13 && minute < 05) { //lekcja6
                    roznica = (hour * 60 + minute) - (godziny[13] * 60 + minuty[5]);
                    roznica = -roznica
                    TechnologiaMontazuSEO();
                    godzina6();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[23];
                    break;

                } else if (hour == 13 && minute <= 54) { //lekcja7
                    roznica = (hour * 60 + minute) - (godziny[13] * 60 + minuty[55]);
                    roznica = -roznica
                    Kosztorysowanie();
                    godzina7();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[22];
                    break;

                } else if (hour == 13 && minute >= 55 || hour == 14 && minute < 45) { //lekcja8
                    roznica = (hour * 60 + minute) - (godziny[14] * 60 + minuty[45]);
                    roznica = -roznica
                    TechnologiaMontazuSEO();
                    godzina8();
                    document.getElementById('next').innerHTML = 'Następna lekcja: Koniec lekcji!';
                    break;
                } else {
                    document.getElementById('roznica').style.display = "none";
                    document.getElementById('weekday').innerHTML = "Koniec lekcji na dziś, wróć jutro!";
                }

                break;


            }
        case 3: //Sroda
            {
                document.getElementById('weekday').innerHTML = " Dzień: Środa";
                if (hour == 8 && minute >= 00 && minute < 45 || hour == 7 && minute <= 59) { //lekcja1
                    roznica = (hour * 60 + minute) - (godziny[8] * 60 + minuty[45]);
                    roznica = -roznica;
                    document.getElementById('weekday').innerHTML = lekcja[15];
                    godzina1();
                    document.getElementById('next').innerHTML = 'Następna lekcja: Wolna=Religia';
                    break;
                } else if (hour == 8 && minute <= 50 || hour == 8 && minute >= 45 || hour == 9 && minute < 35) { //lekcja2
                    roznica = (hour * 60 + minute) - (godziny[9] * 60 + minuty[35]);
                    roznica = -roznica;
                    document.getElementById('weekday').innerHTML = "Lekcja wolna! Religia";
                    godzina2();
                    document.getElementById('next').innerHTML = 'Następna lekcja: Wychowcza';
                    break;
                } else if (hour == 9 && minute >= 35 || hour == 10 && minute < 25) { //lekcja3
                    roznica = (hour * 60 + minute) - (godziny[10] * 60 + minuty[25]);
                    roznica = -roznica;
                    document.getElementById("link").href = link[10];
                    document.getElementById("link").innerHTML = link[10];
                    document.getElementById("lekcja").innerHTML = 'Lekcja to: ' + lekcja[17];
                    document.getElementById("nauczyciel").innerHTML = " Nauczyciel: " + nauczyciel[12];
                    godzina3();
                    document.getElementById("nauczyciel").innerHTML = " Nauczyciel: " + nauczyciel[12];
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[7];
                    break;
                } else if (hour == 10 && minute >= 25 || hour == 11 && minute < 25) { //lekcja4
                    roznica = (hour * 60 + minute) - (godziny[11] * 60 + minuty[25]);
                    roznica = -roznica;
                    Matematyka();
                    godzina4();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[24];
                    break;
                } else if (hour == 11 && minute >= 25 || hour == 12 && minute < 15) { //lekcja5
                    var roznica = (hour * 60 + minute) - (godziny[12] * 60 + minuty[15]);
                    var roznica = -roznica;
                    MontazSEO();
                    godzina5();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[24];
                    break;


                } else if (hour == 12 && minute >= 15 || hour == 13 && minute < 05) { //lekcja6
                    roznica = (hour * 60 + minute) - (godziny[13] * 60 + minuty[5]);
                    roznica = -roznica;
                    MontazSEO();
                    godzina6();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[24];
                    break;

                } else if (hour == 13 && minute <= 54) { //lekcja7
                    roznica = (hour * 60 + minute) - (godziny[13] * 60 + minuty[55]);
                    roznica = -roznica
                    MontazSEO();
                    godzina7();
                    document.getElementById('next').innerHTML = 'Następna lekcja: Koniec lekcji!';
                    break;

                } else {
                    document.getElementById('roznica').style.display = "none";
                    document.getElementById('weekday').innerHTML = "Koniec lekcji na dziś, wróć jutro!";
                }
                break;
            }
        case 4: //Czwartek
            {
                document.getElementById('weekday').innerHTML = " Dzień: Czwartek";
                if (hour == 8 && minute >= 00 && minute < 45 || hour == 7 && minute <= 59) { //lekcja1
                    roznica = (hour * 60 + minute) - (godziny[8] * 60 + minuty[45]);
                    roznica = -roznica;
                    Angielski();
                    AngielskiKaska();
                    godzina1();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[6];
                    break;
                } else if (hour == 8 && minute <= 50 || hour == 8 && minute >= 45 || hour == 9 && minute < 35) { //lekcja2
                    roznica = (hour * 60 + minute) - (godziny[9] * 60 + minuty[35]);
                    roznica = -roznica
                    Polski();
                    godzina2();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[5];
                    break;
                } else if (hour == 9 && minute >= 35 || hour == 10 && minute < 25) { //lekcja3
                    roznica = (hour * 60 + minute) - (godziny[10] * 60 + minuty[25]);
                    roznica = -roznica;
                    Niemiecki();
                    NiemieckiMonia();
                    godzina3();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[7];
                    break;
                } else if (hour == 10 && minute >= 25 || hour == 11 && minute < 25) { //lekcja4
                    roznica = (hour * 60 + minute) - (godziny[11] * 60 + minuty[25]);
                    roznica = -roznica;
                    Matematyka();
                    godzina4();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[13];
                    break;
                } else if (hour == 11 && minute >= 25 || hour == 12 && minute < 15) { //lekcja5
                    roznica = (hour * 60 + minute) - (godziny[12] * 60 + minuty[15]);
                    roznica = -roznica;
                    WF();
                    godzina5();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[20];
                    break;
                } else if (hour == 12 && minute >= 15 || hour == 13 && minute < 05) { //lekcja6
                    roznica = (hour * 60 + minute) - (godziny[13] * 60 + minuty[5]);
                    roznica = -roznica
                    SEO();
                    godzina6();
                    document.getElementById('next').innerHTML = 'Następna lekcja: Koniec lekcji!';
                    break;

                } else {
                    document.getElementById('roznica').style.display = "none";
                    document.getElementById('weekday').innerHTML = "Koniec lekcji na dziś, wróć jutro!";
                }

                break;

            }
        case 5: //Piatek
            {

                document.getElementById('weekday').innerHTML = " Dzień: Piątek";
                if (hour == 8 && minute >= 00 && minute < 45 || hour == 7 && minute <= 59) { //lekcja1
                    roznica = (hour * 60 + minute) - (godziny[8] * 60 + minuty[45]);
                    roznica = -roznica;
                    Matematyka();
                    godzina1();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[13];
                    break;
                } else if (hour == 8 && minute <= 50 || hour == 8 && minute >= 45 || hour == 9 && minute < 35) { //lekcja2
                    roznica = (hour * 60 + minute) - (godziny[9] * 60 + minuty[35]);
                    roznica = -roznica
                    WF();
                    godzina2();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[4];
                    break;
                } else if (hour == 9 && minute >= 35 || hour == 10 && minute < 25) { //lekcja3
                    roznica = (hour * 60 + minute) - (godziny[10] * 60 + minuty[25]);
                    roznica = -roznica;
                    Angielski();
                    AngielskiKaska();
                    godzina3();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[20];
                    break;
                } else if (hour == 10 && minute >= 25 || hour == 11 && minute < 25) { //lekcja4
                    roznica = (hour * 60 + minute) - (godziny[11] * 60 + minuty[25]);
                    roznica = -roznica;
                    SEO();
                    godzina4();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[25];
                    break;
                } else if (hour == 11 && minute >= 25 || hour == 12 && minute < 15) { //lekcja5
                    roznica = (hour * 60 + minute) - (godziny[12] * 60 + minuty[15]);
                    roznica = -roznica;
                    ObslugaSEO();
                    godzina5();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[25];
                    break;
                } else if (hour == 12 && minute >= 15 || hour == 13 && minute < 05) { //lekcja6
                    roznica = (hour * 60 + minute) - (godziny[13] * 60 + minuty[5]);
                    roznica = -roznica
                    ObslugaSEO();
                    godzina6();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[25];
                    break;

                } else if (hour == 13 && minute <= 54) { //lekcja7
                    roznica = (hour * 60 + minute) - (godziny[13] * 60 + minuty[55]);
                    roznica = -roznica
                    ObslugaSEO();
                    godzina7();
                    document.getElementById('next').innerHTML = 'Następna lekcja: Koniec lekcji!';
                    break;

                } else {
                    document.getElementById('roznica').style.display = "none";
                    document.getElementById('weekday').innerHTML = "Koniec lekcji na dziś, wróć jutro!";
                }

                break;


            }

        case 6: //Sobota
            {
                document.getElementById('weekday').innerHTML = "Dziś jest sobota co oznacza brak lekcji!";
                document.getElementById('roznica').style.display = "none";
                break;
            }
    }

    //Odliczanie czasu do końca lekcji
    const odliczanie = () => {
        if (roznica >= 60 && roznica < 120) {
            roznica = roznica - 60;
            roznica = "1 godz. " + roznica;
        } else if (roznica >= 120 && roznica < 120) {
            roznica = roznica - 120;
            roznica = "2 godz. " + roznica;
        } else if (roznica >= 180 && roznica > 180) {
            roznica = roznica - 180;
            roznica = "3 godz. " + roznica;
            // } else if (róznica < 0 && roznica < 60) {
            //     roznica = 'Jeszcze lekcja się nie zaczeła!';
        } else if (roznica == undefined) {
            roznica = 'Brak lekcji! 0'

        } else {
            // roznica = 'Jeszcze lekcja się nie zaczeła!';
            roznica = roznica;
        }
    }
    odliczanie();

    //polnoc-6-rano
    const polnocSzosta = () => {
        if (hour <= 6 && hour >= 0) {
            var min = minute;
            var start;
            if (min == 0) {
                start = 8 - hour;
                document.getElementById('roznica').style.display = "none";
                document.getElementById('weekday').innerHTML = "Lekcja rozpocznie się za " + start + " godz. ";
            } else if (hour == 6) {
                min = 60 - minute;
                if (hour == 6) {
                    start = 1;
                    document.getElementById('roznica').style.display = "none";
                    document.getElementById('weekday').innerHTML = "Lekcja rozpocznie się za " + start + " godz. " + min + " min.";
                }
            } else {
                start = 7 - hour;
                min = 60 - minute;
                document.getElementById('roznica').style.display = "none";
                document.getElementById('weekday').innerHTML = "Lekcja rozpocznie się za " + start + " godz. " + min + " min.";
            }
        }



    }
    polnocSzosta();

    //aktualna-godzina
    const aktualnaGodzina = () => {
        if (minute < 10) {
            minute = "0" + minute;
        }
        document.getElementById('hour').innerHTML = 'Aktualna godzina: ' + hour + ':' + minute;
        roznica = roznica + ' min. do końca lekcji';
    }
    aktualnaGodzina();

    //przerwa odliczanie
    const przerwaOdliczanie = () => {
        //PRZERWA
        if (hour == 8 && minute >= 45 && minute <= 49 == true) { //przerwa1
            minute = minute - 50;
            minute = -minute;
            var przerwa = minute;
            roznica = przerwa + ' min. do końca przerwy';
        } else if (hour == 9 && minute >= 35 && minute <= 39 == true) { //przerwa2
            minute = minute - 40;
            minute = -minute;
            var przerwa = minute;
            roznica = przerwa + ' min. do końca przerwy';
        } else if (hour == 10 && minute >= 25 && minute <= 39 == true) { //przerwa3
            minute = minute - 40;
            minute = -minute;
            var przerwa = minute;
            roznica = przerwa + ' min. do końca przerwy';
        } else if (hour == 11 && minute >= 25 && minute <= 29 == true) { //przerwa4
            minute = minute - 30;
            minute = -minute;
            var przerwa = minute;
            roznica = przerwa + ' min. do końca przerwy';
        } else if (hour == 12 && minute >= 15 && minute <= 19) { //przerwa5
            minute = minute - 20;
            minute = -minute;
            var przerwa = minute;
            roznica = przerwa + ' min. do końca przerwy';
        } else if (hour == 13 && minute >= 5 && minute <= 9) { //przerwa6
            minute = minute - 10;
            minute = -minute;
            var przerwa = minute;
            roznica = przerwa + ' min. do końca przerwy';
        } else if (hour == 13 && minute >= 55 && minute <= 59) { //przerwa7
            minute = minute - 60;
            minute = -minute;
            var przerwa = minute;
            roznica = przerwa + ' min. do końca przerwy';
        } else if (hour == 14 && minute >= 45 && minute <= 49) { //przerwa8
            minute = minute - 50;
            minute = -minute;
            var przerwa = minute;
            roznica = przerwa + ' min. do końca przerwy';
        } else if (hour == 7 && minute >= 0 && minute <= 59) { //przerwa-rano-przed-8
            minute = minute - 60;
            minute = -minute;
            var przerwa = minute;
            roznica = przerwa + ' min. do początku lekcji';
        }
    }
    przerwaOdliczanie();

    document.getElementById("roznica").innerHTML =
        "Zostało: " + roznica;

}

weekDay();