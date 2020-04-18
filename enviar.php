<?php

    function validar_campo($campo){
        $campo = trim($campo);
        $campo = stripcslashes($campo);
        $campo = htmlspecialchars($campo);

        return $campo;
    }

    header('Content-type: application/json');

    if(isset($_POST["nombre"]) && !empty($_POST["nombre"]) &&
       isset($_POST["correo"]) && !empty($_POST["correo"]) &&
       isset($_POST["mensaje"]) && !empty($_POST["mensaje"])){

        $destinoMail = "gdanielmh35@gmail.com";
        $nombre = validar_campo($_POST["nombre"]);
        if(isset($_POST["telefono"])){
            $telefono = validar_campo($_POST["telefono"]);
        }
        $correo = validar_campo($_POST["correo"]);
        $mensaje = validar_campo($_POST["mensaje"]);

        $contenido = "Nombre: " . $nombre . "\n Teléfono: " . $telefono;
        $contenido .= "\n Correo: " . $correo;
        $contenido .= "\n Mensaje: " . $mensaje;
       
        mail($destinoMail, "Mensaje de contacto del cliente" . $nombre, $contenido);

        return print(json_encode('ok'));
    }

    return print(json_encode('no'));