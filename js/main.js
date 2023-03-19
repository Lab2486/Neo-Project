// let nombre = prompt ("Ingresa tu nombre")


// function saludo () {
//     if (nombre == ""){
//         alert ("No ingresaste tu nombre")
//         for (let nombre = 0; nombre <= 100; nombre ++){
//             let nombre = prompt ("Solo tenes que escribir tu nombre o este mensaje va a aparecer para siempre")
//             if (nombre != ""){
//                 alert ("Bienvenido" + " " + nombre + " "+ "tan dificil era?")
//                 break
//             }
//         }
//     }else{
//         alert ("Bienvenido" + " " + nombre + " " +"que pro")
//     }
//     }

// saludo()



class Tracks {
    constructor (trackName, epName,artist, price, id, gender){
        this.trackName = trackName;
        this.epName = epName;
        this.artist = artist;
        this.price = price
        this.id = id
        this.gender = gender
    }
}

const track1 = new Tracks ("Al Final Del Tunel", "Al final del tunel (EP)", "Kold", 20, "m01", "Minimal");
const track2 = new Tracks ("Dark Sequense", "Al final del tunel (EP)", "Kold", 20, "m02", "Minimal");
const track3 = new Tracks ("All Night Long", "Head Hunter (EP)", "Jokr", 20, "m03", "Minimal");
const track4 = new Tracks ("Head Hunter", "Head Hunter (EP)", "Jokr", 20, "m04", "Minimal");
const track5 = new Tracks ("Ninja", "Head Hunter (EP)", "Jokr", 20, "m05", "Minimal")

const track6 = new Tracks ("White Lights", "White Lights (EP)", "Fenoma", 20, "House")
const track7 = new Tracks ("Feel It", "White Lights (EP)", "Fenoma", 20, "House")
const track8 = new Tracks ("Making The Groove", "Making The Groove (EP)", "Anvii", 20, "House")
const track9 = new Tracks ("Rojaiju", "Making The Groove (EP)", "Anvii", 20, "House")
const track10 = new Tracks ("Check This Out", "Making The Groove (EP)", "Anvii", 20, "House")

const allTacks = [track1, track2,track3,track4,track5,track6,track7,track8,track9,track10];
const minimal = [track1, track2, track3, track4, track5];
const house = [track6, track7, track8, track9, track10];
const carrito = []

let musica = allTacks
console.log (musica)
// let filtro = prompt ("Ingresa: \n 1) Para Minimal \n 2) Para house")


// function saludo () {
    
//     if (filtro == "1"){
//         for (const track of minimal) {
//             console.log(`${track.trackName} ${track.epName} ${track.artist} $${track.price} ID:${track.id}`)
//         }
//     }
    
//     if (filtro == "2"){
//         for (const track of house) {
//             console.log(`${track.trackName} ${track.epName} ${track.artist} $${track.price} ID:${track.id}`)
//         }    
//     }
//     }



// saludo()
// let compra = prompt ("ingresa el ID del track que desear comprar")

// function buy () {
//     if (compra == "m01"){
//         console.log (`felicidades compraste  ${track1.trackName} by ${track1.artist}`)
//     }
// }
// buy ()









