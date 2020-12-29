# Plan lekcji dla 3TI/TU 2021
### Technologie: JavaScript, HTML, CSS, GIT
Aktualna wersja 3.0 //28.12.2020
Aktualizacja świąteczna 2.0 //10.12.2020
Pierwsza wersja 1.0  //5.11.2020
Twórca: Jakub Achtelik III TI


### FUNKCJONALNOŚCI:
> **WERSJA 3.0**
- NOWOŚĆ : edycja całego planu z poziomu jednego pliku config.js
- Znaczna poprawa kodu, wyciągnięcie powtarzalnych elemntów do funkcji;
- Zapisanie nazw  wszytskich funkcji, zmiennych, obiektów w języku angielskim 

> **WERSJA 2.0**
- Średnia ocen - Dodatkowa podstrona, która oblicza średnią dynamicznie na podstawie wpisanych ocen. Ostylowanie podtsrony w taki sposób, aby nadawał się do druku;
- Dodanie obsługi planu/średniej ocen dla drugiej części klasy z TU

> **WERSJA 1.0**
- Informacje o aktualnej lekcji sa wyświetlane dynamicznie na podstawie konkretnej godziny i minuty;
- informacje o liczbie godzin lekcyjnych;
- plan na cały tydzień;
- linki na lekcje zdalne;
- odliczanie ile minut zostało do końca lekcji/przerwy
- podpięcie domeny plan.3t.pl i ustawienie bezpiecznego połączenia SSL (zielonej kłótki);

### KOD JS:
 - cały plan został napisany w JavaScript bez użycia technologi takich jak PHP,mySQL ponieważ dzięki temu kod może być hostowany na każdym hostingu, nawet takim, który nie obsługuje dodatkowego interpretera np. PHP.
- użyłem angielskiej nomenklatury, nazwy zmiennych, funkcji, obiektów są napisane w języku angieslkim po to, aby trzymać się dobrych praktyk i ujednolicić kod;


# Struktura JavaScript
> Cała logika aplikacji znajduje się w głównym katalogu **src**. Utworzyłem dodatkowo 4 podfoldery, aby ułatwić zarządzanie aplikacją, bin i etc były inspirowane strukturą systememu Linux.
### bin
> W katalogu bin przechowywane są najpotrzebiejsze pliki, w których zapisane są dane w postaci tablic i obiektów:
- **array.js** zawiera tablice, obiekty, można powiedzieć, że jest to "mini-baza-danych"
- **items.js** jest to spis funkcji, które są wywoływywane w póżniejeszych plikach
- **plane.js** bardzo ważny plik, który odpowiada za automayzacje, powiazany  z plikiem konfiguracyjnym config.js 

###  etc
> W katalogu etc przechowywane są pliki przeznaczone do pożnijeszej edycji, jeżeli plan ulegnie zmianie. Znajduje się tutaj plik **config.js**, który pozwala na łatwa edycje w razie zmiany planu z jenego pliku JavaScript.

###  plugins
> Jak sama nazwa wskazuje znajdują się tutaj "dodatki". Przechowywane są tutaj skrypty, bez których strona działa poprawnie, ale ich użycie dodaje dodatkowe funkcjolaność/efekty graficzne. 
- **ie.js** - skrypt, który wykrywa czy używana jest przeglądarka Internet Explorer. W przypadku wykrycia, wyświetla stosowny komunikat o użyciu nowszej przegladrki ponieważ niewspierany IE nie obsługuje wielu rozwiązań, których użyłem i wyświetla je nieprawidłwo.
- **snow.js** - skrypt użyty w świątecznej aktualizacji planu w grudniu, za pomocą JavaScript i manipulacji CSS wyświetla efektowną animacje śniegu na stronie.

###  style
> Folder **style** Przechowuje jedynie pliki CSS strony. Pozycjonowanie storny oparty jest na właściwości  Flexbox. Reszta to standardowe selektory CSS.

# Ułatwiona edycja w przypadku zmiany planu 
> Napisałem kilka zmiennych w funkji **weekPlan()** i każda zmienna reprezentuje lekcje i dzięki odzdzieleniu każdej lekcji w tygodniu można edytować jedną wartość a kod samoczynnnie się aktualizuje bez dalszej integracji.
Należy w tym celu edytować zmienne np. pon1, wt2, sr3 itp. i jako argument zminnej zapisać odpowiedni elemnet z obiektu lub tablicy.
- Plik konfiguracyjny : src/etc/**config.js**



