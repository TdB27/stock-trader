<template>
  <v-container>
    <div class="d-flex">
      <cards-component
        v-for="stock in stocks"
        :key="stock.id"
        :stock="stock"
        :rulesAditional="rulesAditional"
        :configDefault="configDefault"
        @clickButton="buy">
      </cards-component>
    </div>
  </v-container>
</template>

<script>
import CardsComponent from "../components/CardsComponent.vue";
import { mapActions } from "vuex";

export default {
  components: { CardsComponent },
  data() {
    return {
      configDefault: {
        colorCard: "#409744", // verde
        buttonDescription: "Comprar",
      },
      rulesAditional: false,
    };
  },
  computed: {
    stocks() {
      return this.$store.state.stocks;
    },
  },
  methods: {
    ...mapActions(["buySockAction"]),
    buy(event) {
      let stock = {
        id: this.generateId(),
        stock_id: event.stock.id,
        qntd: event.qntd,
      };

      this.buySockAction(stock);
    },
    generateId() {
      let portifolio = this.$store.state.stockPortifolio;

      if (portifolio.length > 0) {
        const stock = portifolio.reduce((prevId, currentId) => {
          return prevId.id > currentId.id ? prevId : currentId;
        });

        return stock.id + 1;
      } else return 1;
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
