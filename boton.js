document.addEventListener("DOMContentLoaded", function() {
    // Agrega un event listener al botón con id "screen"
    document.getElementById("screen").addEventListener("click", function() {
        window.location.href = "blog.html";
    });

    // Seleccionar el botón por su ID
    var botonExplicaciones = document.getElementById("Explicaciones");

    // Agregar un event listener para el clic en el botón
    botonExplicaciones.addEventListener("click", function() {
        // Redireccionar al usuario a la página de explicaciones
        window.location.href = "Explicacion de css y html.html";
    });

    var botonEstilos = document.getElementById("estilos_boton");
    
    botonEstilos.addEventListener("click", function(){
        window.location.href = "..html";
    });

    var botonCalculadora = document.getElementById("l");

    botonCalculadora.addEventListener("click", function(){
        window.location.href = "calculadora.html";
    });
});
