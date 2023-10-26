<template>
    <section class="seccion">
        <h2 class="seccion-title">Nuestro Equipo</h2>
        <div  class="container equipo">
            <div v-for="miembro in miembros" :key="miembro.id"  class="equipo-card">
                <img :src=miembro.img alt="">
                <div class="equipo-card-text">
                    <h3>{{miembro.nombre}}</h3>
                    <p>{{miembro.puesto}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  props: {
    miembros: Object,
  }
}
</script>
