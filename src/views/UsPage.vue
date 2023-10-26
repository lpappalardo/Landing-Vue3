<template>
     <banner-bienvenida clase="bienvenida banner-2" titulo="Sobre Nosotros" subtitulo="Nuestra misión es facilitar el proceso de adopción para las mascotas sin hogar."></banner-bienvenida>
     <cards-equipo :miembros="miembros" ></cards-equipo>
     <contact-form></contact-form>
</template>

<script>

import BannerBienvenida from '../components/BannerBienvenida'
import CardsEquipo from '../components/CardsEquipo'
import ContactForm from '../components/ContactForm'

export default {
    name: "UsPage",

    data() {
        return {
            miembros: [
                    {
                        nombre: "Laura Martinez",
                        img: "./img/person-1.png",
                        puesto : "Fundadora" 
                    },                 
                    {
                        nombre: "Marcelo Rodriguez",
                        img: "./img/person-2.png",
                        puesto : "Programador" 
                    }, 
                    {
                        nombre: "Lorena Lopez",
                        img: "./img/person-3.png",
                        puesto : "Programadora" 
                    }, 
                    {
                        nombre: "Gastón Gomez",
                        img: "./img/person-4.png",
                        puesto : "Diseñador" 
                    }, 
                ],
        }
    },

    components: {
        BannerBienvenida,
        CardsEquipo,
        ContactForm
    },
};

</script>