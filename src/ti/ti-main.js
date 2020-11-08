//INFO-DNI-TYGODNIA
const weekDay = () => {

    let data = new Date();
    let hour = data.getHours();
    let m = new Date();
    let minute = m.getMinutes();

    // hour = 9;
    // minute = 45;

    var day = new Date().getDay();
    // day = 5;

    var godziny = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

    var minuty = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];



    switch (day) {
        case 0: //Niedziela
            {
                document.getElementById('weekday').innerHTML = "Dziś jest niedziela co oznacza brak lekcji!";
                document.getElementById('roznica').style.display = "none";
                break;
            }
        case 1: //Poniedziałek
            {
                // alert('Poniedziałek');
                document.getElementById('weekday').innerHTML = " Dzień: Poniedziałek";
                if (hour == 8 && minute >= 00 && minute < 45 || hour == 7 && minute <= 59) { //lekcja1
                    document.getElementById('weekday').innerHTML = lekcja[15];
                    var roznica = (hour * 60 + minute) - (godziny[8] * 60 + minuty[45]);
                    var roznica = -roznica;
                    godzina1();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[8];
                    break;
                } else if (hour == 8 && minute <= 50 || hour == 8 && minute >= 45 || hour == 9 && minute < 35) { //lekcja2
                    var roznica = (hour * 60 + minute) - (godziny[9] * 60 + minuty[35]);
                    var roznica = -roznica;
                    Programowanie();
                    godzina2();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[5];
                    break;
                } else if (hour == 9 && minute >= 35 || hour == 10 && minute < 25) { //lekcja3
                    var roznica = (hour * 60 + minute) - (godziny[10] * 60 + minuty[25]);
                    var roznica = -roznica;
                    Niemiecki();
                    NiemieckiMonia();
                    godzina3();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[2];
                    break;
                } else if (hour == 10 && minute >= 25 || hour == 11 && minute < 25) { //lekcja4
                    var roznica = (hour * 60 + minute) - (godziny[11] * 60 + minuty[25]);
                    var roznica = -roznica;
                    DzialanoscGospodarcza();
                    godzina4();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[6];
                    break;
                } else if (hour == 11 && minute >= 25 || hour == 12 && minute < 15) { //lekcja5
                    var roznica = (hour * 60 + minute) - (godziny[12] * 60 + minuty[15]);
                    var roznica = -roznica;
                    Polski();
                    godzina5();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[11];
                    break;
                } else if (hour == 12 && minute >= 15 || hour == 13 && minute < 05) { //lekcja6
                    var roznica = (hour * 60 + minute) - (godziny[13] * 60 + minuty[5]);
                    var roznica = -roznica;
                    SBD();
                    godzina6();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[4];
                    break;

                } else if (hour == 13 && minute <= 54) { //lekcja7
                    var roznica = (hour * 60 + minute) - (godziny[13] * 60 + minuty[55]);
                    var roznica = -roznica;
                    Angielski();
                    AngielskiKaska();
                    godzina7();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[14];
                    break;

                } else if (hour == 13 && minute <= 55 || hour == 14 && minute < 45) { //lekcja8
                    var roznica = (hour * 60 + minute) - (godziny[14] * 60 + minuty[45]);
                    var roznica = -roznica;
                    HIS();
                    godzina8();
                    document.getElementById('next').innerHTML = 'Następna lekcja: Koniec lekcji!';
                    break;
                } else {
                    document.getElementById('weekday').innerHTML = "Koniec lekcji na dziś, wróć jutro!";
                }
                break;


            }
        case 2: //Wtorek
            {
                // alert('Wtorek')
                document.getElementById('weekday').innerHTML = " Dzień: Wtorek";
                if (hour == 8 && minute >= 00 && minute < 45 || hour == 7 && minute <= 59) { //lekcja1
                    var roznica = (hour * 60 + minute) - (godziny[8] * 60 + minuty[45]);
                    var roznica = -roznica;
                    Polski();
                    godzina1();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[6];
                    break;
                } else if (hour == 8 && minute <= 50 || hour == 8 && minute >= 45 || hour == 9 && minute < 35) { //lekcja2
                    var roznica = (hour * 60 + minute) - (godziny[9] * 60 + minuty[35]);
                    var roznica = -roznica
                    Polski();
                    godzina2();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[7];
                    break;
                } else if (hour == 9 && minute >= 35 || hour == 10 && minute < 25) { //lekcja3
                    var roznica = (hour * 60 + minute) - (godziny[10] * 60 + minuty[25]);
                    var roznica = -roznica;
                    Matematyka();
                    godzina3();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[8];
                    break;
                } else if (hour == 10 && minute >= 25 || hour == 11 && minute < 25) { //lekcja4
                    var roznica = (hour * 60 + minute) - (godziny[11] * 60 + minuty[25]);
                    var roznica = -roznica;
                    Programowanie();
                    godzina4();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[13];
                    break;
                } else if (hour == 11 && minute >= 25 || hour == 12 && minute < 15) { //lekcja5
                    var roznica = (hour * 60 + minute) - (godziny[12] * 60 + minuty[15]);
                    var roznica = -roznica;
                    WF();
                    godzina5();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[3];
                    break;
                } else if (hour == 12 && minute >= 15 || hour == 13 && minute < 05) { //lekcja6
                    var roznica = (hour * 60 + minute) - (godziny[13] * 60 + minuty[5]);
                    var roznica = -roznica
                    AngielskiZawodowy();
                    godzina6();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[2];
                    break;

                } else if (hour == 13 && minute <= 54) { //lekcja7
                    var roznica = (hour * 60 + minute) - (godziny[13] * 60 + minuty[55]);
                    var roznica = -roznica
                    DzialanoscGospodarcza();
                    godzina7();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[10];
                    break;

                } else if (hour == 13 && minute >= 55 || hour == 14 && minute < 45) { //lekcja8
                    var roznica = (hour * 60 + minute) - (godziny[14] * 60 + minuty[45]);
                    var roznica = -roznica
                    Sieci();
                    godzina8();
                    document.getElementById('next').innerHTML = 'Następna lekcja: Koniec lekcji!';
                    break;
                } else {
                    document.getElementById('weekday').innerHTML = "Koniec lekcji na dziś, wróć jutro!";
                }

                break;


            }
        case 3: //Sroda
            {
                // alert('Środa')
                document.getElementById('weekday').innerHTML = " Dzień: Środa";
                if (hour == 8 && minute >= 00 && minute < 45 || hour == 7 && minute <= 59) { //lekcja1
                    var roznica = (hour * 60 + minute) - (godziny[8] * 60 + minuty[45]);
                    var roznica = -roznica;
                    document.getElementById('weekday').innerHTML = lekcja[15];
                    godzina1();
                    document.getElementById('next').innerHTML = 'Następna lekcja: Wolna=Religia';
                    break;
                } else if (hour == 8 && minute <= 50 || hour == 8 && minute >= 45 || hour == 9 && minute < 35) { //lekcja2
                    var roznica = (hour * 60 + minute) - (godziny[9] * 60 + minuty[35]);
                    var roznica = -roznica;
                    document.getElementById('weekday').innerHTML = "Lekcja wolna! Religia";
                    godzina2();
                    document.getElementById('next').innerHTML = 'Następna lekcja: Wychowcza';
                    break;
                } else if (hour == 9 && minute >= 35 || hour == 10 && minute < 25) { //lekcja3
                    var roznica = (hour * 60 + minute) - (godziny[10] * 60 + minuty[25]);
                    var roznica = -roznica;
                    document.getElementById("link").href = link[10];
                    document.getElementById("link").innerHTML = link[10];
                    document.getElementById("lekcja").innerHTML = 'Lekcja to: ' + lekcja[17];
                    document.getElementById("nauczyciel").innerHTML = " Nauczyciel: " + nauczyciel[12];
                    godzina3();
                    document.getElementById("nauczyciel").innerHTML = " Nauczyciel: " + nauczyciel[12];
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[7];
                    break;
                } else if (hour == 10 && minute >= 25 || hour == 11 && minute < 25) { //lekcja4
                    var roznica = (hour * 60 + minute) - (godziny[11] * 60 + minuty[25]);
                    var roznica = -roznica;
                    Matematyka();
                    godzina4();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[12];
                    break;
                } else if (hour == 11 && minute >= 25 || hour == 12 && minute < 15) { //lekcja5
                    var roznica = (hour * 60 + minute) - (godziny[12] * 60 + minuty[15]);
                    var roznica = -roznica;
                    Witryny();
                    godzina5();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[12];
                    break;


                } else if (hour == 12 && minute >= 15 || hour == 13 && minute < 05) { //lekcja6
                    var roznica = (hour * 60 + minute) - (godziny[13] * 60 + minuty[5]);
                    var roznica = -roznica;
                    Witryny();
                    godzina6();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[0];
                    break;

                } else if (hour == 13 && minute <= 54) { //lekcja7
                    var roznica = (hour * 60 + minute) - (godziny[13] * 60 + minuty[55]);
                    var roznica = -roznica
                    ABD();
                    godzina7();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[0];
                    break;

                } else if (hour == 13 && minute <= 55 || hour == 14 && minute < 45) { //lekcja8
                    var roznica = (hour * 60 + minute) - (godziny[14] * 60 + minuty[45]);
                    var roznica = -roznica;
                    ABD();
                    godzina8();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + 'Koniec lekcji!';
                    break;
                } else {
                    document.getElementById('weekday').innerHTML = "Koniec lekcji na dziś, wróć jutro!";
                }
                break;
            }
        case 4: //Czwartek
            {
                // alert('Czwartek')
                document.getElementById('weekday').innerHTML = " Dzień: Czwartek";
                if (hour == 8 && minute >= 00 && minute < 45 || hour == 7 && minute <= 59) { //lekcja1
                    var roznica = (hour * 60 + minute) - (godziny[8] * 60 + minuty[45]);
                    var roznica = -roznica;
                    Angielski();
                    AngielskiKaska();
                    godzina1();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[6];
                    break;
                } else if (hour == 8 && minute <= 50 || hour == 8 && minute >= 45 || hour == 9 && minute < 35) { //lekcja2
                    var roznica = (hour * 60 + minute) - (godziny[9] * 60 + minuty[35]);
                    var roznica = -roznica
                    Polski();
                    godzina2();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[5];
                    break;
                } else if (hour == 9 && minute >= 35 || hour == 10 && minute < 25) { //lekcja3
                    var roznica = (hour * 60 + minute) - (godziny[10] * 60 + minuty[25]);
                    var roznica = -roznica;
                    Niemiecki();
                    NiemieckiMonia();
                    godzina3();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[7];
                    break;
                } else if (hour == 10 && minute >= 25 || hour == 11 && minute < 25) { //lekcja4
                    var roznica = (hour * 60 + minute) - (godziny[11] * 60 + minuty[25]);
                    var roznica = -roznica;
                    Matematyka();
                    godzina4();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[13];
                    break;
                } else if (hour == 11 && minute >= 25 || hour == 12 && minute < 15) { //lekcja5
                    var roznica = (hour * 60 + minute) - (godziny[12] * 60 + minuty[15]);
                    var roznica = -roznica;
                    WF();
                    godzina5();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[9];
                    break;
                } else if (hour == 12 && minute >= 15 || hour == 13 && minute < 05) { //lekcja6
                    var roznica = (hour * 60 + minute) - (godziny[13] * 60 + minuty[5]);
                    var roznica = -roznica
                    PIMLSK();
                    godzina6();
                    document.getElementById('next').innerHTML = 'Następna lekcja: Koniec lekcji!';
                    break;

                } else {
                    document.getElementById('weekday').innerHTML = "Koniec lekcji na dziś, wróć jutro!";
                }

                break;

            }
        case 5: //Piatek
            {

                document.getElementById('weekday').innerHTML = " Dzień: Piątek";
                if (hour == 8 && minute >= 00 && minute < 45 || hour == 7 && minute <= 59) { //lekcja1
                    var roznica = (hour * 60 + minute) - (godziny[8] * 60 + minuty[45]);
                    var roznica = -roznica;
                    Matematyka();
                    godzina1();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[13];
                    break;
                } else if (hour == 8 && minute <= 50 || hour == 8 && minute >= 45 || hour == 9 && minute < 35) { //lekcja2
                    var roznica = (hour * 60 + minute) - (godziny[9] * 60 + minuty[35]);
                    var roznica = -roznica
                    WF();
                    godzina2();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[4];
                    break;
                } else if (hour == 9 && minute >= 35 || hour == 10 && minute < 25) { //lekcja3
                    var roznica = (hour * 60 + minute) - (godziny[10] * 60 + minuty[25]);
                    var roznica = -roznica;
                    Angielski();
                    AngielskiKaska();
                    godzina3();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[10];
                    break;
                } else if (hour == 10 && minute >= 25 || hour == 11 && minute < 25) { //lekcja4
                    var roznica = (hour * 60 + minute) - (godziny[11] * 60 + minuty[25]);
                    var roznica = -roznica;
                    Sieci();
                    godzina4();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[10];
                    break;
                } else if (hour == 11 && minute >= 25 || hour == 12 && minute < 15) { //lekcja5
                    var roznica = (hour * 60 + minute) - (godziny[12] * 60 + minuty[15]);
                    var roznica = -roznica;
                    Sieci();
                    godzina5();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[10];
                    break;
                } else if (hour == 12 && minute >= 15 || hour == 13 && minute < 05) { //lekcja6
                    var roznica = (hour * 60 + minute) - (godziny[13] * 60 + minuty[5]);
                    var roznica = -roznica
                    Sieci();
                    godzina6();
                    document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[9];
                    break;

                } else if (hour == 13 && minute <= 54) { //lekcja7
                    var roznica = (hour * 60 + minute) - (godziny[13] * 60 + minuty[55]);
                    var roznica = -roznica
                    PIMLSK();
                    godzina7();
                    document.getElementById('next').innerHTML = 'Następna lekcja: Koniec lekcji!';
                    break;

                } else {
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

    // alert("Zostało: " + roznica + ' min. do końca lekcji');



    // document.getElementById("roznica").innerHTML =
    //     "Zostało: " + roznica + ' min. do końca lekcji';

    //aktualna-godizna
    if (minute < 10) {
        minute = "0" + minute;
    }
    document.getElementById('hour').innerHTML = 'Aktualna godzina: ' + hour + ':' + minute;
    roznica = roznica + ' min. do końca lekcji';

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

    document.getElementById("roznica").innerHTML =
        "Zostało: " + roznica;

}

weekDay();