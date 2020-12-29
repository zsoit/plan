var isIE = false || !!document.documentMode;

if (isIE == true) {
    var output = '<h3>Internet Explorer is not supported! Use Chrome or Firefox and Try Again :(</h3>  <p>Kod błędu: 403 Forbidden<p style="color: red;"> Opis: Twoja przegladarka (Internet Explorer) nie wspiera tej strony.</p> <p>Zalecane rozwiązane: Użyj innej przegladarki internetowej, na przykład : Google Chrome, Firefox, Brave, Opera lub Safari<p> <p>&copy 2021 Jakub Achtelik - All Rights Reserved</p> <p>www.plan.3ti.pl</p>';
    // document.body.style.display = "none";
    // document.head.style.display = "none";
    document.head.innerHTML = '<meta charset="UTF-8"><link rel="icon" href="img/basic-logo-zsoit.png"><style>body{font-family: arial;background-image: url(img/white-background-logo-zsoit.png);}<style>';
    document.body.innerHTML = output;
    document.title = "403 Forbidden";
}