const contenedorProductos = document.getElementById("contenedorProductos");

const botonesCategoria = document.querySelectorAll(".category__item");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function cargarProductos() {
  contenedorProductos.innerHTML = "";
  productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "ep__columna";
    content.innerHTML = `
      <img class="ep__img" src="${product.imagen}">
      <h3 class="ep__artist">${product.artista}</h3>
      <h2 class="ep__title">${product.nombre}</h2>
      <h3 class="ep__subtitle">${product.genero}</h3>
      <audio class="ep__audio" src="${product.sound}" controls></audio>
      <p class="ep__precio>$${product.precio}</p>
    `;
    contenedorProductos.append(content);

    let comprar = document.createElement("button");
    comprar.className = "comprar";
    comprar.innerText = "Add to Card";

    content.append(comprar);

    comprar.addEventListener("click", () => {
      carrito.push({
        id: product.id,
        img: product.imagen,
        nombre: product.nombre,
        artista: product.artista,
        genero: product.genero,
        sound: product.sound,
        precio: product.precio,
      });
      console.log(carrito);
      carritoCounter();
      saveLocal();
    });
  });
}
cargarProductos(productos);

//  intentando hacer el fultro de los tracks-----------------------------------------------------------------
botonesCategoria.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    botonesCategoria.forEach((boton) => boton.classList.remove("item-active"));
    e.currentTarget.classList.add("item-active");

    const productosBoton = productos.filter(
      (producto) => producto.id === e.currentTarget.id
    );
    cargarProductos();
  });
});
