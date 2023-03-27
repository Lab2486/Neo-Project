const tracks = [ 
{nombre: 'Al Final Del Tunel', artista:'Kold',genero: 'Minimal', codigo: "m01"},
{nombre: 'Dark Sequence', artista:'Kold',genero: 'Minimal', codigo: "m02"},
{nombre: 'All Night Long', artista:'Jokr',genero: 'Minimal', codigo: "m03"},
{nombre: 'Head Hunter', artista:'Jokr',genero: 'Minimal', codigo: "m04"},
{nombre: 'Ninja', artista:'Jokr',genero: 'Minimal', codigo: "m05"},
{nombre: 'White Lights', artista:'Fenoma',genero: 'House', codigo: "h01"},
{nombre: 'Feel It', artista:'Fenoma',genero: 'House', codigo: "h02"},
{nombre: 'Making The Groove', artista:'Anvii',genero: 'House', codigo: "h03"},
{nombre: 'Rojaiju', artista:'Anvii',genero: 'House', codigo: "h04"},
{nombre: 'Check This out', artista:'Anvii',genero: 'House', codigo: "h05"}]; //Todos los Tacks

const tracksDeMinimal = tracks.filter ((track) => track.genero == 'Minimal'); //Tacks de Minimal
const tracksDeHouse = tracks.filter ((track) => track.genero == 'House'); //Tracks de House

// let filtro = prompt ('Ingresa: \n 1) Para Minimal \n 2) Para house  \n 3) Para ver todos los tracks disponibles')

function saludo () {
    if (filtro == "1"){
            for (const track of tracksDeMinimal) {
                console.log(`${track.nombre} / ${track.artista} / ${track.genero} / Codigo: ${track.codigo}`)
            }
    }

    if (filtro == "2"){
            for (const track of tracksDeHouse) {
                console.log(`${track.nombre} / ${track.artista} / ${track.genero} / Codigo: ${track.codigo}`)
                }
    }

    if (filtro == "3"){
        for (const track of tracks) {
            console.log(`${track.nombre} / ${track.artista} / ${track.genero} / Codigo: ${track.codigo}`)
            }
}

}

// saludo ()

let carrito = [];

function comprar () {
        let buy = prompt ('Ingresa el codigo del track que deseas comprar')
        console.log (tracks.find((track) =>  buy == track.codigo))
        carrito.push (buy);
        console.log (carrito)   
    };

// comprar ()

function comprarMas () {
    let continuarCompra = prompt ('Deseas comprar otro track? \n 1) SI \n 2) NO')
    if (continuarCompra == "1"){
        let buy = prompt ('Ingresa el codigo del track que deseas comprar')
        console.log (tracks.find((track) =>  buy == track.codigo))
        carrito.push (buy);
        console.log (carrito) 
    }
    if (continuarCompra == "2"){
        alert ('Gracias por su compra')
    }
}

// comprarMas ()

const btnAll = document.getElementById ("btnAll"),
btnHouse = document.getElementById ("btnHouse"),
btnMinimal = document.getElementById ("btnMinimal"),
btnPsytrance = document.getElementById ("btnPsytrance"),
muestra = document.getElementById ("product-list")

btnHouse.onclick = ()=>{
    
}





 













