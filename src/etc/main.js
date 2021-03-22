//MAIN.JS
const weekDay = () => {

    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let day = new Date().getDay();
    let df; //zmienna, ktora przechowuje roznice, w minutach (od ang. DiFfrence)

    day = 2;
    hour = 12;
    minute = 22;

    const dfHTML = document.getElementById("df");
    const weekdayHTML = document.getElementById('weekday');
    const hourHTML = document.getElementById('hour');

    function callAndDF(hours, minutes, hourLessFun, lFun) {
        df = -((hour * 60 + minute) - (hours * 60 + minutes));
        hourLessFun();
        return lFun();
    }

    function lessons(l1, l2, l3, l4, l5, l6, l7, l8) {
        if (hour == 8 && minute >= 00 && minute < 45 || hour == 7 && minute <= 59) callAndDF(8, 45, hourLesson1, l1);
        else if (hour == 8 && minute <= 50 || hour == 8 && minute >= 45 || hour == 9 && minute < 35) callAndDF(9, 35, hourLesson2, l2);
        else if (hour == 9 && minute >= 35 || hour == 10 && minute < 25) callAndDF(10, 25, hourLesson3, l3);
        else if (hour == 10 && minute >= 25 || hour == 11 && minute < 25) callAndDF(11, 25, hourLesson4, l4);
        else if (hour == 11 && minute >= 25 || hour == 12 && minute < 15) callAndDF(12, 15, hourLesson5, l5);
        else if (hour == 12 && minute >= 15 || hour == 13 && minute < 05) callAndDF(13, 5, hourLesson6, l6);
        else if (hour == 13 && minute <= 54) callAndDF(13, 55, hourLesson7, l7);
        else if (hour == 13 && minute >= 55 || hour == 14 && minute < 45) callAndDF(14, 45, hourLesson8, l8);
        else {
            dfHTML.style.display = "none";
            weekdayHTML.innerHTML = "Koniec lekcji na dziś, wróć jutro!";
        }
    }

    function dayHeader(dayName) {
        weekdayHTML.innerHTML = `Dzień: ${dayName}`;
    }

    switch (day) {
        case 0:
            {
                dayHeader("Dziś jest niedziela co oznacza brak lekcji!");
                dfHTML.style.display = "none";
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
                dfHTML.style.display = "none";
                break;
            }

    }

    //odliczanie czasu do końca lekcji
    const timeToEndLesson = () => {
        if (df >= 60 && df < 120) df = `1 godz. ${df-60}`;
        else if (df >= 120 && df < 120) df = `2 godz. ${df-120}`;
        else if (df >= 180 && df > 180) df = `3 godz. ${df-180}`;
        else if (df == undefined) df = 'Brak lekcji! 0';
    }

    //polnoc-6-rano
    const zeroSixHour = () => {
        if (hour <= 6 && hour >= 0) {
            let min = minute;
            let start;

            function zerosix() {
                dfHTML.style.display = "none";
                weekdayHTML.innerHTML = `Lekcja rozpocznie się za ${start} godz. `;
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

    //aktualna-godizna
    const nowHour = () => {
        let minuteShow = minute;
        if (minuteShow < 10) minuteShow = `0${minuteShow}`;
        hourHTML.innerHTML = `Aktualna godzina: ${hour}:${minuteShow}`;
        df += ' min. do końca lekcji';
    }

    //przerwa
    const breakCount = () => {
        function minutesBreak(x) {
            return df = `${-(minute - x)} min. do końca przerwy`;
        }
        if (hour == 8 && minute >= 45 && minute <= 49) minutesBreak(50);
        else if (hour == 9 && minute >= 35 && minute <= 39) minutesBreak(40);
        else if (hour == 10 && minute >= 25 && minute <= 39) minutesBreak(40);
        else if (hour == 11 && minute >= 25 && minute <= 29) minutesBreak(30);
        else if (hour == 12 && minute >= 15 && minute <= 19) minutesBreak(20);
        else if (hour == 13 && minute >= 5 && minute <= 9) minutesBreak(10);
        else if (hour == 13 && minute >= 55 && minute <= 59) minutesBreak(60);
        else if (hour == 14 && minute >= 45 && minute <= 49) minutesBreak(50)
        else if (hour == 7 && minute >= 0 && minute <= 59) minutesBreak(60);
    }

    // FUNCTION_CALL
    timeToEndLesson();
    zeroSixHour();
    nowHour();
    breakCount();

    dfHTML.innerHTML = `Zostało ${df}`;

}
weekDay();