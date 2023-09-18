
export function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }
}

const validadores = {
  nacimiento: (input) => validarNacimiento(input),
};

function validarNacimiento(input) {
    const fechaCliente = new Date(input.value);
    mayorEdad(fechaCliente);

    let mensaje = " "
      if (!mayorEdad(fechaCliente)) {
          mensaje = "Debes tener 18 años de edad o más";        
      }

    input.setCustomValidity(mensaje)
}

function mayorEdad(fecha) {
  const fechaActual = new Date();
  const difreneciaFecha = new Date(// saber si una persona es mayor o no de edad
   fecha.getUTCFullYear()+ 18,
   fecha.getUTCMonth(),
   fecha.getUTCDate()
   );
  return difreneciaFecha <= fechaActual;

};