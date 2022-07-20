$(document).ready(function () {
    // Declaración de evento de click en el elemento botón
    $("#bEnviar").click(function () {
        // Creación de variables y obtención de valores de cinputs
        var nombre = $("#itNombre").val();
        var apellidos = $("#itApellido").val();
        var edad = $("#itEdad").val();
        var correo = $("#itCorreo").val();
        var mensaje = $("#itMensaje").val();

        // Condicional para validar el campo de nombre
        if (nombre == "") {
            $("#mensaje1").fadeIn();
            return false;
        } else {
            $("#mensaje1").fadeOut();
        }

        // Condicional para validar el campo Apellidos
        if (apellidos == "") {
            $("#mensaje2").fadeIn();
            return false;
        } else {
            $("#mensaje2").fadeOut();
        }

        // Condicional para validar el campo edad
        if (edad == "") {
            $("#mensaje3").fadeIn();
            return false;
        } else {
            $("#mensaje3").fadeOut();


        }

        // Condicional para validar el campo correo con su respectivo formato
        if (correo == "") {
            $("#mensaje4").fadeIn();
            return false;
        } else {
            $("#mensaje4").fadeOut();
        }

        // Condicional para validar el mensaje
        if (mensaje == "") {
            $("#mensaje5").fadeIn();
            return false;
        } else {
            $("#mensaje5").fadeOut();
        }

    });
});


// Función para validación de código captcha
$(document).ready(function () {

    // Texto para intercalar combinaciones del código captcha
    txt = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    captcha = "";

    // Bucle para reiniciar captcha
    for (var i = 1; i <= 6; i++) {
        captcha = captcha + txt.charAt(Math.floor(Math.random() * 63));

    }
    $("#cb").text(captcha);

    // Función click sobre código captcha
    $("#re").click(function () {
        txt = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        captcha = "";

        // Condicional para validar código captcha
        for (var i = 1; i <= 6; i++) {
            captcha = captcha + txt.charAt(Math.floor(Math.random() * 63));

        }
        $("#cb").text(captcha);
    })

    // Funcion para enviar dato del código captcha por medio de botón
    $("#bEnviar").click(function () {
        var val1 = $("#inp").val();
        if (captcha == val1) {
            // Alerta que indicará que el código captcha ha sido ingresado correctamente
            alert("El código Captcha ingresado es correcto");
            $("#inp").val("");

        }
        // Alerta que indicará que el código captcha esta mal ingresado
        else {
            alert("El código Captcha ingresado es incorrecto");
            $("#inp").val("");
        }
    })
})