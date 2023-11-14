//Declarar un objeto, lo que está dentro de las llaves son propiedades.
var deportes = { 
    conBalon: ['Football', 'Basketball', 'Rugby'], 
    sinBalon: ['Boxeo', 'Surf', 'Trekking']
};

var persona = {
    nombre: 'Lucas',
    edad: 26,
    estudios: {esProgramador : true}
};

//console.log(persona.edad);
persona.nombre = 'Martin';
//console.log(persona.nombre);
persona.edad = 32;
//console.log(persona.edad);

/* var autos = {};
//crear una propiedad.
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
//eliminar una propiedad.
delete autos.marcas;
console.log(autos); */

// var misFunciones = {
//     saludar : function() {
//         console.log("Hola");
//     },
// };

// misFunciones.saludar();

var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes']};
//console.log(atuendos.manos);

atuendos["piernas"] = ["Bermudas", "Pantalones"];
// console.log(atuendos);

var comidas = {};
var diferenciaDeNotaciones = function(propUno, propDos) {
    comidas[propUno] = ['Frutas', 'Vegetables'];
    comidas[propDos] = ['Hamburguesa', 'Papas Fritas'];
};

diferenciaDeNotaciones('saludable', 'noSaludable');
console.log(comidas);