// Variables
let listaAmigos = [];
let amigoIngresado;
let amigoSeleccionado;
let lista;
const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

// Agregar amigos
function agregarAmigo() {
  amigoIngresado = document.getElementById("amigo").value;
  if (regex.test(amigoIngresado) && amigoIngresado.trim() !== "") {
    listaAmigos.push(amigoIngresado);
    limpiarEntrada();
    actualizarLista();
  } else {
    alert("Inserte un nombre valido");
    limpiarEntrada();
  }
}

// Actualizar lista
function actualizarLista() {
  lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < listaAmigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = listaAmigos[i];
    lista.appendChild(item);
  }
}

// Sortear amigo
function sortearAmigo() {
  if (listaAmigos.length > 1) {
    let indice = Math.floor(Math.random() * listaAmigos.length);
    let sorteo = listaAmigos[indice];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo sorteado es: ${sorteo}</li>`;
  } else {
    alert("Ingrese al menos dos nombres para poder realizar el sorteo");
  }
}

// Reiniciar juego
function reiniciar() {
  listaAmigos = [];
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
}

// Limpiar campos de entrada de texto
function limpiarEntrada() {
  document.querySelector("#amigo").value = "";
}
