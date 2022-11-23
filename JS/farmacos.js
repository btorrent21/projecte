/*new gridjs.Grid({
  columns: ['Name', 'Age', 'Email','Name', 'Age', 'Email'],
  pagination: true,
  sort: true,
  search: true,
  resizable: true,
  data: [
    ['Mike', 33, 'mike@murphy.com','Mike', 33, 'mike@murphy.com'],
    ['John', 82, 'john@conway.com','John', 82, 'john@conway.com'],
    ['Sara', 26, 'sara@keegan.com','Sara', 26, 'sara@keegan.com'],
    ['Mike', 33, 'mike@murphy.com','Mike', 33, 'mike@murphy.com'],
    ['John', 82, 'john@conway.com','John', 82, 'john@conway.com'],
    ['Sara', 26, 'sara@keegan.com','Sara', 26, 'sara@keegan.com'],
    ['Mike', 33, 'mike@murphy.com','Mike', 33, 'mike@murphy.com'],
    ['John', 82, 'john@conway.com','John', 82, 'john@conway.com'],
    ['Sara', 26, 'sara@keegan.com','Sara', 26, 'sara@keegan.com'],
    ['Mike', 33, 'mike@murphy.com','Mike', 33, 'mike@murphy.com'],
    ['John', 82, 'john@conway.com','John', 82, 'john@conway.com'],
    ['Sara', 26, 'sara@keegan.com','Sara', 26, 'sara@keegan.com'],
    ['Mike', 33, 'mike@murphy.com','Mike', 33, 'mike@murphy.com'],
    ['John', 82, 'john@conway.com','John', 82, 'john@conway.com'],
    ['Sara', 26, 'sara@keegan.com','Sara', 26, 'sara@keegan.com']
  ] 
}).render(document.getElementById("farmacos"));*/

// Se obtienen las filas.
let obtenerFila1 = document.getElementById("fila1");
let obtenerFila2 = document.getElementById("fila2");
let obtenerFila3 = document.getElementById("fila3");
let obtenerFila4 = document.getElementById("fila4");
let obtenerFila5 = document.getElementById("fila5");
let obtenerFila6 = document.getElementById("fila6");
let obtenerFila7 = document.getElementById("fila7");
let obtenerFila8 = document.getElementById("fila8");
let obtenerFila9 = document.getElementById("fila9");
let obtenerFila10 = document.getElementById("fila10");
let obtenerFila11 = document.getElementById("fila11");
let obtenerFila12 = document.getElementById("fila12");


// Se obtienen los elementos td de cada fila
let elementosFila1 = obtenerFila1.getElementsByTagName("td");
let elementosFila2 = obtenerFila2.getElementsByTagName("td");
let elementosFila3 = obtenerFila3.getElementsByTagName("td");
let elementosFila4 = obtenerFila4.getElementsByTagName("td");
let elementosFila5 = obtenerFila5.getElementsByTagName("td");
let elementosFila6 = obtenerFila6.getElementsByTagName("td");
let elementosFila7 = obtenerFila7.getElementsByTagName("td");
let elementosFila8 = obtenerFila8.getElementsByTagName("td");
let elementosFila9 = obtenerFila9.getElementsByTagName("td");
let elementosFila10 = obtenerFila10.getElementsByTagName("td");
let elementosFila11 = obtenerFila11.getElementsByTagName("td");
let elementosFila12 = obtenerFila12.getElementsByTagName("td");

// Mostramos el valor del segundo elemento de cada fila.
console.log(elementosFila1[1].innerHTML);
console.log(elementosFila2[1].innerHTML);
console.log(elementosFila3[1].innerHTML);
console.log(elementosFila4[1].innerHTML);
console.log(elementosFila5[1].innerHTML);
console.log(elementosFila6[1].innerHTML);
console.log(elementosFila7[1].innerHTML);
console.log(elementosFila8[1].innerHTML);
console.log(elementosFila9[1].innerHTML);
console.log(elementosFila10[1].innerHTML);
console.log(elementosFila11[1].innerHTML);
console.log(elementosFila12[1].innerHTML);
