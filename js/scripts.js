$(function(){
    
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

})