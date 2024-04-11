// Función para validar la respuesta de la prueba 2
function validarRespuestaPrueba2() {
  var respuesta = document.getElementById("respuestaPrueba2").value;
  if (respuesta.trim() === "1965") {
    document.getElementById("prueba2").classList.add("prueba-oculta");
    document.getElementById("prueba3").classList.remove("prueba-oculta");

    // Mostrar la casilla de entrada y el botón de la siguiente pregunta
    document.getElementById("respuestaPrueba3").parentNode.classList.remove("prueba-oculta");
    document.getElementById("botonPrueba3").classList.remove("prueba-oculta");
  } else {
    document.getElementById("feedbackPrueba2").innerText = "Respuesta incorrecta. Inténtalo de nuevo.";
  }
}

  // Función para validar la respuesta de la prueba 3
  function validarRespuestaPrueba3() {
    var respuesta = document.getElementById("respuestaPrueba3").value;
  
    if (respuesta.trim() === "-.-. .. -. -.-. ..- . -. - .- .-.-.- -.-. .. . -. .-.-.- -.-. .. -. -.-. --- .-.-.- -.. .. . --.. .-.-.- -... .- .-. .-. .- .-.-.- ... . .. ... .-.-.") {
        // Ocultar los elementos de la prueba 3
        document.getElementById("respuestaPrueba3").parentNode.classList.add("prueba-oculta");
        document.getElementById("botonPrueba3").classList.add("prueba-oculta");

        // Mostrar los elementos de la siguiente prueba (prueba 4)
        document.getElementById("prueba4").classList.remove("prueba-oculta");
        document.getElementById("respuestaPrueba4").parentNode.classList.remove("prueba-oculta");
        document.getElementById("botonPrueba4").classList.remove("prueba-oculta");
    } else {
        document.getElementById("feedbackPrueba3").innerText = "Respuesta incorrecta. Inténtalo de nuevo.";
    }
}
// Función para validar la respuesta de la prueba 4
function validarRespuestaPrueba4() {
    var respuesta = document.getElementById("respuestaPrueba4").value.toLowerCase();
    if (respuesta === "2"    ) {
        document.getElementById("respuestaPrueba4").parentNode.classList.add("prueba-oculta");
        document.getElementById("botonPrueba4").classList.add("prueba-oculta");

        // Mostrar los elementos de la siguiente prueba (prueba 4)
        document.getElementById("prueba5").classList.remove("prueba-oculta");
        document.getElementById("respuestaPrueba5").parentNode.classList.remove("prueba-oculta");
        document.getElementById("botonPrueba5").classList.remove("prueba-oculta");
    } else {

        document.getElementById("feedbackPrueba4").innerHTML = "Respuesta incorrecta. Inténtalo de nuevo.";
    }
}

// Función para validar la respuesta de la prueba 5
function validarRespuestaPrueba5() {
    var respuesta = document.getElementById("respuestaPrueba5").value.toLowerCase();
    if (respuesta === "el laberinto digital") {
        document.getElementById("respuestaPrueba5").parentNode.classList.add("prueba-oculta");
        document.getElementById("botonPrueba5").classList.add("prueba-oculta");

        document.getElementById("prueba6").classList.remove("prueba-oculta");
        document.getElementById("respuestaPrueba6").parentNode.classList.remove("prueba-oculta");
        document.getElementById("botonPrueba6").classList.remove("prueba-oculta");
    } else {
        document.getElementById("feedbackPrueba5").innerHTML = "Respuesta incorrecta. Inténtalo de nuevo.";
    }
}

// Función para validar la respuesta de la prueba 6
function validarRespuestaPrueba6() {
    var respuesta = document.getElementById("respuestaPrueba6").value.toLowerCase();
    if (respuesta === "disco duro" || respuesta === "disco duro sólido") {
        document.getElementById("respuestaPrueba6").parentNode.classList.add("prueba-oculta");
        document.getElementById("botonPrueba6").classList.add("prueba-oculta");

        document.getElementById("prueba7").classList.remove("prueba-oculta");
        document.getElementById("respuestaPrueba7").parentNode.classList.remove("prueba-oculta");
        document.getElementById("botonPrueba7").classList.remove("prueba-oculta");
    } else {
        document.getElementById("feedbackPrueba6").innerHTML = "Respuesta incorrecta. Inténtalo de nuevo.";
    }
}

// Función para validar la respuesta de la prueba 7 y mostrar mensaje de completado
function validarRespuestaPrueba7() {
    var respuesta = document.getElementById("respuestaPrueba7").value;
    if (respuesta.trim() === "28") {
      document.getElementById("prueba7").classList.add("prueba-oculta");
      alert("¡Felicidades! Has completado el Ecape Room.");
    } else {
      document.getElementById("feedbackPrueba7").innerText = "Respuesta incorrecta. Inténtalo de nuevo.";
    }
  }