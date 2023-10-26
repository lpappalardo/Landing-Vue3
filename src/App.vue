<template>
  <header class="fondo-principal">
    <div class="container encabezado">
        <img src="../public/img/logo.png" alt="Logo Adoption App">
        <TheNavigation/>
    </div>
  </header>

  <router-view></router-view>

  <footer class="fondo-principal">
    <div class="footerWeb container">
        <div class="footerWeb-elements">
            <img src="../public/img/logo.png" alt="Logo Adoption App">
            <nav class="navegacion centrar">
                <ul>
                    <li class="item centrar"><a href="#"><img class="redSocial" src="../public/img/facebook.png" alt="Facebook"></a></li>
                    <li class="item centrar"><a href="#"><img class="redSocial" src="../public/img/instagram.png" alt="Instagram"></a></li>
                    <li class="item centrar"><a href="#"><img class="redSocial" src="../public/img/twitter.png" alt="Twitter"></a></li>
                </ul>
            </nav>
        </div>
        <hr>
        <p class="centrar">Hecho por Lautaro Pappalardo &copy; 2023</p>
    </div>
  </footer>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue'

export default {
  name: 'App',
  components: {
    TheNavigation
  }
}
</script>

<style>

</style>
