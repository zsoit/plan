//MAIN.JS
const weekDay = () => {

    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let day = new Date().getDay();

    let hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

    let minutes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];

    let df; //zmienna, ktora przechowuje roznice, w minutach (od ang. DiFfrence)

    // day = 3;
    // hour = 9;
    // minute = 41;

    function lessons(l1, l2, l3, l4, l5, l6, l7, l8) {
        if (hour == 8 && minute >= 00 && minute < 45 || hour == 7 && minute <= 59) {
            df = (hour * 60 + minute) - (hours[8] * 60 + minutes[45]);
            df = -df;
            hourLesson1();
            return l1();
        } else if (hour == 8 && minute <= 50 || hour == 8 && minute >= 45 || hour == 9 && minute < 35) {
            df = (hour * 60 + minute) - (hours[9] * 60 + minutes[35]);
            df = -df;
            hourLesson2();
            return l2();
        } else if (hour == 9 && minute >= 35 || hour == 10 && minute < 25) {
            df = (hour * 60 + minute) - (hours[10] * 60 + minutes[25]);
            df = -df;
            hourLesson3();
            return l3();
        } else if (hour == 10 && minute >= 25 || hour == 11 && minute < 25) {
            df = (hour * 60 + minute) - (hours[11] * 60 + minutes[25]);
            df = -df;
            hourLesson4();
            return l4();
        } else if (hour == 11 && minute >= 25 || hour == 12 && minute < 15) {
            df = (hour * 60 + minute) - (hours[12] * 60 + minutes[15]);
            df = -df;
            hourLesson5();
            return l5();
        } else if (hour == 12 && minute >= 15 || hour == 13 && minute < 05) {
            df = (hour * 60 + minute) - (hours[13] * 60 + minutes[5]);
            df = -df;
            hourLesson6();
            return l6();

        } else if (hour == 13 && minute <= 54) {
            df = (hour * 60 + minute) - (hours[13] * 60 + minutes[55]);
            df = -df;
            hourLesson7();
            return l7();

        } else if (hour == 13 && minute >= 55 || hour == 14 && minute < 45) {
            df = (hour * 60 + minute) - (hours[14] * 60 + minutes[45]);
            df = -df;
            hourLesson8();
            return l8();
        } else {
            document.getElementById('df').style.display = "none";
            document.getElementById('weekday').innerHTML = "Koniec lekcji na dziś, wróć jutro!";
        }
    }

    function dayHeader(dayName) {
        document.getElementById('weekday').innerHTML = " Dzień: " + dayName;
    }

    switch (day) {
        case 0:
            {
                dayHeader("Dziś jest niedziela co oznacza brak lekcji!");
                document.getElementById('df').style.display = "none";
                break;
            }
        case 1:
            {
                dayHeader('Poniedziałek');
                lessons(plan.pon.l1, plan.pon.l2, plan.pon.l3, plan.pon.l4, plan.pon.l5, plan.pon.l6, plan.pon.l7, plan.pon.l8);
                break;
            }
        case 2:
            {
                dayHeader('Wtorek');
                lessons(plan.wt.l1, plan.wt.l2, plan.wt.l3, plan.wt.l4, plan.wt.l5, plan.wt.l6, plan.wt.l7, plan.wt.l8);
                break;
            }
        case 3:
            {
                dayHeader('Środa');
                lessons(plan.sr.l1, plan.sr.l2, plan.sr.l3, plan.sr.l4, plan.sr.l5, plan.sr.l6, plan.sr.l7, plan.sr.l8)
                break;
            }
        case 4:
            {
                dayHeader('Czwartek');
                lessons(plan.czw.l1, plan.czw.l2, plan.czw.l3, plan.czw.l4, plan.czw.l5, plan.czw.l6, plan.czw.l7, plan.czw.l8);
                break;

            }
        case 5:
            {
                dayHeader('Piątek');
                lessons(plan.pt.l1, plan.pt.l2, plan.pt.l3, plan.pt.l4, plan.pt.l5, plan.pt.l6, plan.pt.l7, plan.pt.l8);
                break;
            }
        case 6:
            {
                dayHeader("Dziś jest sobota co oznacza brak lekcji!");
                document.getElementById('df').style.display = "none";
                break;
            }

    }

    //Odliczanie czasu do końca lekcji
    const timeToEndLesson = () => {
        if (df >= 60 && df < 120) {
            df = df - 60;
            df = "1 godz. " + df;
        } else if (df >= 120 && df < 120) {
            df = df - 120;
            df = "2 godz. " + df;
        } else if (df >= 180 && df > 180) {
            df = df - 180;
            df = "3 godz. " + df;
        } else if (df == undefined) {
            df = 'Brak lekcji! 0'

        } else {
            df = df;
        }
    }
    timeToEndLesson();

    //polnoc-6-rano
    const zeroSixHour = () => {
        if (hour <= 6 && hour >= 0) {
            var min = minute;
            var start;

            function zerosix() {
                document.getElementById('df').style.display = "none";
                document.getElementById('weekday').innerHTML = "Lekcja rozpocznie się za " + start + " godz. ";
            }
            if (min == 0) {
                start = 8 - hour;
                zerosix();
            } else if (hour == 6) {
                min = 60 - minute;
                if (hour == 6) {
                    start = 1;
                    zerosix();
                }
            } else {
                start = 7 - hour;
                min = 60 - minute;
                zerosix();
            }


        }
    }
    zeroSixHour();

    //aktualna-godizna
    //DODAWANIE ZERA DO WYSIETLANIA, JEZELI MINUTA JEST mnijesz od 10
    let minuteShow = minute;
    const nowHour = () => {
        if (minuteShow < 10) {
            minuteShow = "0" + minuteShow;
        }
        document.getElementById('hour').innerHTML = 'Aktualna godzina: ' + hour + ':' + minuteShow;
        df = df + ' min. do końca lekcji';
    }
    nowHour();


    //PRZERWA
    const breakCount = () => {
        let breakVar;

        function breakFun() {
            minute = -minute;
            breakVar = minute;
            df = breakVar + ' min. do końca przerwy';
        }
        if (hour == 8 && minute >= 45 && minute <= 49 == true) {
            minute = minute - 50;
            breakFun();
        } else if (hour == 9 && minute >= 35 && minute <= 39 == true) {
            minute = minute - 40;
            breakFun();
        } else if (hour == 10 && minute >= 25 && minute <= 39 == true) {
            minute = minute - 40;
            breakFun();
        } else if (hour == 11 && minute >= 25 && minute <= 29 == true) {
            minute = minute - 30;
            breakFun();
        } else if (hour == 12 && minute >= 15 && minute <= 19) {
            minute = minute - 20;
            minute = -minute;
            breakFun();
        } else if (hour == 13 && minute >= 5 && minute <= 9) {
            minute = minute - 10;
            breakFun();
        } else if (hour == 13 && minute >= 55 && minute <= 59) {
            minute = minute - 60;
            breakFun();
        } else if (hour == 14 && minute >= 45 && minute <= 49) {
            minute = minute - 50;
            breakFun();
        } else if (hour == 7 && minute >= 0 && minute <= 59) {
            minute = minute - 60;
            breakFun();
        }
    }
    breakCount();

    document.getElementById("df").innerHTML =
        "Zostało: " + df;

}
weekDay();