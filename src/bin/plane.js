function nextL(next) {
    document.getElementById('next').innerHTML = `Następna lekcja: ${next}`;
}

let pon1, pon2, pon3, pon4, pon5, pon6, pon7, pon8, pend, wt1, wt2, wt3, wt4, wt5, wt6, wt7, wt8, wtend, sr1, sr2, sr3, sr4, sr5, sr6, sr7, sr8, sredn, czw1, czw2, czw3, czw4, czw5, czw6, czw7, czw8, czwend, pt1, pt2, pt3, pt4, pt5, pt6, pt7, pt8, ptend;
let wolne = l.ALL.Wolne;

function checkMyLesson(a) {
    if (a == l.TI.BF.ABD) ti.ABD();
    else if (a == l.TI.BF.SBD) ti.SBD();
    else if (a == l.TI.BF.PIMLSK) ti.PIMLSK();
    else if (a == l.TI.BF.Sieci) ti.Sieci();
    else if (a == l.TI.EL.DzialanoscGospodarcza) ti.DzialanoscGospodarcza();
    else if (a == l.TI.EL.Witryny) ti.Witryny();
    else if (a == l.TI.Programowanie) ti.Programowanie();
    else if (a == l.TI.AngielskiZawodowy) ti.AngielskiZawodowy();
    else if (a == l.ALL.Matematyka) all.Matematyka();
    else if (a == l.ALL.Angielski) all.Angielski();
    else if (a == l.ALL.Niemiecki) all.Niemiecki();
    else if (a == l.ALL.Polski) all.Polski();
    else if (a == l.ALL.HIS) all.HIS();
    else if (a == l.ALL.WF) all.WF();
    else if (a == l.ALL.WDZ) all.WDZ();
    else if (a == l.ALL.Wychowawcza) all.Wychowawcza();
    else if (a == l.ALL.Wolna) all.Wolna();
    else if (a == l.ALL.Wolne) all.Wolne();
    else if (a == l.ALL.Religia) all.Religia();
    else if (a == l.ALL.EndLesson) all.NextEndLesson();
    else if (a == l.TU.PodstawyKosztorysowania) tu.PodstawyKosztorysowania();
    else if (a == l.TU.SEO) tu.SEO();
    else if (a == l.TU.AngieslkiWBudownictwie) tu.AngieslkiWBudownictwie();
    else if (a == l.TU.MontazSEO) tu.MontazSEO();
    else if (a == l.TU.ObslugaSEO) tu.ObslugaSEO();
    else if (a == l.TU.TechnologiaSEO) tu.TechnologiaSEO();
    else if (a == l.TU.KosztorysowanieWBudownictwie) tu.KosztorysowanieWBudownictwie();
    else a == a;
}

const plan = {
    pon: {
        l1() {
            checkMyLesson(pon1);
            nextL(pon2);

        },
        l2() {
            checkMyLesson(pon2);
            nextL(pon3);

        },
        l3() {
            checkMyLesson(pon3);
            nextL(pon4);

        },
        l4() {
            checkMyLesson(pon4);
            nextL(pon5);

        },
        l5() {
            checkMyLesson(pon5);
            nextL(pon6);

        },
        l6() {
            checkMyLesson(pon6);
            nextL(pon7);

        },
        l7() {
            checkMyLesson(pon7);
            nextL(pon8);


        },
        l8() {
            checkMyLesson(pon8);
            nextL(ponend);
        },
    },
    wt: {
        l1() {
            checkMyLesson(wt1);
            nextL(wt2);

        },
        l2() {
            checkMyLesson(wt2);
            nextL(wt3);

        },
        l3() {
            checkMyLesson(wt3);
            nextL(wt4);

        },
        l4() {
            checkMyLesson(wt4);
            nextL(wt5);

        },
        l5() {
            checkMyLesson(wt5);
            nextL(wt6);

        },
        l6() {
            checkMyLesson(wt6);
            nextL(wt7);

        },
        l7() {
            checkMyLesson(wt7);
            nextL(wt8);
        },
        l8() {
            checkMyLesson(wt8);
            nextL(wtend);
        },
    },
    sr: {
        l1() {
            checkMyLesson(sr1);
            nextL(sr2);

        },
        l2() {
            checkMyLesson(sr2);
            nextL(sr3);

        },
        l3() {
            checkMyLesson(sr3);
            nextL(sr4);

        },
        l4() {
            checkMyLesson(sr4);
            nextL(sr5);
        },
        l5() {
            checkMyLesson(sr5);
            nextL(sr6);
        },
        l6() {
            checkMyLesson(sr6);
            nextL(sr7);
        },
        l7() {
            checkMyLesson(sr7);
            nextL(sr8);
        },
        l8() {
            checkMyLesson(sr8);
            nextL(srend);
        },
    },
    czw: {
        l1() {
            checkMyLesson(czw1);
            nextL(czw2);

        },
        l2() {
            checkMyLesson(czw2);
            nextL(czw3);

        },
        l3() {
            checkMyLesson(czw3);
            nextL(czw4);

        },
        l4() {
            checkMyLesson(czw4);
            nextL(czw5);
        },
        l5() {
            checkMyLesson(czw5);
            nextL(czw6);
        },
        l6() {
            checkMyLesson(czw6);
            nextL(czw7);
        },
        l7() {
            checkMyLesson(czw7);
            nextL(czw8);
        },
        l8() {
            checkMyLesson(czw8);
            nextL(czwend);
        },
    },
    pt: {
        l1() {
            checkMyLesson(pt1);
            nextL(pt2);
        },
        l2() {
            checkMyLesson(pt2);
            nextL(pt3);
        },
        l3() {
            checkMyLesson(pt3);
            nextL(pt4);

        },
        l4() {
            checkMyLesson(pt4);
            nextL(pt5);
        },
        l5() {
            checkMyLesson(pt5);
            nextL(pt6);
        },
        l6() {
            checkMyLesson(pt6);
            nextL(pt7);
        },
        l7() {
            checkMyLesson(pt7);
            nextL(pt8);

        },
        l8() {
            checkMyLesson(pt8);
            nextL(ptend);

        },
    }
}