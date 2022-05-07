export function valida(input) {
  const tipoDeInput = input.dataset.campo;
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }
  
    if (input.validity.valid) {
      input.parentElement.classList.remove("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
  }
}
  
const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",

];
  
const mensajesDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío",
  },
  precio: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "El formato requerido es XXXXXXXXXX 10 números",
  },
  descripcion: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "La dirección debe contener entre 10 a 40 caracteres.",
  },
  password: {
    valueMissing: "El campo contraseña no puede estar vacío.",
  },
  email: {
    valueMissing: "El campo correo no puede estar vacío.",
    patternMismatch: "El formato admitido debe ser en formato correousuario@dominio.com",
    typeMismatch:"Deber estar en formato e-mail conteniendo el caracter especial @ seguido de un dominio o proveedor seguido de un punto(.).",
  },
  nombre: {
    valueMissing: "El campo correo no puede estar vacío."
  },
  mensaje: {
    valueMissing: "El campo mensaje no puede estar en blanco o vacío.",
    tooLong: "El mensaje sólo puede contener un máximo de 120 carácteres",
    tooShort: "Debe contener mínimo 20 carácteres",
  },
};
  
  
function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      console.log(tipoDeInput, error);
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}
  

  
    
  

  