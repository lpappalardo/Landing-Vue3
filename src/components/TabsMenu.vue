<template>
    <section class="container seccion">
    <div class="tabs">
        <div class="nav-tabs">
                <div v-for="(seccion, index) in secciones" :key="seccion.id" class="nav-tabs-item" @click="setActive(index)"  :class="{ 'active' : isActiveTab(index)}">
                    <img class="icon" :src=seccion.img>
                    {{ seccion.nombre }}
                </div>
        </div>
        <div class="tab-content">
            <div v-for="(seccion, index) in secciones" :key="seccion.id" class="tab-pane" v-show="isActiveTab(index)">
                <div class="for-example">
                    <h3>
                        {{ seccion.titulo }}
                    </h3>
                    <img :src=seccion.imagenPrincioal>
                    <p>
                    {{ seccion.texto }}
                    </p>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
export default {

  data() {
    return {
        activeTAb: 0
    }
  },

  methods: {
    setActive(tab){
        this.activeTAb = tab
    },
    isActiveTab(tab){
        return this.activeTAb === tab
    }
  },

  props: {
    secciones: Object,
    titulo: String
  }
}
</script>
