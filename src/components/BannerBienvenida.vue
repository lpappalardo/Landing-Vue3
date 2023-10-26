<template>
    <div :class="clase">
            <div class="container">
                <h1>{{ titulo }}</h1>
                <p>{{ subtitulo }}</p>
                <button class="btn">Instalar App</button>
            </div>
        </div>
</template>

<script>
export default {
  props: {
    clase: String,
    titulo: String,
    subtitulo: String
  }
}
</script>
 
