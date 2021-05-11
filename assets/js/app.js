window.onload = () => {
    $("#explicacion").hide();
    $("#btnBack").hide();
    $("#encriptar").hide();
    $("#desencriptar").hide();

    // Mostrar la explicación
    $("#btnInfo").click(() => {
        $("#boxPrincipal").fadeOut();
        $("#btnInfo").fadeOut();
        setTimeout(() => {
            $("#explicacion").fadeIn();
            $("#btnBack").fadeIn();
        }, 500);
    });

    // Volver a la página principal
    $("#btnBack").click(() => {
        $("#explicacion").fadeOut();
        $("#btnBack").fadeOut();
        $("#encriptar").fadeOut();
        $("#desencriptar").fadeOut();
        setTimeout(() => {
            $("#boxPrincipal").fadeIn();
            $("#btnInfo").fadeIn();
        }, 500);
    });

    // Ir a encriptar
    $("#btnEncriptar").click(() => {
        $("#boxPrincipal").fadeOut();
        $("#btnInfo").fadeOut();
        setTimeout(() => {
            $("#encriptar").fadeIn();
            $("#btnBack").fadeIn();
        }, 500);
    });

    // Ir a desencriptar
    $("#btnDesencriptar").click(() => {
        $("#boxPrincipal").fadeOut();
        $("#btnInfo").fadeOut();
        setTimeout(() => {
            $("#desencriptar").fadeIn();
            $("#btnBack").fadeIn();
        }, 500);
    });

    // Acción de encriptar
    $("#btnEnviarE").click(() => {
        var mensaje = $("#inputMensajeE").val();
        console.log(mensaje);

        var div = document.getElementById("mensajeEncriptado");
        var p = document.createElement("p");

        if (mensaje.length == 0) {
            p.innerHTML = "Debes llenar el campo";
            p.classList.remove("textBlack");
            p.classList.add("textRed");
            div.appendChild(p);
        } else {
            encriptarMensaje(mensaje, div, p);
        }
    });

    $("#btnEnviarD").click(() => {
        var mensaje = $("#inputMensajeD").val();
        console.log(mensaje);

        var div = document.getElementById("mensajeDesencriptado");
        var p = document.createElement("p");

        if (mensaje.length == 0) {
            p.innerHTML = "Debes llenar el campo";
            p.classList.remove("textBlack");
            p.classList.add("textRed");
            div.appendChild(p);
        } else {
            desencriptarMensaje(mensaje, div, p);
        }
    });
}

function encriptarMensaje(mensaje, div, p) {
    var i;
    var val;
    var letrero = "";
    var palabra = mensaje;
    var palabra = palabra.toLowerCase();
    for (i = 0; i < palabra.length; i++) {
        val = palabra[i];
        switch (val) {
            case 'a':
                {
                    val = 'z';
                    break;
                }
            case 'á':
                {
                    val = 'z';
                    break;
                }
            case 'b':
                {
                    val = 'y';
                    break;
                }
            case 'c':
                {
                    val = 'x';
                    break;
                }
            case 'd':
                {
                    val = 'w';
                    break;
                }
            case 'e':
                {
                    val = 'v';
                    break;
                }
            case 'é':
                {
                    val = 'v';
                    break;
                }
            case 'f':
                {
                    val = 'u';
                    break;
                }
            case 'g':
                {
                    val = 't';
                    break;
                }
            case 'h':
                {
                    val = 's';
                    break;
                }
            case 'i':
                {
                    val = 'r';
                    break;
                }
            case 'í':
                {
                    val = 'r';
                    break;
                }
            case 'j':
                {
                    val = 'q';
                    break;
                }
            case 'k':
                {
                    val = 'p';
                    break;
                }
            case 'l':
                {
                    val = 'o';
                    break;
                }
            case 'm':
                {
                    val = 'n';
                    break;
                }
            case 'n':
                {
                    val = 'm';
                    break;
                }
            case 'o':
                {
                    val = 'l';
                    break;
                }
            case 'ó':
                {
                    val = 'l';
                    break;
                }
            case 'p':
                {
                    val = 'k';
                    break;
                }
            case 'q':
                {
                    val = 'j';
                    break;
                }
            case 'r':
                {
                    val = 'i';
                    break;
                }
            case 's':
                {
                    val = 'h';
                    break;
                }
            case 't':
                {
                    val = 'g';
                    break;
                }
            case 'u':
                {
                    val = 'f';
                    break;
                }
            case 'ú':
                {
                    val = 'f';
                    break;
                }
            case 'v':
                {
                    val = 'e';
                    break;
                }
            case 'w':
                {
                    val = 'd';
                    break;
                }
            case 'x':
                {
                    val = 'c';
                    break;
                }
            case 'y':
                {
                    val = 'b';
                    break;
                }
            case 'z':
                {
                    val = 'a';
                    break;
                }
            case 'ñ':
                {
                    val = '0';
                }
        }
        letrero = letrero + val;
    }
    console.log("Mensaje encriptado: " + letrero);
    p.innerHTML = letrero;
    p.classList.add("textBlack");
    div.appendChild(p);
}

function desencriptarMensaje(mensaje, div, p) {
    var i;
    var val;
    var letrero = "";
    var palabra = mensaje;
    var palabra = palabra.toLowerCase();
    for (i = 0; i < palabra.length; i++) {
        val = palabra[i];
        switch (val) {
            case 'z':
                {
                    val = 'a';
                    break;
                }
            case 'y':
                {
                    val = 'b';
                    break;
                }
            case 'x':
                {
                    val = 'c';
                    break;
                }
            case 'w':
                {
                    val = 'd';
                    break;
                }
            case 'v':
                {
                    val = 'e';
                    break;
                }
            case 'u':
                {
                    val = 'f';
                    break;
                }
            case 't':
                {
                    val = 'g';
                    break;
                }
            case 's':
                {
                    val = 'h';
                    break;
                }
            case 'r':
                {
                    val = 'i';
                    break;
                }
            case 'q':
                {
                    val = 'j';
                    break;
                }
            case 'p':
                {
                    val = 'k';
                    break;
                }
            case 'o':
                {
                    val = 'l';
                    break;
                }
            case 'n':
                {
                    val = 'm';
                    break;
                }
            case 'm':
                {
                    val = 'n';
                    break;
                }
            case 'l':
                {
                    val = 'o';
                    break;
                }
            case 'k':
                {
                    val = 'p';
                    break;
                }
            case 'j':
                {
                    val = 'q';
                    break;
                }
            case 'i':
                {
                    val = 'r';
                    break;
                }
            case 'h':
                {
                    val = 's';
                    break;
                }
            case 'g':
                {
                    val = 't';
                    break;
                }
            case 'f':
                {
                    val = 'u';
                    break;
                }
            case 'e':
                {
                    val = 'v';
                    break;
                }
            case 'd':
                {
                    val = 'w';
                    break;
                }
            case 'c':
                {
                    val = 'x';
                    break;
                }
            case 'b':
                {
                    val = 'y';
                    break;
                }
            case 'a':
                {
                    val = 'z';
                    break;
                }
            case '0':
                {
                    val = 'ñ';
                }
        }
        letrero = letrero + val;
    }
    console.log(letrero);
    p.innerHTML = letrero;
    p.classList.add("textBlack");
    div.appendChild(p);
}