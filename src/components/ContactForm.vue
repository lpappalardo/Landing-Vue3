<template>
    <section class="formulario container">
            <h2>Contacta con nosotros</h2>
            <form @submit.prevent="enviarFormulario" action="">
                <div>
                    <label for="name">Nombre:*</label>
                    <input type="text" name="name" id="name" placeholder="Nombre..." v-model="nombre">
                </div>
                <div class="msg-container">
                    <span class="msg" v-if="lessThanLimitName">
                        Te quedan {{ remainingCharsName }} caracteres restantes en el nombre.
                    </span>
                    <span class="msgError"  v-else>
                        Superaste el límite de caracteres disponibles que es de {{ limiteNombre }}.
                    </span>
                </div>
                <div>
                        <label for="email">Correo:*</label>
                        <input class="input-text-form" type="email" name="email" id="email" placeholder="Email..." v-model="email">
                </div>
                <div>
                    <label for="telefono">Teléfono:*</label>
                    <input class="input-text-form" type="number" name="telefono" id="telefono" placeholder="Teléfono..." v-model="telefono">
                </div>
                <div class="msg-container">
                    <span class="msg" v-if="lessThanLimitPhone">
                        El Teléfono debe tener menos de 10 caracteres.
                    </span>
                    <span class="msgError"  v-else>
                        Superaste el límite de caracteres disponibles que es de {{ limiteTelefono }}.
                    </span>
                </div>
                <div>
                    <label for="mensaje">Mensaje:*</label>
                    <textarea name="mensaje" id="mensaje" placeholder="Mensaje..." v-model="mensaje"></textarea>
                </div>
                <div class="msg-container">
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

    data() {
        return {
            limiteMensaje : 200,
            limiteNombre: 20,
            limiteTelefono: 10,
            nombre : '',
            email : '',
            telefono : '',
            mensaje : '',
            nombreMensaje : '',
            correoMensaje : '',
            telefonoMensaje : '',
            mensajeMensaje : ''
        }

    },

    methods : {
        enviarFormulario() {
            this.nombreMensaje = this.nombre,
            this.correoMensaje = this.correo,
            this.telefonoMensaje = this.telefono,
            this.mensajeMensaje = this.mensaje
        }
    },

    computed : {
        canSubmit() {
            return this.nombre.length > 0 && this.email.length > 0 && this.telefono.length > 0 && this.mensaje.length > 0
        },

        lessThanLimitName() {
            return this.nombre.length <= this.limiteNombre
        },

        remainingCharsName() {
            return this.limiteNombre - this.nombre.length
        },

        lessThanLimitPhone() {
            return this.telefono.length <= this.limiteTelefono
        },

        remainingCharsPhone() {
            return this.limiteTelefono - this.telefono.length
        },


        lessThanLimitMessage() {
            return this.mensaje.length <= this.limiteMensaje
        },

        remainingCharsMessage() {
            return this.limiteMensaje - this.mensaje.length
        },

    },
}
</script>
	