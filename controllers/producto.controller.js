import { productoServices } from "../service/producto-service.js";

//backticks
/**ojo saque el ID */
const crearNuevaLinea = (nombre, precio, descripcion, id) => {
  const linea = document.createElement("tr");
  const contenido = `
    <td class="td" data-td>
      ${nombre}
    </td>
    <td>${precio}</td>
    <td>${descripcion}</td>
    <td>${id}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
 
            href="../editar_producto.html?id=${id}"
            class="simple-button simple-button--edit"> 
            Editar
          </a>
        </li>
        <li>
          <button class="simple-button simple-button--delete" type="button" id="${id}">
            Eliminar
          </button>
        </li>
      </ul>
    </td>
  `;
  linea.innerHTML = contenido;
  const btn = linea.querySelector("button");
  btn.addEventListener("click", () => {
    const id = btn.id;
    productoServices
      .eliminarproducto(id)
      .then((respuesta) => {
        console.log(respuesta);
      })
      .catch((err) => alert("Ocurrió un error"));
  });

  return linea;
};

const table = document.querySelector("[data-table]");

productoServices
  .listaproductos()
  .then((data) => {
    /**ojo  falta la descripcion y ojo saque el ID */
    data.forEach(({ nombre, precio, descripcion, id}) => {
      const nuevaLinea = crearNuevaLinea(nombre, precio, descripcion, id);
      table.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrió un error"));
