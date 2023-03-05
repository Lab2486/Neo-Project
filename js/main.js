let nombre = prompt ("Ingresa tu nombre")


function saludo () {
    if (nombre == ""){
        alert ("No ingresaste tu nombre")
        for (let nombre = 0; nombre <= 100; nombre ++){
            let nombre = prompt ("Solo tenes que escribir tu nombre o este mensaje va a aparecer para siempre")
            if (nombre != ""){
                alert ("Bienvenido" + " " + nombre + " "+ "tan dificil era?")
                break
            }
        }
    }else{
        alert ("Bienvenido" + " " + nombre + " " +"que pro")
    }
    }

saludo()










