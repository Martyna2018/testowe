//zad4a
const a=7;//Tworzy stałą, która może być globalna lub lokalna dla funkcji, która ją zadeklarowała. Zasady zasięgu dla stałych są takie same jak dla zmiennych. Wartość stałej nie może zostać zmieniona poprzez ponowne przypisanie; stała nie może także być ponownie zadeklarowana.
var b=6; //Zasięgiem zmiennej jest aktualna funkcja lub, jeśli zmienna została zadeklarowana poza funkcją, aktualna aplikacja.
let c=5; //letumożliwia deklarowanie zmiennych, które są ograniczone do zakresu instrukcji blokowej lub wyrażenia, w którym jest ona używana, w przeciwieństwie do varsłowa kluczowego, które definiuje zmienną globalnie lub lokalnie dla całej funkcji, niezależnie od zakresu blokowego. Inna różnica między vari letpolega na tym, że ta ostatnia jest inicjalizowana do wartości tylko wtedy, gdy analizator analizuje ją.

//zad4b
document.write("a jest równe " + a);
document.write("b jest równe " + b);
document.write("c jest równe " + c);

console.log("a jest równe " + a);
console.log("b jest równe " + b);
console.log("c jest równe " + c);

alert("a jest równe " + a);
alert("b jest równe " + b);
alert("c jest równe " + c);

//zad4c

let d=1;
let e=2;

console.log("Suma d i e = " , d+e);