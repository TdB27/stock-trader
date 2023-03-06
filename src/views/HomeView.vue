<template>
  <v-container>
    <h1>Negocie e Consulte suas Ações</h1>

    <v-alert type="info" color="#2e8cd7">
      Você pode Salvar & Carregar os dados salvos no banco
    </v-alert>
    <v-alert type="success" color="#409744">
      Clique em 'Finalizar Dia' para iniciar um novo dia!
    </v-alert>

    <h2>Seu Salvo: R$ 10.000</h2>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 40px;
  margin: 16px 0;
}

h2 {
  font-size: 32px;
}
</style>
