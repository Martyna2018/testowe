//zad05a

var zm1 =10;
var zm2 =20;

if (zm1 < zm2){
    document.write("zm2 jest większa niż zm1")
}


//zad05b
const liczba = prompt("Podaj swój wiek: ");
if (liczba <= 13){
    document.write("<br>Masz "+liczba+" lat i jesteś dzieckiem")
}
else if (liczba <= 18){
    document.write("<br>Masz "+liczba+" lat i należysz do młodzieży")
}
else if (liczba <= 60){
    document.write("<br>Masz "+liczba+" lat i jesteś dorosły")
}
else if(liczba > 60){
    document.write("<br>Masz "+liczba+" lat i jesteś emerytem")
}