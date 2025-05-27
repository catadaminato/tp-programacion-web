
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



