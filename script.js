
//-------------------------- PERSONALIZADOR ---------------------------------------------------
// use filter css para cambiar colores directo de la misma imagen

  const img = document.getElementById("capibara-img");

  document.getElementById("radioRosa").addEventListener("click", () => {
    img.style.filter = "hue-rotate(310deg) saturate(1.3)";
  });

  document.getElementById("radioMenta").addEventListener("click", () => {
    img.style.filter = "hue-rotate(110deg) saturate(1.0)";
  });

  document.getElementById("radioLavanda").addEventListener("click", () => {
    img.style.filter = "hue-rotate(260deg) saturate(1.0)";
  });
  document.getElementById('radioMarron').addEventListener('change', () => {
    img.style.filter = 'none'; // color original
  });


  document.addEventListener('DOMContentLoaded', function () {
    const anteojos = document.getElementById('capibara-anteojos');
    const toggleAnteojos = document.getElementById('switchAnteojos');

    toggleAnteojos.addEventListener('change', function () {
      anteojos.style.display = this.checked ? 'block' : 'none';
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const celular = document.getElementById('capibara-celular');
    const toggleCelular = document.getElementById('switchCelular');

    toggleCelular.addEventListener('change', function () {
      celular.style.display = this.checked ? 'block' : 'none';
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const flor = document.getElementById('capibara-flor');
    const toggleFlor = document.getElementById('switchFlor');

    toggleFlor.addEventListener('change', function () {
      flor.style.display = this.checked ? 'block' : 'none';
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const taza = document.getElementById('capibara-taza');
    const toggleTaza = document.getElementById('switchTaza');

    toggleTaza.addEventListener('change', function () {
      taza.style.display = this.checked ? 'block' : 'none';
    });
  });

//-------------------------------SECCION COMENTARIOS---------------------

let comentarios = [];

function agregarComentario(event) {
  event.preventDefault(); // Evita recarga

  const nombre = document.getElementById("nombre").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre && mensaje) {
    comentarios.push({ nombre, mensaje });
    document.getElementById("nombre").value = "";
    document.getElementById("mensaje").value = "";
    mostrarComentarios();
  }
}

function mostrarComentarios() {
  const contenedor = document.getElementById("contenedor-comentarios");
  contenedor.innerHTML = "";

  comentarios.forEach((comentario, index) => {
    const div = document.createElement("div");
    div.classList.add("comentario", "mb-3", "p-2", "border", "rounded");

    const contenido = document.createElement("p");
    contenido.textContent = `${comentario.nombre}: ${comentario.mensaje}`;

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.classList.add("btn","btn-editar", "me-2");
    btnEditar.onclick = () => editarComentario(index);

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("btn", "btn-danger");
    btnEliminar.onclick = () => eliminarComentario(index);

    div.appendChild(contenido);
    div.appendChild(btnEditar);
    div.appendChild(btnEliminar);

    contenedor.appendChild(div);
  });
}

function eliminarComentario(index) {
  comentarios.splice(index, 1);
  mostrarComentarios();
}

function editarComentario(index) {
  const nuevoMensaje = prompt("Editá el mensaje:", comentarios[index].mensaje);
  if (nuevoMensaje !== null && nuevoMensaje.trim() !== "") {
    comentarios[index].mensaje = nuevoMensaje.trim();
    mostrarComentarios();
  }
}

document.getElementById("comentario-form").addEventListener("submit", agregarComentario);