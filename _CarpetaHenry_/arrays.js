// var listaDeCompras = [];
// listaDeCompras[3] = 'Tomates';
// listaDeCompras[1] = 'Lechuga';

// console.log(listaDeCompras.length);
/* var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray); */

// var colores = ['amarillo', 'azul'];
// colores.push('rojo'); //agrega un elemento al final del array
// colores.unshift('verde'); //agregar elemento al comienzo
// colores.pop(); //elimina el último elemento del array.
// colores.shift(); //elimina el primer elemento del array.
// console.log(colores);

//método includes, sirve para saber si un elemento está dentro de un array.
// var pintores = ['Picasso', 'Velasquez', 'Van Gogh', 'Dali'];
// var incluyeDali = pintores.includes('Monet');
// console.log(incluyeDali);

// var numeros = [7, 6, 8, 9];
// var cumplenCondicion = numeros.every((num) => {
//     return num > 5;
// })
// console.log(cumplenCondicion);

// var palabra = 'Henri';
// var palabraSeparada = palabra.split('');
// palabraSeparada.pop();
// palabraSeparada.push('y');
// var palabraArreglada = palabraSeparada.join('');
// console.log(palabraArreglada);

// var numeros = [1, 2, 3, 4];
// numeros.forEach((num) => console.log(num));
// numeros.forEach((num) => {
//     if(num === 3){
//         console.log(num);
//     }});

// var masUno = numeros.map((num) => {
//     return num + 1;
// })
// console.log(masUno);

// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
// WHILE
var arr = [];
while (arr.length < 5) {
   arr.push('Camilo');
}
console.log(arr);