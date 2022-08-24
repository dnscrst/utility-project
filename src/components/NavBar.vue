<template>
  <header>
    <div class="nav-bar">
      <nav>
        <span>
            <figure class="logo">
                <img src='../assets/logo.png' alt="logo">
            </figure>
        </span>
           <BurgerMenu />    
      </nav>                
    </div>
  </header>
</template>

<script>
import BurgerMenu from './BurgerMenu.vue';
    export default {
    name: "NavBar",
    components: { BurgerMenu }
}
</script>

<style lang="scss">
@media only screen and (min-width: 0px) {

}

</style>