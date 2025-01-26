"use strict";
let fødselsår = prompt("Indtast dit fødselsår:");

// Trin 2: Konverter inputtet til et heltal ved hjælp af parseInt
fødselsår = parseInt(fødselsår, 10);

// Trin 3: Få det nuværende år ved hjælp af new Date()-funktionen
const nuværendeÅr = new Date().getFullYear();

// Trin 4: Beregn alderen
const alder = nuværendeÅr - fødselsår;

// Trin 5: Vis resultatet i konsollen
console.log(`Du er ${alder} år gammel.`);