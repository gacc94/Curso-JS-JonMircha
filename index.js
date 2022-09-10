import hamburguerMenu from "./hamburguesa.js";
import { digitalClock,alarm } from "./reloj.js";
import { moveBall,shortcuts } from "./teclado.js";
import countDown from "./cuenta_regresiva.js";
import scrollTopButton from "./button_scroll.js";
import darkTheme from "./theme_dark.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import deteccionDispositivo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";

import getGeolocation from "./geolocalizacion.js";
import searchFilter from "./filtros_busqueda.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_spy.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./validaciones_formulario.js";
import speechReader from "./narrador.js";

const d=document;

d.addEventListener("DOMContentLoaded",(e) => {
    // console.log('El documento se ha cargado')
    hamburguerMenu("#btn_menu", ".aside",".nav__menu a");
    /*82)Ejercicio Reloj Digital*/
     digitalClock("#reloj","#activar-reloj","#detener-reloj");

     alarm("asset/alarma.mp3","#activar-alarma","#detener-alarma");

     /*86) Ejercicio Cuenta Regresiva*/
     countDown(
         "countdown",
         "Julio 28,2022 17:23:50",
         "Felices Fiestas Patrias 😀😀😀"
         );

    /*87)Scroll*/
    scrollTopButton(".scroll-top-btn");

   /*90) Responsive con JS*/

//    responsiveMedia(
//        "youtube",
//        "(min-width:1024px)",
//        `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=93" target="_blank" rel="noopener">Ver Video</a>`, 
//        `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
//     );
//     responsiveMedia(
//         "gmaps",
//         "(min-width:1024px)",
//         `<a href="https://goo.gl/maps/ggL9NsZR2ZvDX7J66" target="_blank" rel="noopener">Ver Mapa</a>`,
//         `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15606.064479238687!2d-77.083096!3d-12.076778!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xae2a6f969b48786e!2sPlaza%20San%20Miguel!5e0!3m2!1ses-419!2spe!4v1657324180981!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
//     );

    responsiveTester('responsive-tester')
   
    deteccionDispositivo('user-device');


    webCam('webcam');
    
    getGeolocation('geolocation');


    /* 96. | Filtros de Busqueda*/ 
    searchFilter('.card-filter','.card')

    
    draw("#winner-btn",".player");

    /* 98. | Responsive Slider*/    
    slider();
    
    /* 99. | crollSpy con Intersection Observer*/
    scrollSpy();

    /* 99. | Video Inteligente*/
    smartVideo();

    /* 101. | Validacion de Formulario*/
    contactFormValidations();

    

})


d.addEventListener('keydown',(e)=>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
})
// 88. Tema Dark/Light 
darkTheme(".dark-theme-btn i","dark-mode");

networkStatus();


/* 104. | Narrador de Voz*/
speechReader();

// const $btn_menu = document.getElementById('btn_menu');
// const $aside_active = document.querySelector('aside')
// const $remove_active = document.querySelector('aside a') 

// $btn_menu.addEventListener('click',(e)=>{
//     $btn_menu.classList.toggle('open');
//     $aside_active.classList.toggle('is-active');
    

// })
// $remove_active.addEventListener('click',(e)=>{
//     $aside_active.classList.remove('is-active');
//     console.log('Hpña')
// })