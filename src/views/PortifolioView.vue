<template>
  <v-container>
    <v-alert v-if="stocks.length == 0" type="error"> Não há ações! </v-alert>
    <div v-else class="d-flex">
      <cards-component
        v-for="stock in stocks"
        :key="stock.id"
        :stock="stock"
        :rulesAditional="rulesAditional"
        :configDefault="configDefault"
        @clickButton="sell">
      </cards-component>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CardsComponent from "../components/CardsComponent.vue";

export default {
  components: { CardsComponent },
  data() {
    return {
      configDefault: {
        colorCard: "#2e8cd7", // verde
        buttonDescription: "Vender",
      },
      rulesAditional: false,
    };
  },
  computed: {
    ...mapGetters({ stocks: "getStocksPortifolio" }),
  },
  methods: {
    ...mapActions(["sellSockAction"]),
    sell(event) {
      let stock = {
        stock_id: event.stock.id,
        qntd: event.qntd,
      };
      this.sellSockAction(stock);
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
