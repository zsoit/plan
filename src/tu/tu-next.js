const PoniedzialekDay = () => {
    day = 1;
    basicDay();
}

const WtorekDay = () => {
    day = 2;
    basicDay();
}

const SrodaDay = () => {
    day = 3;
    basicDay();
}

const CzwartekDay = () => {
    day = 4;
    basicDay();
}

const PiatekDay = () => {
    day = 5;
    basicDay();
}

const basicDay = () => {




    document.getElementById('1h').innerHTML = '8.00 - 8:45';
    document.getElementById('2h').innerHTML = '8.50 - 9:35';
    document.getElementById('3h').innerHTML = '9.40 - 10:25';
    document.getElementById('4h').innerHTML = '10:40 - 11:25';
    document.getElementById('5h').innerHTML = '11:30 - 12:15';
    document.getElementById('6h').innerHTML = '12:20 - 13:05';
    document.getElementById('7h').innerHTML = '13:10 - 13:55';
    document.getElementById('8h').innerHTML = '14:00 - 14:45';

    // var day = new Date().getDay();
    // day = 2;
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
                document.getElementById('lekcja2').innerHTML = "2." + lekcja[19];
                document.getElementById('lekcja3').innerHTML = "3." + lekcja[5];
                document.getElementById('lekcja4').innerHTML = "4." + lekcja[20];
                document.getElementById('lekcja5').innerHTML = "5." + lekcja[6];
                document.getElementById('lekcja6').innerHTML = "6." + lekcja[21];
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
                document.getElementById('lekcja4').innerHTML = "4." + lekcja[19];
                document.getElementById('lekcja5').innerHTML = "5." + lekcja[13];
                document.getElementById('lekcja6').innerHTML = "6." + lekcja[22];
                document.getElementById('lekcja7').innerHTML = "7." + lekcja[23];
                document.getElementById('lekcja8').innerHTML = "8." + lekcja[22];

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
                document.getElementById('lekcja5').innerHTML = "5." + lekcja[24];
                document.getElementById('lekcja6').innerHTML = "6." + lekcja[24];
                document.getElementById('lekcja7').innerHTML = "7." + lekcja[24];
                document.getElementById('lekcja8').innerHTML = "8." + lekcja[16];

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
                document.getElementById('lekcja6').innerHTML = "6." + lekcja[20];
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
                document.getElementById('lekcja4').innerHTML = "4." + lekcja[20];
                document.getElementById('lekcja5').innerHTML = "5." + lekcja[25];
                document.getElementById('lekcja6').innerHTML = "6." + lekcja[25];
                document.getElementById('lekcja7').innerHTML = "7." + lekcja[25];
                document.getElementById('lekcja8').innerHTML = "8." + lekcja[25];


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

}