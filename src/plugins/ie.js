var isIE = false || !!document.documentMode;

if (isIE == true) {
    var output = '<span style="font-size: 180px">:(</span> <br> <h3>Internet Explorer is not supported for this site!</h3>  <p>Kod błędu: 403 Forbidden<p style="color: yellow;"> Opis: Twoja przegladarka (Internet Explorer) nie wspiera tej strony.</p> <p>Zalecane rozwiązane: Użyj innej przegladarki internetowej, na przykład : Google Chrome, Firefox, Brave, Opera lub Safari <br><br> Firma Microsoft zapowiedział  wycofanie wsparcia dla popularnej niegdyś przeglądarki internetowej Internet Explorer. Koniec ma nastąpić 17 sierpnia 2021 roku. Aplikacja internetowa Microsoft Teams nie będzie już obsługiwać przeglądarki Internet Explorer 11 już od 30 listopada 2020 roku.Aby ułatwić przejście na szybsze i bezpieczniejsze przeglądanie internetu zalecane jest przejście na inną przeglądarkę.<p> <br> <img style="float: left; margin: 58px"  src="img/qr.jpg"> <p>For more information about this <br> issue and possible fixes, <br> visit https://www.microsoft.com/pl-pl/download/internet-explorer.aspx <br><br><br> If you want a more info:<br> Code: 403 Forbidden <br><br> Internet Explorer does not actually support JavaScript or ECMAScript <br> IE does have an implicit CSS Grid </p> <img style="float: right; margin: 58px" src="img/win.png" width="250px">  <center> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>   <p style="font-size: 20px">&copy 2021 Jakub Achtelik - All Rights Reserved<br>www.plan.3ti.pl</p></center>';
    // document.body.style.display = "none";
    // document.head.style.display = "none";
    document.head.innerHTML = '<meta charset="UTF-8"><link rel="icon" href="img/404.png"><style>body{font-family: arial; background-color: #0078d7; color: white; font-size: 25px;<style>';
    document.body.innerHTML = output;
    document.title = "403 - Blue Screen";
}