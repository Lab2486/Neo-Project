const verCarrito = document.getElementById("botonCarrito");
const modalContainer = document.getElementById("modalContainer");
const cantidadCarrito = document.getElementById("cantidadCarrito");

const pintarCarrito = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal__header";
  modalHeader.innerHTML = `
        <h1 class="modal__header__title">Carrito</h1>
        `;
  modalContainer.append(modalHeader);

  const modalButton = document.createElement("button");
  modalButton.innerText = "X";
  modalButton.className = "modal__header__button";

  modalButton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  modalHeader.append(modalButton);

  carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal__content";
    carritoContent.innerHTML = `
          <h3 class="modal__content__artist">${product.artista}</h3>
          <h2 class="modal__content__track">${product.nombre}</h2>
          <h3 class="modal__content__genero">${product.genero}</h3>
          <audio class="modal__content__audio" src="${product.sound}" controls></audio>
          <p class="modal__content__precio">$${product.precio}</p>
            `;
    modalContainer.append(carritoContent);

    let eliminar = document.createElement("button");

    eliminar.innerText = "Quitar";
    eliminar.className = "delete__product";
    carritoContent.append(eliminar);
    eliminar.addEventListener("click", eliminarProducto);
  });

  const total = carrito.reduce((acc, el) => acc + el.precio, 0);

  const totalBuying = document.createElement("div");
  totalBuying.className = "total_content";
  totalBuying.innerHTML = `Total a pagar: $${total}`;
  modalContainer.append(totalBuying);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
  const foundID = carrito.find((element) => element.id);
  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundID;
  });
  carritoCounter();
  saveLocal();
  pintarCarrito();
};

const carritoCounter = () => {
  cantidadCarrito.style.display = "block";

  const carritoLength = carrito.length;
  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

JSON.parse(localStorage.getItem("carrito"));

carritoCounter();
