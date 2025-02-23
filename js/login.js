$(document).ready(function() {
    $("#loginForm").submit(function(event) {
        event.preventDefault();
        var email = $("#email").val().trim();
        var password = $("#password").val().trim();

        if (email === "" || password === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        if (email === "usuario@ejemplo.com" && password === "123456") {
            alert("Inicio de sesión exitoso");
            window.location.href = "timeline.html"; 
        } else {
            alert("Correo o contraseña incorrectos.");
        }
    });
});