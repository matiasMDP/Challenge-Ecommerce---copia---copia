const listaproductos = () =>
  fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json());

  /**atencion con el comportamineto del id que deje sino borrar y ojo falta descripcion */

const crearproducto = (nombre, precio, descripcion, imagen, categoria, id) => {
  return fetch("http://localhost:3000/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, precio, descripcion, imagen, categoria, id, id: uuid.v4() }),
  });
};

const eliminarproducto = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: "DELETE",
  });
};

const detalleproducto = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) =>
    respuesta.json()
  );
};

const actualizarproducto = (nombre, precio, descripcion, imagen, categoria, id) => {
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, precio, descripcion, imagen, categoria }),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};

export const productoServices = {
  listaproductos,
  crearproducto,
  eliminarproducto,
  detalleproducto,
  actualizarproducto,
};
