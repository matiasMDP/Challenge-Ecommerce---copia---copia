import { productoServices } from "../service/producto-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    window.location.href = "/error.html";
  }

  const nombre = document.querySelector("[data-nombre]");
  const precio = document.querySelector("[data-precio]");
  const descripcion = document.querySelector("[data-descripcion]");



  try {
    const perfil = await productoServices.detalleProducto(id);
    if (perfil.nombre && perfil.precio) {
      nombre.value = perfil.nombre;
      precio.value = perfil.precio;
      descripcion.value = perfil.descripcion;

    } else {
      throw new Error();
    }
  } catch (error) {
    window.location.href = "/error.html";
  }
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const nombre = document.querySelector("[data-nombre]").value;
  const precio = document.querySelector("[data-precio]").value;
  const descripcion = document.querySelector("[data-descripcion]").value;
  productoServices.actualizarProducto(nombre, precio, descripcion, id).then(() => {
    window.location.href = "/lista_productos.html";
  });
});
