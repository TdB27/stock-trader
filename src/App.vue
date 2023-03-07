<template>
  <v-app>
    <TopBar></TopBar>
    <v-main>
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeInDown"
        leave-active-class="animate__animated animate__fadeOutUp">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import TopBar from "./views/layouts/TopBar.vue";

export default {
  name: "app",
  components: { TopBar },
};
</script>

<style lang="scss">
#app {
  font-family: Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a {
  text-decoration: none;
}
</style>
