// 1) Quali sono i tipi primitivi principali in TypeScript?

// -> 1) string, number, boolean, undefined, null + any

// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
let names: string = "Michele"
let age: number = 29
let typeScriptStudent: boolean = true
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }

const greet = (name: string) => {
  return "Ciao " + name
}

console.log(greet("Michele"))

// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }
const sum = (a: number, b: number): number => {
  return a + b
}
console.log(sum(5, 7))

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

const iva = function (price: number): number {
  return price + price * 0.22
}
console.log(iva(100))

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

const concat = function (s1: string, s2: string) {
  return (s1 + s2).length
}

console.log(concat("ci", "ao"))

// 7) Cos'è un Type Union e come si scrive?

// Il type Union è un operatore che si scrive | , permette di rendere il tipo di variabile multiplo, nel senso che usandolo si puo definire che il tipo può essere  string o number o boolean ecc... é basato sulla teoria degli insiemi

// 8) Crea una variabile che possa contenere un numero, null o undefined.

let union: number | null | undefined

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
type Week = string | number

// 10) Tipizza il seguente array di numeri:
// const numbers = [1, 2, 3]

const numbers: number[] = [1, 2, 3]

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

const tubleEx: [string, string, string, number, number] = [
  "Questa",
  "è",
  "tupla",
  2,
  3,
]

// 12) Qual è la differenza tra type e interface?

// Type è un metodo che permette di creare tipi di dati personalizzati, mentre le interface servono per definire la struttura e il valore di un oggetto, cosi da poter riutilizzarlo facilmente grazie ai suggerimenti che da l'editor

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

interface Person {
  firstName: string
  lastName: string
  age: number
}

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

interface User {
  email: string
  phone?: number
}

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
interface Student {
  name: string
  vote: number
}

const students: Student[] = []

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
interface Vehicle {
  type: string
  wheels: number
  color: string
  brand: string
  model: string
  fly: boolean
}

interface Car extends Vehicle {
  segment: string
  seating: number
  traction: string
  price: number
}

// 17) Crea un oggetto che implementi l'interfaccia Auto.

const mazda: Car = {
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
}

// 18) Cosa sono i Generics in TypeScript?

//GENERIC è un argomento per un tipo, servono a rendere piu' generiche le interfaccie, quindi a renderle riutilizzabili

// 19) È possibile avere più tipi generici in un'interfaccia?
// Si è possibile avere quanti generici vogliamo

// 20) Crea un'interfaccia generica per una risposta API.

interface Api<A, B> {
  people: A
  sex: B
}

const events: Api<number, string> = {
  people: 100,
  sex: "Female",
}
