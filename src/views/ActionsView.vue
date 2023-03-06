<template>
  <v-container>
    <div class="d-flex">
      <cards-component
        v-for="acao in acoes"
        :key="acao.id"
        :acao="acao"
        :rulesAditional="rulesAditional">
      </cards-component>
    </div>
  </v-container>
</template>

<script>
import CardsComponent from "../components/CardsComponent.vue";
export default {
  components: { CardsComponent },
  data() {
    return {
      acoes: [
        {
          id: 1,
          nameAction: "BMW",
          value: "110",
        },
        {
          id: 2,
          nameAction: "Google",
          value: "200",
        },
        {
          id: 3,
          nameAction: "Apple",
          value: "250",
        },
        {
          id: 4,
          nameAction: "Apple",
          value: "250",
        },
        {
          id: 5,
          nameAction: "Apple",
          value: "250",
        },
      ],
      rulesAditional: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.d-flex {
  flex-wrap: wrap;

  * {
    flex: 1;
  }
}
</style>
