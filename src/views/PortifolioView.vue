<template>
  <v-container>
    <div class="d-flex">
      <cards-component
        v-for="acao in acoes"
        :key="acao.id"
        :acao="acao"
        :rulesAditional="rulesAditional"
        :configDefault="configDefault"
        @clickButton="sell">
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
      configDefault: {
        colorCard: "#2e8cd7", // verde
        buttonDescription: "Vender",
      },
      acoes: [
        {
          id: 1,
          nameAction: "BMW",
          value: "110",
          qntdAcoes: 10,
        },
        {
          id: 2,
          nameAction: "Google",
          value: "200",
          qntdAcoes: 22,
        },
        {
          id: 3,
          nameAction: "Apple",
          value: "250",
          qntdAcoes: 6,
        },
      ],
      rulesAditional: false,
    };
  },
  methods: {
    sell(event) {
      console.log(event);
    },
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
