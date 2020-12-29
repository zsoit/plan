function showName(teacher, id) {
    document.querySelector(id).innerHTML = teacher;
}

function showURL(link, id) {
    document.querySelector(id).innerHTML = link;
    document.querySelector(id).href = link;
}

function pItem(item, lection, hour) {
    document.querySelector(item).innerHTML = lection + hour;
}

function showElementsInHTML(id, stringText) {
    document.querySelector(id).innerHTML = stringText;
}

const tiNameAndUrl = () => {
    showName(teacher[7], '.tk_name');
    showURL(link[7], ".tk_url");
    showName(teacher[0], '.bf_name');
    showURL(link[0], ".bf_url");
    showName(teacher[1], '.el_name');
    showURL(link[1], ".el_url");
    showName(teacher[2], '.kk_name');
    showURL(link[2], ".kk_url");
    showName(teacher[6], '.lk_name');
    showURL(link[6], ".lk_url");
    showName(teacher[5], '.mm_name');
    showURL(link[5], ".mm_url");
    showName(teacher[9], '.bs_name');
    showURL(link[9], ".bs_url");
}

const allNameAndUrl = () => {
    showName(teacher[3], '.ab_name');
    showURL(link[3], ".ab_url");
    showName(teacher[13], '.kz_name');
    showURL(link[11], ".kz_url");
    showName(teacher[4], '.al_name');
    showURL(link[4], ".al_url");
    showName(teacher[3], '.ab_name');
    showURL(link[3], ".ab_url");
    showName(teacher[12], '.mom_name');
    showURL(link[10], ".mom_url");
}

const pItems = () => {
        pItem('#pItem1', lection[0], '(2h)');
        pItem('#pItem2', lection[11], '(1h)');
        pItem('#pItem3', lection[9], '(2h)');
        pItem('#pItem4', lection[10], '(4h)');
        pItem('#pItem5', lection[2], '(2h)');
        pItem('#pItem6', lection[3], '(1h)');
        pItem('#pItem7', lection[8], '(2h)');
        pItem('#pItem8', lection[12], '(2h)');
        pItem('#pItem9', lection[7], '(2h)');
        pItem('#pItem10', lection[4], '(4h)');
        pItem('#pItem11', lection[5], '(3h)');
        pItem('#pItem12', lection[6], '(2h)');
        pItem('#pItem13', lection[14], '(4h)');
        pItem('#pItem14', lection[13], '(1h)');
        pItem('#pItem15', lection[17], '(1h)');
        pItem('#pItem16', lection[26], '(1h)');
        document.querySelector("#pItem__footer").innerHTML = "Ilość godzin lekcyjnych w tygodniu: 36h <br> Ilość godzin zawodowych w tygodniu: 16h <br>";
    }
    //HTML-ELEMENTS-STATIC
    // showElementsInHTML('title', 'Plan lekcji 3TI - 2021');
document.title = "Plan lekcji 3TI - 2021";
showElementsInHTML('.copyright', '&copy 2021 Jakub Achtelik - All Rights Reserved');
showElementsInHTML('#avg', 'Oblicz swoją średnią');
showElementsInHTML('#header_now_lesson', 'Aktualna lekcja: ');
showElementsInHTML('#header_url1', 'ZAWODOWE');
showElementsInHTML('#header_url2', 'INNE');
showElementsInHTML('#header_items', 'PRZEDMIOTY');

tiNameAndUrl();
allNameAndUrl();
pItems();