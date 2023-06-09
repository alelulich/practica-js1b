// ejercicio 1
//let name = prompt('escribe tu nombre', 'nombre')
// let lastname = prompt('escribe tu apellido', 'apellido')
// const saludo = 'bienvenid@ a ADA'

// alert ( `bienvenido ${name} ${lastname} ${saludo}`)

//ejercicio 2
// let gusto1 = prompt ('esdribe tu primer gusto', 'gusto1');
// let gusto2 = prompt ('esdribe tu segundo gusto', 'gusto2');
// let gusto3 = prompt ('esdribe tu tercer gusto', 'gusto3');

// alert(`Estos son tus gustos ${gusto1}, ${gusto2} y ${gusto3}`)

//ejercicio 3
// let name = prompt ('Escribe tu nombre', 'Nombre');
// let lastname = prompt ('Escribe tu apellido', 'Apellido');
// let age = prompt ('Escribe tu edad','edad');
// let nac = prompt ('Cuál es tu nacionalidad', 'nacionalidad');
// let dni = prompt ('Númer de dni', 'dni');

// alert (`"Nuevo usuario agregado al sistema: ${name} ${lastname} ${age} ${nac} y ${dni}"`)

//ejercicio 5
// let age = prompt ('Dinos tu edad', 'edad')
// let resultado = Number (age) * 7

// alert (`"Tu edad en años perro es: ${resultado}"`)

//ejercicio 6
// let min = prompt ('Cantidad de minutos', 'minutos')
// let resultado = Number (min) * 60

// alert (`"escribstes ${min} minutos que equivalen a ${resultado} segundos"`)

//ejercicio 7
// let days = prompt ('Escribe una cantidad de días', 'dias')
// let resultado = Number (days) * 24 * 60 * 60 

// alert (`"Escribiste ${days} días que equivalen a ${resultado} segundos`)

// ejercicio 8 
// let km = prompt ('Escribe una cantidad de kilómetros', 'tus km')
// let resultado = Number (km) * 1.6

// alert (`"Escribiste ${km} KM que equivalen a ${resultado} millas terrestres" `)

// ejercicio 12
// let km = prompt ('Escribe una cantidad de kilómetros', 'tus km') 
// let caminando = Number (km) / 5
// let bicicleta = Number (km) / 10
// let auto = Number (km) / 110

// alert (`"Escribiste ${km} KM si vas caminando tardarás ${caminando}horas, si vas en bicileta tardarás ${bicicleta}horas y si vas en auto tardarás ${auto} horas en llegar" `)

//ejercicio 13
let destino1 = prompt ('Escribe tu primer destino', 'destino1');
let km1 = prompt ('Escribe los km a tu primer destino', 'kn1');
let destino2 = prompt ('Escribe tu segundo destino', 'destino2');
let km2 = prompt ('Escribe los km a tu segundo destino', 'kn2');
let destino3 = prompt ('Escribe tu ultimo destino', 'destino3');
let km3 = prompt ('Escribe los km a tu ultimo destino', 'kn3')

let resultado = Number (km1) + Number (km2) + Number (km3)

alert (`Tus destinos seleccionados son ${destino1}, ${destino2} y ${destino3} y el total de recorrido son ${resultado} kilómetros`)
