<template>
    <section class="formulario container">
        <h2>Dinos que máscota te gustaría encontrar</h2>
        <form action="">
            <div>
                <label for="especie">Especie:*</label>

                <select name="especie" id="especie" v-model="especie">
                    <option v-for="especie in especiesMascotas" :key="especie.id">{{ especie }}</option>
                </select>

            </div>

            <div>
                    <h3 for="email">Tamaño:*</h3>

                    <div>
                        <div v-for="tamanioMascota in tamaniosMascotas" :key="tamanioMascota.id" class="radio-input">
                            <input type="radio" :name="tamanioMascota.class" :id="tamanioMascota.class" :value="tamanioMascota.class" v-model="tamanio">
                            <label>{{ tamanioMascota.name }}</label>
                        </div>
                    </div>
            </div>
            <div>
                <label for="rango">Rango de búsqueda(en KM):*</label>
                <input class="input-text-form" type="number" name="rango" id="rango" placeholder="Rango..." v-model="rango">
            </div>

            <div>
                <label for="mensaje">Información adicional (opcional):</label>
                <textarea name="mensaje" id="mensaje" placeholder="Mensaje..." v-model="mensaje"></textarea>
            </div>
            <div>
                <span class="msg" v-if="lessThanLimitMessage">
                    Te quedan {{ remainingCharsMessage }} caracteres restantes en el mensaje.
                </span>
                <span class="msgError"  v-else>
                    Superaste el límite de caracteres disponibles que es de {{ limiteMensaje }}.
                </span>
            </div>

            <button class="enviar btn" :disabled="!canSubmit">
                Enviar
            </button>
        </form>
    </section>
</template>

<script>
export default {

    computed : {
        canSubmit() {
            return this.tamanio.length > 0 && this.rango.length > 0 && this.mensaje.length > 0
        },

        lessThanLimitMessage() {
            return this.mensaje.length <= this.limiteMensaje
        },

        remainingCharsMessage() {
            return this.limiteMensaje - this.mensaje.length
        },

    },

    data() {
        return {
            limiteMensaje : 200,
            especiesMascotas : ['Gato', 'Perro', 'Exótico'],
            tamaniosMascotas : [{name:'Pequeño',class:'small'},{name:'Mediano',class:'medium'},{name:'Grande',class:'big'}],
            tamanio : '',
            rango : '',
            mensaje : '',
            especie : ''
        }
    },
}
</script>
