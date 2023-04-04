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
    imagen: "./media/Fenoma-White-Lights-EP.jpg",
    sound: "./media/Anvii - Making The Groove (Original Mix).mp3",
    precio: 200,
  },
];

let carrito = [];

const productosContenedor = document.getElementById("productsContainer");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const btnAll = document.getElementById("btnAll");
const btnHouse = document.getElementById("btnHouse");
const btnMinimal = document.getElementById("btnMinimal");
const btnRandom = document.getElementById("btnRandom");
const btnEliminar = document.getElementById("btnEliminar");

catalogoDeTracks.forEach((track) => {
  let content = document.createElement("div");
  content.className = "product-card";
  content.innerHTML = `
  <img class="track-img" src="${track.imagen}" >
  <h3 class="track-name">${track.nombre}</h3>
  <p class="track-artist">${track.artista}</p>
  <audio clas="track-audio" src="${track.sound}" controls></audio>
  <p class="track-price">$${track.precio}</p>

  `;
  productosContenedor.append(content);

  let comprar = document.createElement("button");
  comprar.innerText = "Buy";
  comprar.className = "btn-comprar";

  content.append(comprar);

  comprar.addEventListener("click", () => {
    carrito.push({
      imagen: track.imagen,
      nombre: track.nombre,
      artista: track.artista,
      genero: track.genero,
      precio: track.precio,
      sound: track.sound,
      id: track.id,
    });
  });
});

//--------------------Carrito--------------------------
const printCarrito = () => {
  verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h2 class="modal-header-titulo">Carrito</h2>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h3");
    modalButton.innerText = "X";
    modalButton.className = "modal-header-btn";

    modalButton.addEventListener("click", () => {
      modalContainer.style.display = "none";
    });

    modalHeader.append(modalButton);

    carrito.forEach((track) => {
      let carritoContent = document.createElement("div");
      carritoContent.className = "carrito-item";
      carritoContent.innerHTML = `
        <img class="track-img-cart" src="${track.imagen}" >
        <h3 class="track-name-cart">${track.nombre}</h3>
        <p class="track-artist">${track.artista}</p>
        <p class="track-id">${track.id}</p>
        <audio clas="track-audio" src="${track.sound}" controls></audio>
        <p class="track-price">$${track.precio}</p>
        <button class="btn-eliminar"id="btnEliminar"><i class="bi bi-trash3"></i></button>
    `;
      modalContainer.append(carritoContent);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalCompra = document.createElement("div");
    totalCompra.className = "total-content";
    totalCompra.innerHTML = `total a pagar: $${total}`;
    modalContainer.append(totalCompra);
  });
  const eliminar = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);

    btnEliminar.addEventListener(eliminar);
    modalContainer.innerHTML = "";
  };
};

verCarrito.addEventListener("click", printCarrito);
