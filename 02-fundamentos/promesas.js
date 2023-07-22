const empleados = [
    {
        id: 1,
        nombre: "Luis"
    },
    {
        id: 2,
        nombre: "Ixchel",

    },
    {
        id: 3,
        nombre: "Fernando"
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500,

    }
];

const getEmpleado = (id, callback) => {

    const empleado = empleados.find(e => e.id === id)?.nombre
    return new Promise((resolve, reject) => {
        (empleado)
            ? resolve(empleado)
            : reject(`No existe empleado con id ${id}`)
    });

}

const getSalario = (id, callback) => {

    const salario = salarios.find(s => s.id === id)?.salario
    return new Promise((resolve, reject) => {
        (salario)
            ? resolve(salario)
            : reject(`No existe salario con id ${id}`)
    });

}

const ID = 3

// getEmpleado(ID)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));
// getSalario(ID)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err));

// getEmpleado(ID)
//     .then(empleado => {

//         getSalario(ID)
//             .then(salario => {
//                 console.log('El empleado:', empleado, 'tiene un salario de:', salario);
//             })
//             .catch(err => console.log(err));
//     })
//     .catch(err => console.log(err));



// Promesas en cadena

let nombre;

getEmpleado(ID)
    .then(empleado => {
        nombre = empleado;
        return getSalario(ID)
    })
    .then(salario => console.log('El empleado:', nombre, 'tiene un salario de:', salario))
    .catch(err => console.log(err));