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

//diferenciaDeNotaciones('saludable', 'noSaludable');
//console.log(comidas);

// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('autor');

//console.log(tienePropiedad);

// KEYS
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

//console.log(todasLasPropiedades);

var mundo = { continentes: 7, paises: 192, oceanos: 5};

// for (let prop in mundo) {
//     console.log('Esta es la propiedad: ', prop);
//     console.log('Este es el valor: ', mundo[prop]);
//  }

 var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueña: 'María López',
    info: function(){
        console.log('Mi perro es un ' + this.raza);
    }
 };

 mascota.info();