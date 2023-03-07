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
    buyStockMutation(state, payload) {
      state.stockPortifolio.push(payload);
    },
    sellStockMutation(state, payload) {
      let stock = state.stockPortifolio[payload.indexStock];
      stock.qntd = stock.qntd - payload.qntd;

      if (stock.qntd <= 0) state.stockPortifolio.splice(payload.indexStock, 1);
    },
  },
  actions: {
    buySockAction({ commit }, payload) {
      commit("buyStockMutation", payload);
    },
    sellSockAction({ state, commit }, payload) {
      let indexStock = state.stockPortifolio.findIndex((item) => {
        return item.id == payload.stock_id;
      });

      commit("sellStockMutation", { qntd: payload.qntd, indexStock });
    },
  },
  modules: {},
});
