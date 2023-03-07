import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    balance: 10000,
    stockPortifolio: [],
    stocks: [
      {
        id: 1,
        stock: "BMW",
        price: 110,
      },
      {
        id: 2,
        stock: "Amazon",
        price: 22,
      },
      {
        id: 3,
        stock: "Google",
        price: 210,
      },
      {
        id: 4,
        stock: "Apple",
        price: 250,
      },
    ],
  },
  getters: {
    getBalance(state) {
      let sumPrices = state.stockPortifolio
        .map((p) => p.qntd * p.price)
        .reduce((total, atual) => total + atual, 0);

      let balanceCalculated = state.balance - sumPrices;
      return balanceCalculated.toLocaleString("pt-BR");
    },
  },
  mutations: {
    setStockMutation(state, payload) {
      state.stockPortifolio.push(payload);
    },
  },
  actions: {
    setSockAction({ commit }, payload) {
      commit("setStockMutation", payload);
    },
  },
  modules: {},
});
