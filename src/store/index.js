import Vue from "vue";
import Vuex from "vuex";

// import stocks from "./modules/stocks";
// import balance from "./modules/balance";
// import sellStock from "./modules/sellStock";
// import buyStock from "./modules/buyStock";

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
        .map((itemMap) => {
          let filter = state.stocks.filter(
            (itemFilter) => itemFilter.id == itemMap.stock_id
          );
          return itemMap.qntd * filter[0].price;
        })
        .reduce((total, atual) => total + atual, 0);

      let balanceCalculated = state.balance - sumPrices;
      return balanceCalculated.toLocaleString("pt-BR");
    },
    getStocksPortifolio(state) {
      let fullPortifolio = state.stockPortifolio.map((itemMap) => {
        let filter = state.stocks.filter(
          (itemFilter) => itemFilter.id == itemMap.stock_id
        );
        return { ...filter[0], ...itemMap };
      });

      return fullPortifolio;
    },
  },
  mutations: {
    buyNewStockMutation(state, payload) {
      state.stockPortifolio.push(payload);
    },
    buySameStockMutation(state, payload) {
      let stock = state.stockPortifolio[payload.indexStock];
      stock.qntd = stock.qntd + payload.qntd;
    },
    sellStockMutation(state, payload) {
      let stock = state.stockPortifolio[payload.indexStock];
      stock.qntd = stock.qntd - payload.qntd;

      if (stock.qntd <= 0) state.stockPortifolio.splice(payload.indexStock, 1);
    },
    endDay(state, payload) {
      state.stocks = payload;
    },
  },
  actions: {
    buySockAction({ state, commit }, payload) {
      let indexStock = state.stockPortifolio.findIndex((item) => {
        return item.stock_id == payload.stock_id;
      });

      if (indexStock < 0) commit("buyNewStockMutation", payload);
      else commit("buySameStockMutation", { qntd: payload.qntd, indexStock });
    },
    sellSockAction({ state, commit }, payload) {
      let indexStock = state.stockPortifolio.findIndex((item) => {
        return item.id == payload.stock_id;
      });

      commit("sellStockMutation", { qntd: payload.qntd, indexStock });
    },
    endDay({ state, commit }) {
      let map = state.stocks.map((item) => {
        let with50Percent = item.price * (25 / 100);
        let percentRandom = Math.round(Math.random() * with50Percent);
        const signals = Math.round(Math.random());

        if (signals == 0) item.price = item.price - percentRandom;
        else item.price += percentRandom;

        return item;
      });

      commit("endDay", map);
    },
  },
  // modules: { stocks, balance, sellStock, buyStock },
});
