$(document).ready(function(){
    
    /* 1. Funciones Menu Principal */
    /* Insertar y quitar ".icono-cerrar" al boton del menu */
    $('#menu-navegacion .navbar-toggler').click(function(){
        $('.boton-menu').toggleClass('icono-cerrar');
        $('.navbar').toggleClass('navbar-open');
    });

    /* Al hacer click en un enlace del menu principal */
    $('#menu-navegacion .navbar-nav a').click(function(){
        /* 1) Quitar la clase ".icono-cerrar" */
        $('.boton-menu').removeClass('icono-cerrar');
        $('.navbar').removeClass('navbar-open');

        /* 2) Contraemos el menu*/
        $('#menu-navegacion .navbar-collapse').collapse('hide');
    });

    /* 2. INICIALIZANDO SWIPER */
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });

    /* 3. INICIALIZANDO STICKIT */
    $('#menu-navegacion').stickit({
        className: 'menu-fijo'
    });

    /* 4. INICIALIZANDO PageScroll2id */
    $("#menu-principal a").mPageScroll2id({
        offset: 50,
        highlightClass: 'active'
    });

    /* 5. AJAX FORMULARIO DE CONTACTO*/
    $(".formulario-contacto").bind("submit", function(){
        $("#alerta").slideDown();
        $(".close").click(function(){
            $("#alerta").slideUp();
        });

        $.ajax({
            type: $(this).attr("method"),
            url: $(this).attr("action"),
            data: $(this).serialize(),
            success: function(respuesta){
                if(respuesta == "ok"){
                    $("#alerta").removeClass("hide").removeClass("alert-danger").removeClass("alert-success").removeClass("show").addClass("show").addClass("alert-success");
                    $("#btn-alerta").removeClass("d-none").addClass("d-block");
                    $(".respuesta").html("Enviado!");
                    $(".mensaje-alerta").html("El mensaje ha sido enviado correctamente.");
                    $("#limpia").trigger("click");
                }
                else{
                    $("#alerta").removeClass("hide").removeClass("alert-danger").removeClass("alert-success").removeClass("show").addClass("show").addClass("alert-danger");
                    $("#btn-alerta").removeClass("d-none").addClass("d-block");
                    $(".respuesta").html("Error al enviar!");
                    $(".mensaje-alerta").html("No se pudo enviar tu mensaje, intentelo de nuevo.");
                }
            },
            error: function(){
                $("#alerta").removeClass("hide").removeClass("alert-danger").removeClass("alert-success").removeClass("show").addClass("show").addClass("alert-danger");
                $("#btn-alerta").removeClass("d-none").addClass("d-block");
                $(".respuesta").html("Error al enviar!");
                $(".mensaje-alerta").html("No se pudo enviar tu mensaje, intentelo de nuevo.");
            }
        });

        return false;

    });

});