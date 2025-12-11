function agregar(valor) {
  document.getElementById("pantalla").value += valor;
}

function limpiar() {
  document.getElementById("pantalla").value = "";
  document.getElementById("resultado").value = "El resultado: ";
}

// --- Datos base ---
var precios = [10, 20, 50, 80, 12];
var lenguajes = ["PHP", "JS", "Python", "Java", "C#"];

// --- Búsqueda 1: find (buscar lenguaje PHP o el que escriba el usuario) ---
function busqueda1() {
  let valor = document.getElementById("pantalla").value.trim();
  let resultado = lenguajes.find(lenguaje => lenguaje.toLowerCase() == valor.toLowerCase());

  if (resultado) {
    document.getElementById("resultado").value = 
      "Lenguaje encontrado: " + resultado;
  } else {
    document.getElementById("resultado").value = 
      "Lenguaje no encontrado";
  }
}

// --- Búsqueda 2: findIndex (posición del lenguaje que escriba el usuario) ---
function busqueda2() {
  let valor = document.getElementById("pantalla").value.trim();
  let indice = lenguajes.findIndex(lenguaje => lenguaje.toLowerCase() == valor.toLowerCase());

  if (indice !== -1) {
    document.getElementById("resultado").value = 
      " Posición de '" + valor + "': " + indice;
  } else {
    document.getElementById("resultado").value = 
      "Lenguaje no encontrado";
  }
}

// --- Búsqueda 3: some (ver si hay precios mayores o iguales al número escrito) ---
function busqueda3() {
  let valor = document.getElementById("pantalla").value.trim();
  let numero = parseFloat(valor);

  if (isNaN(numero)) {
    document.getElementById("resultado").value = 
      " Ingresa un número válido";
    return;
  }

  let existe = precios.some(precio => precio >= numero);

  if (existe) {
    document.getElementById("resultado").value = 
      "Sí existen precios mayores o iguales a " + numero;
  } else {
    document.getElementById("resultado").value = 
      "No existen precios mayores o iguales a " + numero;
  }
}
