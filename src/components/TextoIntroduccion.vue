<template>
    <section class="container seccion">
            <div v-for="contenido in contenidos" :key="contenido.id" class="card">
                <picture>
                    <img :src=contenido.img alt="">
                </picture>
                <div :class=contenido.class>
                    <h3>{{contenido.titulo}}</h3>
                    <p>
                    {{contenido.texto}}
                    </p>
                </div>   
            </div>
        </section>
</template>

<script>
export default {
 
  props: {
    contenidos: Object,
  }
}
</script>
