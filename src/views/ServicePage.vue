<template>
     <banner-bienvenida clase="bienvenida banner-3" titulo="Nuestros Servicios" subtitulo="Amigable, cercano y de calidad."></banner-bienvenida>
     <tabs-menu :secciones="secciones" ></tabs-menu>
     <pet-form></pet-form>
</template>

<script>

import BannerBienvenida from '../components/BannerBienvenida'
import TabsMenu from '../components/TabsMenu'
import PetForm from '../components/PetForm'

export default {
    name: "ServicePage",

    data() {
        return {
            secciones: [
                {
                        nombre: "Gatos",
                        img: "./img/cat.png",
                        imagenPrincioal : "./img/cats.jpg",
                        titulo: "Compañeros felinos",
                        texto: "Cada gato tiene su propia historia, personalidad única y un deseo de encontrar un hogar donde puedan ser amados y cuidados. Nuestra misión es unir a estos gatos especiales con personas y familias que desean experimentar la alegría y el amor incondicional que un compañero felino puede brindar.",
                    },
                    {
                        nombre: "Perros",
                        img: "./img/dog.png",
                        imagenPrincioal : "./img/dogs.jpg",
                        titulo: "Compañeros caninos",
                        texto: "Promovemos no la adopción de nuestros compañeros peludos, sino que también abogamos por la importancia de respetar y proteger a estos fieles amigos. Creemos que todos los perros merecen una oportunidad y que a través de la adopción, podemos construir una comunidad más fuerte y un mundo más amable para los perros y las personas.",
                    },
                    {
                        nombre: "Exóticos",
                        img: "./img/bird.png",
                        imagenPrincioal : "./img/birds.jpg",
                        titulo: "Nos estamos expandiendo",
                        texto: "No solo nos interesa encontrale un hogar a los típicos animales que a uno se le podría ocrrurir adoptar como mascota, sino que estamos empezando a realizar el esfuerzo en encontrarle un hogar a animales mas peculiares en estado de necesidad, como por pueden ser aves.",
                    },
                ]
        }
    },

    components: {
        BannerBienvenida,
        TabsMenu,
        PetForm
    },
};

</script>