const weekPlaneTI = () => {
    pon1 = l.TI.EL.DzialanoscGospodarcza;
    pon2 = l.TI.Programowanie;
    pon3 = l.ALL.Niemiecki;
    pon4 = l.ALL.WDZ;
    pon5 = l.ALL.Matematyka;
    pon6 = l.TI.BF.SBD;
    pon7 = l.ALL.Angielski;
    pon8 = l.ALL.Polski;
    ponend = l.ALL.EndLesson;

    wt1 = l.TI.BF.Sieci;
    wt2 = l.TI.BF.Sieci;
    wt3 = l.TI.BF.Sieci;
    wt4 = l.TI.Programowanie;
    wt5 = l.TI.BF.PIMLSK;
    wt6 = l.TI.AngielskiZawodowy;
    wt7 = l.TI.EL.DzialanoscGospodarcza;
    wt8 = l.ALL.Wolne;
    wtend = l.ALL.EndLesson;

    sr1 = l.ALL.Matematyka;
    sr2 = l.ALL.Polski;
    sr3 = l.ALL.Wychowawcza;
    sr4 = l.ALL.Matematyka;
    sr5 = l.TI.EL.Witryny;
    sr6 = l.TI.EL.Witryny;
    sr7 = l.ALL.Polski;
    sr8 = l.ALL.WF;
    srend = l.ALL.EndLesson;

    czw1 = l.TI.BF.Sieci;
    czw2 = l.ALL.Polski;
    czw3 = l.ALL.Niemiecki;
    czw4 = l.ALL.Matematyka;
    czw5 = l.ALL.WF;
    czw6 = l.ALL.HIS;
    czw7 = l.ALL.Wolne;
    czw8 = l.ALL.Wolne;
    czwend = l.ALL.EndLesson;

    pt1 = l.ALL.Angielski;
    pt2 = l.ALL.WF;
    pt3 = l.ALL.Angielski;
    pt4 = l.TI.BF.ABD;
    pt5 = l.TI.BF.ABD;
    pt6 = l.TI.BF.PIMLSK;
    pt7 = l.ALL.Religia;
    pt8 = l.ALL.Religia;
    ptend = l.ALL.EndLesson;
}

const weekPlaneTU = () => {
    pon1 = l.TU.PodstawyKosztorysowania;
    pon2 = l.TU.SEO;
    pon3 = l.ALL.Niemiecki;
    pon4 = l.ALL.WDZ;
    pon5 = l.ALL.Matematyka;
    pon6 = l.TU.AngieslkiWBudownictwie;
    pon7 = l.ALL.Angielski;
    pon8 = l.ALL.Polski;
    ponend = l.ALL.EndLesson;

    wt1 = l.TU.MontazSEO;
    wt2 = l.TU.MontazSEO;
    wt3 = l.TU.MontazSEO;
    wt4 = l.TU.ObslugaSEO;
    wt5 = l.TU.ObslugaSEO;
    wt6 = l.TU.ObslugaSEO;
    wt7 = l.TU.ObslugaSEO;
    wt8 = l.ALL.Wolne;
    wtend = l.ALL.EndLesson;

    sr1 = l.ALL.Matematyka;
    sr2 = l.ALL.Polski;
    sr3 = l.ALL.Wychowawcza;
    sr4 = l.ALL.Matematyka;
    sr5 = l.TU.TechnologiaSEO;
    sr6 = l.TU.TechnologiaSEO;
    sr7 = l.ALL.Polski;
    sr8 = l.ALL.WF;
    srend = l.ALL.EndLesson;

    czw1 = l.TU.KosztorysowanieWBudownictwie;
    czw2 = l.ALL.Polski;
    czw3 = l.ALL.Niemiecki;
    czw4 = l.ALL.Matematyka;
    czw5 = l.ALL.WF;
    czw6 = l.ALL.HIS;
    czw7 = l.ALL.Wolne;
    czw8 = l.ALL.Wolne;
    czwend = l.ALL.EndLesson;

    pt1 = l.ALL.Angielski;
    pt2 = l.ALL.WF;
    pt3 = l.ALL.Angielski;
    pt4 = l.TU.SEO;
    pt5 = l.TU.SEO;
    pt6 = l.TU.KosztorysowanieWBudownictwie;
    pt7 = l.ALL.Religia;
    pt8 = l.ALL.Religia;
    ptend = l.ALL.EndLesson;
}

let chooseClassPlane = document.getElementById('checkClassHTML').value;
if (chooseClassPlane == 'TU') weekPlaneTU();
else weekPlaneTI();