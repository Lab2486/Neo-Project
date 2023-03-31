const contenedorProductos = document.getElementById("contenedorProductos");
const contenedorCarrito = document.getElementById("carritoContenedor");
const btnVaciar = document.getElementById("vaciarCarrito");
const catalogoDeTracks = [
  {
    nombre: "Al Final Del Tunel",
    artista: "Kold",
    genero: "Minimal",
    id: "m01",
    imagen: "./media/al-final-del-tunel-kold.jpg",
    sound: "./media/KOLD - Al Final Del Túnel (Original Mix).mp3",
    precio: 200,
  },
  {
    nombre: "Dark Sequence",
    artista: "Kold",
    genero: "Minimal",
    id: "m02",
    imagen: "./media/al-final-del-tunel-kold.jpg",
    sound: "./media/KOLD - Dark Sequence (Original Mix).mp3",
    precio: 200,
  },
  {
    nombre: "Ninja",
    artista: "JØKR",
    genero: "Minimal",
    id: "m03",
    imagen: "./media/jokr-head-hunter-EP.jpg",
    sound: "./media/JØKR - Ninja (Original Mix) Bandcamp Exclusive.mp3",
    precio: 200,
  },
  {
    nombre: "All Night Long",
    artista: "JØKR",
    genero: "Minimal",
    id: "m04",
    imagen: "./media/jokr-head-hunter-EP.jpg",
    sound: "./media/JØKR - Ninja (Original Mix) Bandcamp Exclusive.mp3",
    precio: 200,
  },
  {
    nombre: "Head Hunter",
    artista: "JØKR",
    genero: "Minimal",
    id: "m05",
    imagen: "./media/jokr-head-hunter-EP.jpg",
    sound: "./media/JØKR - Ninja (Original Mix) Bandcamp Exclusive.mp3",
    precio: 200,
  },
  {
    nombre: "Making The Goove",
    artista: "Anvii",
    genero: "Minimal",
    id: "h01",
    imagen: "./media//Anvii-Making-the-groove-EP.jpg",
    sound: "./media/Anvii - Making The Groove (Original Mix).mp3",
    precio: 200,
  },
  {
    nombre: "Rojaiju",
    artista: "Anvii",
    genero: "Minimal",
    id: "h02",
    imagen: "./media//Anvii-Making-the-groove-EP.jpg",
    sound: "./media/Anvii - Making The Groove (Original Mix).mp3",
    precio: 200,
  },
  {
    nombre: "Check This Out",
    artista: "Anvii",
    genero: "Minimal",
    id: "h03",
    imagen: "./media//Anvii-Making-the-groove-EP.jpg",
    sound: "./media/Anvii - Making The Groove (Original Mix).mp3",
    precio: 200,
  },
  {
    nombre: "White Lights",
    artista: "Fenoma",
    genero: "Minimal",
    id: "h04",
    imagen: "./media/Fenoma-White-Lights-EP.jpg",
    sound: "./media/Anvii - Making The Groove (Original Mix).mp3",
    precio: 200,
  },
  {
    nombre: "Feel It",
    artista: "Fenoma",
    genero: "Minimal",
    id: "h05",
    imagen: "../media/Fenoma-White-Lights-EP.jpg",
    sound: "./media/Anvii - Making The Groove (Original Mix).mp3",
    precio: 200,
  },
];

let carrito = [];

btnVaciar.addEventListener("click", () => {
  carrito.length = 0;
  actualizarCarrito();
});

catalogoDeTracks.forEach((product) => {
  let content = document.createElement("div");
  content.className = "ep ep__columna ";
  content.innerHTML = `
    <img class="ep__img" src="${product.imagen}" alt="${product.nombre}">
    <h3 class="ep__title fs-4">${product.nombre}</h3>
    <p class="ep__artist fs-3">${product.artista}</p>
    <audio class="ep__audio" src="${product.sound}" controls></audio>
    <button id="agregar${product.id}" class="btn btn-outline-light boton boton__agregar">BUY</button>
    `;

  contenedorProductos.append(content);

  const boton = document.getElementById(`agregar${product.id}`);
  boton.addEventListener("click", () => {
    addToCart(product.id);
  });
});

const addToCart = (prodId) => {
  const item = catalogoDeTracks.find((prod) => prod.id === prodId);
  carrito.push(item);
  actualizarCarrito();
  console.log(carrito);
};

const eliminarDelCarrito = (prodId) => {
  const item = carrito.find((prod) => prod.id === prodId);
  const indice = carrito.indexOf(item);
  carrito.splice(indice, 1);
  actualizarCarrito();
};

const actualizarCarrito = () => {
  contenedorCarrito.innerHTML = "";
  carrito.forEach((product) => {
    const div = document.createElement(`div`);
    div.className = "producto__en__carrito";
    div.innerHTML = `
    <p>${product.nombre}</p>
    <p>Precio:${product.precio}</p>
    <button onClick = "eliminarDelCarrito('${product.id}')" class="btn__eliminar"> <i class="bi bi-trash3-fill"></i></button>
    `;
    contenedorCarrito.appendChild(div);
  });
  contadorCarrito.innerText = carrito.length;
};
