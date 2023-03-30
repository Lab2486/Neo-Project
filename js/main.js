const contenedorProductos = document.getElementById("contenedorProductos");
const catalogoDeTracks = [
  {
    nombre: "Al Final Del Tunel",
    artista: "Kold",
    genero: "Minimal",
    id: "m01",
    imagen: "../media/al-final-del-tunel-kold.jpg",
    sound: "../media/KOLD - Al Final Del Túnel (Original Mix).mp3",
    precio: 200,
    categoria: {
      nombre: "Minimal",
      id: "minimal",
    },
  },
  {
    nombre: "Dark Sequence",
    artista: "Kold",
    genero: "Minimal",
    id: "m02",
    imagen: "../media/al-final-del-tunel-kold.jpg",
    sound: "../media/KOLD - Dark Sequence (Original Mix).mp3",
    precio: 200,
    categoria: {
      nombre: "Minimal",
      id: "minimal",
    },
  },
  {
    nombre: "Ninja",
    artista: "JØKR",
    genero: "Minimal",
    id: "m03",
    imagen: "../media/jokr-head-hunter-EP.jpg",
    sound: "../media/JØKR - Ninja (Original Mix) Bandcamp Exclusive.mp3",
    precio: 200,
    categoria: {
      nombre: "Minimal",
      id: "minimal",
    },
  },
  {
    nombre: "All Night Long",
    artista: "JØKR",
    genero: "Minimal",
    id: "m04",
    imagen: "../media/jokr-head-hunter-EP.jpg",
    sound: "../media/JØKR - Ninja (Original Mix) Bandcamp Exclusive.mp3",
    precio: 200,
    categoria: {
      nombre: "Minimal",
      id: "minimal",
    },
  },
  {
    nombre: "Head Hunter",
    artista: "JØKR",
    genero: "Minimal",
    id: "m05",
    imagen: "../media/jokr-head-hunter-EP.jpg",
    sound: "../media/JØKR - Ninja (Original Mix) Bandcamp Exclusive.mp3",
    precio: 200,
    categoria: {
      nombre: "Minimal",
      id: "minimal",
    },
  },
  {
    nombre: "Making The Goove",
    artista: "Anvii",
    genero: "Minimal",
    id: "h01",
    imagen: "../media//Anvii-Making-the-groove-EP.jpg",
    sound: "../media/Anvii - Making The Groove (Original Mix).mp3",
    precio: 200,
    categoria: {
      nombre: "House",
      id: "hose",
    },
  },
  {
    nombre: "Rojaiju",
    artista: "Anvii",
    genero: "Minimal",
    id: "h02",
    imagen: "../media//Anvii-Making-the-groove-EP.jpg",
    sound: "../media/Anvii - Making The Groove (Original Mix).mp3",
    precio: 200,
    categoria: {
      nombre: "House",
      id: "house",
    },
  },
  {
    nombre: "Check This Out",
    artista: "Anvii",
    genero: "Minimal",
    id: "h03",
    imagen: "../media//Anvii-Making-the-groove-EP.jpg",
    sound: "../media/Anvii - Making The Groove (Original Mix).mp3",
    precio: 200,
    categoria: {
      nombre: "House",
      id: "house",
    },
  },
  {
    nombre: "White Lights",
    artista: "Fenoma",
    genero: "Minimal",
    id: "h04",
    imagen: "../media/Fenoma-White-Lights-EP.jpg",
    sound: "../media/Anvii - Making The Groove (Original Mix).mp3",
    precio: 200,
    categoria: {
      nombre: "House",
      id: "house",
    },
  },
  {
    nombre: "Feel It",
    artista: "Fenoma",
    genero: "Minimal",
    id: "h05",
    imagen: "../media/Fenoma-White-Lights-EP.jpg",
    sound: "../media/Anvii - Making The Groove (Original Mix).mp3",
    precio: 200,
    categoria: {
      nombre: "House",
      id: "house",
    },
  },
];

catalogoDeTracks.forEach((product) => {
  let content = document.createElement("div");
  content.className = "col-md-4 col-sm-6 ep ";
  content.innerHTML = `
    <img src="${product.imagen}" alt="${product.nombre}">
    <h3 class="ep__title fs-4">${product.nombre}</h3>
    <p class="ep__artist fs-3">${product.artista}</p>
    <audio src="${product.sound}" controls></audio>
    `;

  contenedorProductos.append(content);

  let comprar = document.createElement("button");
  comprar.innerText = "BUY";
  comprar.className = "btn btn-outline-light boton";

  content.append(comprar);
});

// const contenedorProductos = document.getElementById("product-list");

// function cargarTracks() {
//   catalogoDeTracks.forEach((track) => {
//     const div = document.createElement("<div></div>");
//     div.classList.add("col-md-4 col-sm-6 ep product-item minimal");
//     div.innerHTML = `
//       <img class="product__img" src="${track.imagen}" alt="${track.nombre}" />
//       <div class="product__details">
//       <h3 class="product__title">${track.nombre}</h3>
//       <h4 class="product__subtitle">${track.artista}</h4>
//       <p class="product__price">${track.precio}</p>
//       <audio class="product__audio" src="${track.sound}" controls></audio>
//       <button class="product__buy" id="${track.id}">Buy</button>
//       </div>
//       `;
//     contenedorTracks.append(div);
//   });
// }

// cargarTracks();

{
  /* <div class="col-md-4 col-sm-6 ep product-item minimal" category="minimal">
              <div class="ep__columna pb-4">
                  <p class="ep__artist fs-3">Jokr</p>
                  <img  class="ep__img" src="./img/jokr-head-hunter-EP.jpg" alt="·">
                  <h3 class="ep__title fs-6">Head Hunter (EP)</h3>
                  <p class="ep__subtitle fs-4">Ninja M05</p>
                  <p class="ep__subtitle">(Original Mix)</p>
                  <audio class="ep__audio" src="./img/JØKR - Ninja (Original Mix) Bandcamp Exclusive.mp3" controls controlslist="nodownload"></audio>
                  <button type="button" class="btn btn-outline-light boton">Add to cart</button>
               </div>

            </div> */
}
