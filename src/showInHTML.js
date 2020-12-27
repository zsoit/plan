function showName(nauczyciel, id) {
    document.querySelector(id).innerHTML = nauczyciel;
}

function showURL(link, id) {
    document.querySelector(id).innerHTML = link;
    document.querySelector(id).href = link;
}

function pItem(item, lekcja, hour) {
    document.querySelector(item).innerHTML = lekcja + hour;
}

const tiNameAndUrl = () => {
    showName(nauczyciel[7], '.tk_name');
    showURL(link[7], ".tk_url");
    showName(nauczyciel[0], '.bf_name');
    showURL(link[0], ".bf_url");
    showName(nauczyciel[1], '.el_name');
    showURL(link[1], ".el_url");
    showName(nauczyciel[2], '.kk_name');
    showURL(link[2], ".kk_url");
    showName(nauczyciel[6], '.lk_name');
    showURL(link[6], ".lk_url");
    showName(nauczyciel[5], '.mm_name');
    showURL(link[5], ".mm_url");
    showName(nauczyciel[9], '.bs_name');
    showURL(link[9], ".bs_url");
}

const allNameAndUrl = () => {
    showName(nauczyciel[3], '.ab_name');
    showURL(link[3], ".ab_url");
    showName(nauczyciel[13], '.kz_name');
    showURL(link[11], ".kz_url");
    showName(nauczyciel[4], '.al_name');
    showURL(link[4], ".al_url");
    showName(nauczyciel[3], '.ab_name');
    showURL(link[3], ".ab_url");
    showName(nauczyciel[12], '.mom_name');
    showURL(link[10], ".mom_url");
}

const pItems = () => {
    pItem('#pItem1', lekcja[0], '(2h)');
    pItem('#pItem2', lekcja[11], '(1h)');
    pItem('#pItem3', lekcja[9], '(2h)');
    pItem('#pItem4', lekcja[10], '(4h)');
    pItem('#pItem5', lekcja[2], '(2h)');
    pItem('#pItem6', lekcja[3], '(1h)');
    pItem('#pItem7', lekcja[8], '(2h)');
    pItem('#pItem8', lekcja[12], '(2h)');
    pItem('#pItem9', lekcja[7], '(2h)');
    pItem('#pItem10', lekcja[4], '(4h)');
    pItem('#pItem11', lekcja[5], '(3h)');
    pItem('#pItem12', lekcja[6], '(2h)');
    pItem('#pItem13', lekcja[14], '(4h)');
    pItem('#pItem14', lekcja[13], '(1h)');
    pItem('#pItem15', lekcja[17], '(1h)');
    pItem('#pItem16', lekcja[26], '(1h)');
    document.querySelector("#pItem__footer").innerHTML = "Ilość godzin lekcyjnych w tygodniu: 36h <br> Ilość godzin zawodowych w tygodniu: 16h <br>";
}

tiNameAndUrl();
allNameAndUrl();
pItems();