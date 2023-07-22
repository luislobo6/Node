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

const getInfoUsuario = async (id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado: ${empleado} es de ${salario}`;
    } catch (error) {
        throw error;
    }

}

const ID = 3

getInfoUsuario(ID)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));

