


// setTimeout(arg1, arg2);

// setTimeout(function(){
//     console.log("Hola Mundo");
// },1000);

// setTimeout(()=>{
//     console.log("Hola Mundo");
// },1000);


const getUsuarioByID = (id, callback) => {

    const user = {
        id,
        nombre: "Luis"
    }

    setTimeout(() => {
        callback(user);
    }, 1500);

}

getUsuarioByID(6, (usuario) => { // aquí se podría desestructurar todavía
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});