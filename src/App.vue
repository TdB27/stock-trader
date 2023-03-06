<template>
  <v-app>
    <Navigation></Navigation>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "./views/layouts/Navigation.vue";

export default {
  name: "app",
  components: { Navigation },
};
</script>

<style lang="scss">
#app {
  font-family: Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  text-decoration: none;
}
</style>
