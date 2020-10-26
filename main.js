    //DNI-TYGODNIA__MAIN




    const weekDay = () => {

        let data = new Date();
        let hour = data.getHours();
        let m = new Date();
        let minute = m.getMinutes();

        var day = new Date().getDay();
        // day = 1;


        switch (day) {
            case 0:
                {
                    document.getElementById('weekday').innerHTML = "Dziś jest niedziela co oznacza brak lekcji!";
                    alert('Niedziela')
                    break;
                }
            case 1: //Poniedziałek
                {
                    //hour = 8;
                    //minute = 44;
                    alert('Poniedziałek');
                    document.getElementById('weekday').innerHTML = " Dzień: Poniedziałek";
                    document.getElementById('hour').innerHTML = 'Aktualna godzina: ' + hour + ':' + minute;
                    // document.getElementById('roznica').innerHTML = 'Zostało: ' + roznica;

                    if (hour == 8 && minute > 00 && minute < 45 || hour == 7 && minute <= 59) { //lekcja1
                        document.getElementById('weekday').innerHTML = "Lekcja wolna!";
                        godzina1();
                        break;
                    } else if (hour == 8 && minute <= 50 || hour == 8 && minute >= 45 || hour == 9 && minute < 35) { //lekcja2
                        Programowanie();
                        godzina2();
                        break;
                    } else if (hour == 9 && minute >= 35 || hour == 10 && minute < 25) { //lekcja3
                        Niemiecki();
                        godzina3();
                        break;
                    } else if (hour == 10 && minute >= 25 || hour == 11 && minute < 25) { //lekcja4
                        DzialanoscGospodarcza();
                        godzina4();
                        break;
                    } else if (hour == 11 && minute >= 25 || hour == 12 && minute < 15) { //lekcja5
                        Polski();
                        godzina5();
                        break;
                    } else if (hour == 12 && minute >= 15 || hour == 13 && minute < 05) { //lekcja6
                        SBD();
                        godzina6();
                        break;

                    } else if (hour == 13 && minute <= 54) { //lekcja7
                        Angielski();
                        godzina7();
                        break;

                    } else if (hour == 13 && minute <= 55 || hour == 14 && minute < 45) { //lekcja8
                        HIS();
                        godzina8();
                        break;
                    } else {
                        document.getElementById('weekday').innerHTML = "Koniec lekcji na dziś, wróć jutro!";
                    }
                    break;


                }
            case 2: //Wtorek
                {
                    //hour = 8;
                    //minute = 55;
                    alert('Wtorek')
                    document.getElementById('weekday').innerHTML = " Dzień: Wtorek";
                    document.getElementById('hour').innerHTML = 'Aktualna godzina: ' + hour + ':' + minute;
                    // document.getElementById('roznica').innerHTML = 'Zostało: ' + roznica;
                    if (hour == 8 && minute > 00 && minute < 45 || hour == 7 && minute <= 59) { //lekcja1
                        Polski();
                        godzina1();
                        break;
                    } else if (hour == 8 && minute <= 50 || hour == 8 && minute >= 45 || hour == 9 && minute < 35) { //lekcja2
                        Polski();
                        godzina2();
                        break;
                    } else if (hour == 9 && minute >= 35 || hour == 10 && minute < 25) { //lekcja3
                        Matematyka();
                        godzina3();
                        break;
                    } else if (hour == 10 && minute >= 25 || hour == 11 && minute < 25) { //lekcja4
                        Programowanie();
                        godzina4();
                        break;
                    } else if (hour == 11 && minute >= 25 || hour == 12 && minute < 15) { //lekcja5
                        WF();
                        godzina5();
                        break;
                    } else if (hour == 12 && minute >= 15 || hour == 13 && minute < 05) { //lekcja6
                        AngielskiZawodowy();
                        godzina6();
                        break;

                    } else if (hour == 13 && minute <= 54) { //lekcja7
                        DzialanoscGospodarcza();
                        godzina7();
                        break;

                    } else if (hour == 13 && minute <= 55 || hour == 14 && minute < 45) { //lekcja8
                        Sieci();
                        godzina8();
                        break;
                    } else {
                        document.getElementById('weekday').innerHTML = "Koniec lekcji na dziś, wróć jutro!";
                    }
                    break;


                }
            case 3: //Sroda
                {
                    alert('Środa')
                    document.getElementById('weekday').innerHTML = " Dzień: Środa";
                    document.getElementById('hour').innerHTML = 'Aktualna godzina: ' + hour + ':' + minute;
                    // document.getElementById('roznica').innerHTML = 'Zostało: ' + roznica;
                    if (hour == 8 && minute > 00 && minute < 45 || hour == 7 && minute <= 59) { //lekcja1
                        document.getElementById('weekday').innerHTML = "Lekcja wolna!";
                        godzina1();
                        break;
                    } else if (hour == 8 && minute <= 50 || hour == 8 && minute >= 45 || hour == 9 && minute < 35) { //lekcja2
                        document.getElementById('weekday').innerHTML = "Lekcja wolna! Religia";
                        godzina2();
                        break;
                    } else if (hour == 9 && minute >= 35 || hour == 10 && minute < 25) { //lekcja3
                        document.getElementById('weekday').innerHTML = "Wychowawcza!";
                        godzina3();
                        break;
                    } else if (hour == 10 && minute >= 25 || hour == 11 && minute < 25) { //lekcja4
                        Matematyka();
                        godzina4();
                        break;
                    } else if (hour == 11 && minute >= 25 || hour == 12 && minute < 15) { //lekcja5
                        Witryny();
                        godzina5();
                        break;
                    } else if (hour == 12 && minute >= 15 || hour == 13 && minute < 05) { //lekcja6
                        Witryny();
                        godzina6();
                        break;

                    } else if (hour == 13 && minute <= 54) { //lekcja7
                        ABD();
                        godzina7();
                        break;

                    } else if (hour == 13 && minute <= 55 || hour == 14 && minute < 45) { //lekcja8
                        ABD();
                        godzina8();
                        break;
                    } else {
                        document.getElementById('weekday').innerHTML = "Koniec lekcji na dziś, wróć jutro!";
                    }
                    break;
                }
            case 4: //Czwartek
                {
                    alert('Czwartek');
                    document.getElementById('weekday').innerHTML = " Dzień: Czwartek";
                    document.getElementById('hour').innerHTML = 'Aktualna godzina: ' + hour + ':' + minute;

                    if (hour == 8 && minute > 00 && minute <= 45 || hour == 7 && minute <= 59) { //lekcja1
                        Angielski();
                        godzina1();
                        break;
                    } else if (hour == 8 && minute <= 50 || hour == 8 && minute >= 45 || hour == 9 && minute < 35) { //lekcja2
                        Polski();
                        godzina2();
                        break;
                    } else if (hour == 9 && minute >= 35 || hour == 10 && minute < 25) { //lekcja3
                        Niemiecki();
                        godzina3();
                        break;
                    } else if (hour == 10 && minute >= 25 || hour == 11 && minute < 25) { //lekcja4
                        Matematyka();
                        godzina4();
                        break;
                    } else if (hour == 11 && minute >= 25 || hour == 12 && minute < 15) { //lekcja5
                        WF();
                        godzina5();
                        break;
                    } else if (hour == 12 && minute >= 15 || hour == 13 && minute < 05) { //lekcja6
                        PIMLSK();
                        godzina6();
                        break;

                    } else {
                        document.getElementById('weekday').innerHTML = "Koniec lekcji na dziś, wróć jutro!";
                    }
                    break;
                }
            case 5: //Piatek
                {

                    alert('Piątek');
                    document.getElementById('weekday').innerHTML = " Dzień: Piątek";
                    document.getElementById('hour').innerHTML = 'Aktualna godzina: ' + hour + ':' + minute;
                    // document.getElementById('roznica').innerHTML = 'Zostało: ' + roznica;
                    if (hour == 8 && minute > 00 && minute <= 45 || hour == 7 && minute <= 59) { //lekcja1
                        Matematyka();
                        godzina1();
                        break;
                    } else if (hour == 8 && minute <= 50 || hour == 8 && minute >= 45 || hour == 9 && minute < 35) { //lekcja2
                        WF();
                        godzina2();
                        break;
                    } else if (hour == 9 && minute >= 35 || hour == 10 && minute < 25) { //lekcja3
                        Angielski();
                        godzina3();
                        break;
                    } else if (hour == 10 && minute >= 25 || hour == 11 && minute < 25) { //lekcja4
                        Sieci();
                        godzina4();
                        break;
                    } else if (hour == 11 && minute >= 25 || hour == 12 && minute < 15) { //lekcja5
                        Sieci();
                        godzina5();
                        break;
                    } else if (hour == 12 && minute >= 15 || hour == 13 && minute < 05) { //lekcja6
                        Sieci();
                        godzina6();
                        break;

                    } else if (hour == 13 && minute <= 54) { //lekcja7
                        PIMLSK();
                        godzina7();
                        break;

                    } else {
                        document.getElementById('weekday').innerHTML = "Koniec lekcji na dziś, wróć jutro!";
                    }
                    break;


                }
            case 6:
                {
                    document.getElementById('weekday').innerHTML = "Dziś jest sobota co oznacza brak lekcji!";
                    alert('Sobota')
                    break;
                }
        }


    }

    weekDay();