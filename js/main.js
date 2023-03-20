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



// class Tracks {
//     constructor (trackName, epName,artist, price, id, gender){
//         this.trackName = trackName;
//         this.epName = epName;
//         this.artist = artist;
//         this.price = price
//         this.id = id
//         this.gender = gender
//     }
// }

// const track1 = new Tracks (nombre: "Al Final Del Tunel", "Al final del tunel (EP)", "Kold", 20, "m01", "Minimal");
// const track2 = new Tracks (nombre: "Dark Sequense", "Al final del tunel (EP)", "Kold", 20, "m02", "Minimal");
// const track3 = new Tracks (nombre: "All Night Long", "Head Hunter (EP)", "Jokr", 20, "m03", "Minimal");
// const track4 = new Tracks (nombre: "Head Hunter", "Head Hunter (EP)", "Jokr", 20, "m04", "Minimal");
// const track5 = new Tracks (nombre: "Ninja", "Head Hunter (EP)", "Jokr", 20, "m05", "Minimal")

// const track6 = new Tracks (nombre: "White Lights", "White Lights (EP)", "Fenoma", 20, "House")
// const track7 = new Tracks (nombre: "Feel It", "White Lights (EP)", "Fenoma", 20, "House")
// const track8 = new Tracks (nombre: "Making The Groove", "Making The Groove (EP)", "Anvii", 20, "House")
// const track9 = new Tracks (nombre: "Rojaiju", "Making The Groove (EP)", "Anvii", 20, "House")
// const track10 = new Tracks (nombre: "Check This Out", "Making The Groove (EP)", "Anvii", 20, "House")





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



const tracks =[{nombre: 'Al Final Del Tunel', artista:'Kold',genero: 'Minimal', codigo: "m01"},{nombre: 'Dark Sequence', artista:'Kold',genero: 'Minimal', codigo: "m02"},{nombre: 'All Night Long', artista:'Jokr',genero: 'Minimal', codigo: "m03"},{nombre: 'Head Hunter', artista:'Jokr',genero: 'Minimal', codigo: "m04"},{nombre: 'Ninja', artista:'Jokr',genero: 'Minimal', codigo: "m05"},{nombre: 'White Lights', artista:'Fenoma',genero: 'House', codigo: "h01"},{nombre: 'Feel It', artista:'Fenoma',genero: 'House', codigo: "h02"},{nombre: 'Making The Groove', artista:'Anvii',genero: 'House', codigo: "h03"},{nombre: 'Rojaiju', artista:'Anvii',genero: 'House', codigo: "h04"},{nombre: 'Check This out', artista:'Anvii',genero: 'House', codigo: "h05"}];



const tracksDeMinimal = tracks.filter ((track) => track.genero == 'Minimal'); 
// console.log (tracksDeMinimal);

const tracksDeHouse = tracks.filter ((track) => track.genero == 'House');
// console.log (tracksDeHouse);



let filtro = prompt ('Ingresa: \n 1) Para Minimal \n 2) Para house  \n 3) Para ver todos los tracks disponibles')

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

saludo ()

let compra = prompt ('ingresa el codigo del track que deseas comprar')
 













