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
]

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500,

    }
]


const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)

    if (empleado) {
        callback(null, empleado.nombre);
    } else {
        callback(`Empleado con id ${id} no existe`)
    }

}

const getSalario = (id, callback) => {

    const salario = salarios.find(s => s.id === id)?.salario;

    if (salario) {
        callback(null, salario)
    } else {
        callback(`Empleado con id ${id} no tiene salario`)
    }
}

const ID = 3

getEmpleado(ID, (err, empleado) => {

    if (err) {
        console.log("ERROR!");
        return console.log(err);
    }

    getSalario(ID, (err, salario) => {

        if (err) {
            console.log("ERROR!");
            return console.log(err);
        }

        console.log('El empleado;', empleado, 'tiene un salario de:', salario);
    })
})



