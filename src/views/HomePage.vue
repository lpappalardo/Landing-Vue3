<template>
    <banner-bienvenida clase="bienvenida banner-1" titulo="¡Bienvenido!" subtitulo="Descubre más sobre la mejor experiencia en adopción de mascotas."></banner-bienvenida>
    <texto-introdccion :contenidos="contenidos"></texto-introdccion>
    <tabs-menu :secciones="secciones" ></tabs-menu>
</template>

<script>

import BannerBienvenida from '../components/BannerBienvenida'
import TextoIntrodccion from '../components/TextoIntroduccion'
import TabsMenu from '../components/TabsMenu'

export default {
    name: "HomePage",

    data() {
        return {
            secciones: [
                {
                        nombre: "Personas",
                        img: "./img/person.png",
                        imagenPrincioal : "./img/pet-adoption.jpg",
                        titulo: "Individuos interesados en adoptar",
                        texto: "Buscamos ayudar a las personas que no conocen lugares confiables en los que se puedan  adoptar una mascota, ofreciendo un medio accesible donde poder ver información clara y precisa de las mascotas en adopción, y a su vez poder contactar con las Asociaciones que las dan en adopción a travez de pasos muy sencillos.",
                    },
                    {
                        nombre: "Asociaciones",
                        img: "./img/dog-house.png",
                        imagenPrincioal : "./img/dog-adoption.jpg",
                        titulo: "Individuos interesados en dar en adopcion",
                        texto: "Para las asociaciones interesadas en buscarle un hogar a las mascotas que tienen a su cuidado les ofrecemos, poder agilizar el proceso de adopción facilitando el proceso de indicar que una mascota esta en adopción o ya se le encontró un hogar. A su vez, les ofrecemos la posiblidad de poder generar un registro con la información de las mascotas adoptadas y en adopción.",
                    },
                ],
            contenidos: [
                {
                    img: "./img/introduccion-1.png",
                    class : "contenido-card",
                    titulo: "El Problema detectado",
                    texto: "Debido a la creciente conciencia social que se está tomando sobre el cuidado de las mascotas y de animales en general, durante los últimos años cobró gran importancia la difusión de mascotas que están en adopción por medio de las redes sociales. Si bien estos medios son masivos y están muy cercanos al público general, la gestión de los mismos puede presentar dificultades.",
                },
                {
                    img: "./img/introduccion-2.png",
                    class : "contenido-card invertido",
                    titulo: "Nuestro Objetivo",
                    texto: "Se quiere facilitar el contacto entre los interesados en adoptar y dar en adopción a una mascota.",
                },
                {
                    img: "./img/introduccion-3.png",
                    class : "contenido-card",
                    titulo: "Nuestra Propuesta",
                    texto: "Lo que planteamos es una aplicación que permitirá a los diferentes interesados en adoptar a una mascota tener un medio de contacto con los interesados en adoptar una mascota. A su vez, permitirá cargar y actualizar los datos de los animales a los que se les están buscando un hogar, lo que permitirá tener un registro claro de las mascotas a las que ya le encontraron un hogar y a las que le siguen buscando uno. ",
                },
            ]
        }
    },

    components: {
        BannerBienvenida,
        TextoIntrodccion,
        TabsMenu
    },
};

</script>