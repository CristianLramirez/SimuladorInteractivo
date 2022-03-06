/** Muestra en pantalla el nombre y apellido del empleado  buscado por id */
const empleados = [{ 
    "ID": 1,
    "nombre": 'Cristian',
    "apellido": 'Lencina',
    "edad": '34',
    "cargo": 'Programador',
    "sector": 'Sistemas',
    "antiguedad": 5 },
    {
    "ID": 2,
    "nombre": 'Rodrigo',
    "apellido": 'Borquez',
    "edad": '30',
    "cargo": 'Programador',
    "sector": 'Sistemas',
    "antiguedad": 2 },
    {
    "ID": 3,
    "nombre": 'Gabriel',
    "apellido": 'sciancalepore',
    "edad": '28',
    "cargo": 'Programador',
    "sector": 'Sistemas',
    "antiguedad": 7
}];

function buscarId(empleados, $id) {
    let empleado = '';
    for (let index = 0; index < empleados.length; index++) {
        if (empleados[ index ].ID == $id) empleado = `${empleados[ index ].nombre} ${empleados[ index ].apellido}`;
    }
    return empleado;
}
let empleado = buscarId(empleados, 1);
console.log(empleado);