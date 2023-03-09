<template>
  <v-app-bar app color="indigo lighten-5" elevate>
    <div class="d-flex align-center">
      <v-toolbar-title class="mr-2">
        <strong>STOCK</strong>TRADER
      </v-toolbar-title>

      <router-link to="/">
        <v-btn large color="transparent" elevation="0">Início </v-btn>
      </router-link>

      <router-link to="/portifolio" class="mx-2">
        <v-btn large color="transparent" elevation="0">Portifólio </v-btn>
      </router-link>

      <router-link to="/stocks">
        <v-btn large color="transparent" elevation="0">Ações </v-btn>
      </router-link>
    </div>

    <v-spacer></v-spacer>

    <v-btn @click="endDay" large color="indigo lighten-5" elevation="0">
      FINALIZAR DIA
    </v-btn>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          large
          color="indigo lighten-5"
          elevation="0"
          v-bind="attrs"
          v-on="on">
          SALVAR & CARREGAR
        </v-btn>
      </template>
      <v-list>
        <v-list-item link @click="get">
          <v-list-item-title> Carregar Dados </v-list-item-title>
        </v-list-item>
        <v-list-item link @click="save">
          <v-list-item-title>Salvar Dados</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <span class="mx-2"> SALDO: R$ {{ balance }}</span>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({ balance: "getBalance" }),
  },
  data() {
    return {
      number: 10,
      stocks: this.$store.state.stocks,
    };
  },
  methods: {
    ...mapActions(["endDay", "getStocksDb"]),
    get() {
      this.$http("stocks")
        .then((response) => {
          this.getStocksDb(response.data);
        })
        .catch((errors) => console.log(errors));
    },
    save() {
      this.$http
        .post("stocks", {
          stocks: this.$store.state.stocks,
          stockPortifolio: this.$store.state.stockPortifolio,
        })
        .then((response) => console.log(response.data))
        .catch((errors) => console.log(errors));
    },
  },
};
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
