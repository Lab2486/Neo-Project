let nombre = prompt ("Ingresa tu nombre")


function saludo () {
    if (nombre == ""){
        alert ("No ingresaste tu nombre")
        let nombre = prompt ("Vuelve a ingresar tu nombre")
        alert ("Bienvenido" + " " + nombre)
    } else{
        alert ("Bienvenido" + " " + nombre)
    }
}

saludo()










