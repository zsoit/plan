day = new Date().getDay();
// day = 6;
let mon, tue, wed, thu, fri;

function changeWeekDay(item, id, valueOfDay) {
    item = document.querySelector(id);
    item.addEventListener('click', function() {
        day = valueOfDay;
        basicDay();
    });
}
changeWeekDay(mon, "#mon", 1);
changeWeekDay(tue, "#tue", 2);
changeWeekDay(wed, "#wed", 3);
changeWeekDay(thu, "#thu", 4);
changeWeekDay(fri, "#fri", 5);

function hourH(h, time) {
    document.getElementById(h).innerHTML = time;
}
hourH('1h', '8.00 - 8:45');
hourH('2h', '8.50 - 9:35');
hourH('3h', '9.40 - 10:25');
hourH('4h', '10:40 - 11:25');
hourH('5h', '11:30 - 12:15');
hourH('6h', '12:20 - 13:05');
hourH('7h', '13:10 - 13:55');
hourH('8h', '14:00 - 14:45');



function Wname(name) {
    document.getElementById('dayName').innerHTML = name;

}

function WLesson(id, nr, lesson) {
    document.getElementById(id).innerHTML = nr + lesson;

}

function Wlessons(l1, l2, l3, l4, l5, l6, l7, l8) {
    WLesson('item__lesson1', '1.', l1);
    WLesson('item__lesson2', '2.', l2);
    WLesson('item__lesson3', '3.', l3);
    WLesson('item__lesson4', '4.', l4);
    WLesson('item__lesson5', '5.', l5);
    WLesson('item__lesson6', '6.', l6);
    WLesson('item__lesson7', '7.', l7);
    WLesson('item__lesson8', '8.', l8);
}


const basicDay = () => {


    switch (day) {
        case 0:
            {
                Wname('Niedziela');
                Wlessons(wolne, wolne, wolne, wolne, wolne, wolne, wolne, wolne);
                break;
            }
        case 1:
            {

                Wname('Poniedziałek');
                Wlessons(pon1, pon2, pon3, pon4, pon5, pon6, pon7, pon8);
                break;


            }
        case 2:
            {
                Wname('Wtorek');
                Wlessons(wt1, wt2, wt3, wt4, wt5, wt6, wt7, wt8);
                break;
            }
        case 3:
            {
                Wname('Środa');
                Wlessons(sr1, sr2, sr3, sr4, sr5, sr6, sr7, sr8);
                break;
            }

        case 4:
            {
                Wname('Czwartek');
                Wlessons(czw1, czw2, czw3, czw4, czw5, czw6, czw7, czw8);
                break;
            }
        case 5:
            {

                Wname('Piątek');
                Wlessons(pt1, pt2, pt3, pt4, pt5, pt6, pt7, pt8);
                break;
            }
        case 6:
            {
                Wname('Sobota');
                Wlessons(wolne, wolne, wolne, wolne, wolne, wolne, wolne, wolne);
                break;
            }
    }

}

basicDay();