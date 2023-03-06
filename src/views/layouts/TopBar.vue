<template>
  <v-app-bar app color="indigo lighten-5" elevate>
    <div class="d-flex align-center">
      <v-toolbar-title class="mr-2"
        ><strong>STOCK</strong>TRADER</v-toolbar-title
      >
      <v-btn-toggle
        mandatory
        color="black"
        background-color="indigo lighten-4"
        borderless>
        <v-btn> <router-link to="/">Home</router-link> </v-btn>
        <v-btn> <router-link to="/portifolio">Portifólio</router-link> </v-btn>
        <v-btn> <router-link to="/acoes">Ações</router-link> </v-btn>
      </v-btn-toggle>
    </div>

    <v-spacer></v-spacer>

    <v-btn large color="indigo lighten-5" elevation="0"> FINALIZAR DIA </v-btn>
    <v-btn large color="indigo lighten-5" elevation="0">
      SALVAR & CARREGAR
    </v-btn>
    <v-text class="mx-2"> SALDO: R$ 10.000</v-text>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.v-application {
  a {
    color: unset;
  }
}
</style>
