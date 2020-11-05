// PLAN na cały tydzień;


const newDay = () => {

    document.getElementById('1h').innerHTML = '8.00 - 8:45';
    document.getElementById('2h').innerHTML = '8.50 - 9:35';
    document.getElementById('3h').innerHTML = '9.40 - 10:25';
    document.getElementById('4h').innerHTML = '10:40 - 11:25';
    document.getElementById('5h').innerHTML = '11:30 - 12:15';
    document.getElementById('6h').innerHTML = '12:20 - 13:05';
    document.getElementById('7h').innerHTML = '13:10 - 13:55';
    document.getElementById('8h').innerHTML = '14:00 - 14:45';

    var day = new Date().getDay();
    // day = 1;
    switch (day) {
        case 0: //Niedziela
            {

                // alert('Niedziela');
                document.getElementById('dzien').innerHTML = 'Niedziela';
                document.getElementById('lekcja1').innerHTML = "1." + lekcja[18];
                document.getElementById('lekcja2').innerHTML = "2." + lekcja[18];
                document.getElementById('lekcja3').innerHTML = "3." + lekcja[18];
                document.getElementById('lekcja4').innerHTML = "4." + lekcja[18];
                document.getElementById('lekcja5').innerHTML = "5." + lekcja[18];
                document.getElementById('lekcja6').innerHTML = "6." + lekcja[18];
                document.getElementById('lekcja7').innerHTML = "7." + lekcja[18];
                document.getElementById('lekcja8').innerHTML = "8." + lekcja[18];


                break;
            }
        case 1: //Poniedziałek
            {

                // alert('Poniedziałek');

                document.getElementById('dzien').innerHTML = 'Poniedziałek';
                document.getElementById('lekcja1').innerHTML = "1." + lekcja[15];
                document.getElementById('lekcja2').innerHTML = "2." + lekcja[8];
                document.getElementById('lekcja3').innerHTML = "3." + lekcja[5];
                document.getElementById('lekcja4').innerHTML = "4." + lekcja[2];
                document.getElementById('lekcja5').innerHTML = "5." + lekcja[6];
                document.getElementById('lekcja6').innerHTML = "6." + lekcja[11];
                document.getElementById('lekcja7').innerHTML = "7." + lekcja[4];
                document.getElementById('lekcja8').innerHTML = "8." + lekcja[14];


                break;



            }
        case 2: //Wtorek
            {
                // alert('Wtorek');
                document.getElementById('dzien').innerHTML = 'Wtorek';
                document.getElementById('lekcja1').innerHTML = "1." + lekcja[6];
                document.getElementById('lekcja2').innerHTML = "2." + lekcja[6];
                document.getElementById('lekcja3').innerHTML = "3." + lekcja[7];
                document.getElementById('lekcja4').innerHTML = "4." + lekcja[8];
                document.getElementById('lekcja5').innerHTML = "5." + lekcja[13];
                document.getElementById('lekcja6').innerHTML = "6." + lekcja[3];
                document.getElementById('lekcja7').innerHTML = "7." + lekcja[2];
                document.getElementById('lekcja8').innerHTML = "8." + lekcja[10];

                break;


            }
        case 3: //Sroda
            {

                // alert('Środa');
                document.getElementById('dzien').innerHTML = 'Środa';
                document.getElementById('lekcja1').innerHTML = "1." + lekcja[15];
                document.getElementById('lekcja2').innerHTML = "2." + lekcja[15];
                document.getElementById('lekcja3').innerHTML = "3." + lekcja[17];
                document.getElementById('lekcja4').innerHTML = "4." + lekcja[7];
                document.getElementById('lekcja5').innerHTML = "5." + lekcja[12];
                document.getElementById('lekcja6').innerHTML = "6." + lekcja[12];
                document.getElementById('lekcja7').innerHTML = "7." + lekcja[0];
                document.getElementById('lekcja8').innerHTML = "8." + lekcja[0];

                break;


            }

        case 4: //Czwartek
            {
                // alert('Czwartek');
                document.getElementById('dzien').innerHTML = 'Czwartek';
                document.getElementById('lekcja1').innerHTML = "1." + lekcja[4];
                document.getElementById('lekcja2').innerHTML = "2." + lekcja[6];
                document.getElementById('lekcja3').innerHTML = "3." + lekcja[5];
                document.getElementById('lekcja4').innerHTML = "4." + lekcja[7];
                document.getElementById('lekcja5').innerHTML = "5." + lekcja[13];
                document.getElementById('lekcja6').innerHTML = "6." + lekcja[9];
                document.getElementById('lekcja7').innerHTML = "7." + lekcja[16];
                document.getElementById('lekcja8').innerHTML = "8." + lekcja[16];

                break;
            }
        case 5: //Piatek
            {

                document.getElementById('dzien').innerHTML = 'Piątek';
                document.getElementById('lekcja1').innerHTML = "1." + lekcja[7];
                document.getElementById('lekcja2').innerHTML = "2." + lekcja[13];
                document.getElementById('lekcja3').innerHTML = "3." + lekcja[4];
                document.getElementById('lekcja4').innerHTML = "4." + lekcja[10];
                document.getElementById('lekcja5').innerHTML = "5." + lekcja[10];
                document.getElementById('lekcja6').innerHTML = "6." + lekcja[10];
                document.getElementById('lekcja7').innerHTML = "7." + lekcja[9];
                document.getElementById('lekcja8').innerHTML = "8." + lekcja[16];


                break;


            }
        case 6: //Sobota
            {
                // alert('Sobota')
                document.getElementById('dzien').innerHTML = 'Sobota';
                document.getElementById('lekcja1').innerHTML = "1." + lekcja[18];
                document.getElementById('lekcja2').innerHTML = "2." + lekcja[18];
                document.getElementById('lekcja3').innerHTML = "3." + lekcja[18];
                document.getElementById('lekcja4').innerHTML = "4." + lekcja[18];
                document.getElementById('lekcja5').innerHTML = "5." + lekcja[18];
                document.getElementById('lekcja6').innerHTML = "6." + lekcja[18];
                document.getElementById('lekcja7').innerHTML = "7." + lekcja[18];
                document.getElementById('lekcja8').innerHTML = "8." + lekcja[18];

                break;
            }
    }

    if (minute < 10) {
        minute = "0" + minute;
    }
    document.getElementById('godzina2').innerHTML = "<b>Godzina: </b>" +
        hour + ":" + minute;


}

newDay();

// document.getElementById('next').innerHTML = 'Następna lekcja: ' + lekcja[12];