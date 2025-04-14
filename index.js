// 1) Quali sono i tipi primitivi principali in TypeScript?
// -> 1) string, number, boolean, undefined, null + any
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var names = "Michele";
var age = 29;
var typeScriptStudent = true;
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }
var greet = function (name) {
    return "Ciao " + name;
};
console.log(greet("Michele"));
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }
var sum = function (a, b) {
    return a + b;
};
console.log(sum(5, 7));
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var iva = function (price) {
    return price + price * 0.22;
};
console.log(iva(100));
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var concat = function (s1, s2) {
    return (s1 + s2).length;
};
console.log(concat("ci", "ao"));
// 7) Cos'è un Type Union e come si scrive?
// Il type Union è un operatore che si scrive | , permette di rendere il tipo di variabile multiplo, nel senso che usandolo si puo definire che il tipo può essere  string o number o boolean ecc... é basato sulla teoria degli insiemi
// 8) Crea una variabile che possa contenere un numero, null o undefined.
var union;
// 10) Tipizza il seguente array di numeri:
// const numbers = [1, 2, 3]
var numbers = [1, 2, 3];
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var tubleEx = [
    "Questa",
    "è",
    "tupla",
    2,
    3,
];
var students = [];
// 17) Crea un oggetto che implementi l'interfaccia Auto.
var mazda = {
    type: "car",
    wheels: 4,
    color: "red",
    brand: "mazda",
    model: "3",
    fly: false,
    segment: "C",
    seating: 5,
    traction: "front-wheel drive",
    price: 25.0,
};
var events = {
    people: 100,
    sex: "Female",
};
