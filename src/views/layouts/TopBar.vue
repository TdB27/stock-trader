<template>
  <v-app-bar app color="indigo lighten-5" elevate>
    <div class="d-flex align-center">
      <v-toolbar-title class="mr-2">
        <strong>STOCK</strong>TRADER
      </v-toolbar-title>
      <!-- <v-btn-toggle
        mandatory
        color="black"
        background-color="indigo lighten-4"
        borderless>
        <v-btn> <router-link to="/">Início</router-link> </v-btn>
        <v-btn> <router-link to="/portifolio">Portifólio</router-link> </v-btn>
        <v-btn> <router-link to="/acoes">Ações</router-link> </v-btn>
      </v-btn-toggle> -->

      <router-link to="/">
        <v-btn large color="transparent" elevation="0">Início </v-btn>
      </router-link>

      <router-link to="/portifolio" class="mx-2">
        <v-btn large color="transparent" elevation="0">Portifólio </v-btn>
      </router-link>

      <router-link to="/acoes">
        <v-btn large color="transparent" elevation="0">Ações </v-btn>
      </router-link>
    </div>

    <v-spacer></v-spacer>

    <v-btn large color="indigo lighten-5" elevation="0"> FINALIZAR DIA </v-btn>
    <v-btn large color="indigo lighten-5" elevation="0">
      SALVAR & CARREGAR
    </v-btn>
    <span class="mx-2"> SALDO: R$ 10.000</span>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.v-application {
  a {
    color: unset;
    overflow: hidden;
    border-radius: 10px;

    &.router-link-exact-active {
      background: #b8b9c3;
    }
  }
}
</style>
