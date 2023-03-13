import Vue from "vue";
import Vuex from "vuex";
import stocks from "@/stocks/stocks";

// import stocks from "./modules/stocks";
// import balance from "./modules/balance";
// import sellStock from "./modules/sellStock";
// import buyStock from "./modules/buyStock";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    balance: 10000,
    stockPortifolio: [],
    stocks: [],
  },
  getters: {
    getBalance(state) {
      return state.balance.toLocaleString("pt-BR");
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
    addStocks(state, { stocks }) {
      state.stocks = stocks;
    },
    buyNewStockMutation(state, { payload, sum }) {
      state.stockPortifolio.push(payload);
      state.balance -= sum;
    },
    buySameStockMutation(state, { qntd, indexStock, sum }) {
      let stock = state.stockPortifolio[indexStock];
      stock.qntd = stock.qntd + qntd;
      state.balance -= sum;
    },
    sellStockMutation(state, { qntd, indexStock, sum }) {
      let stock = state.stockPortifolio[indexStock];
      stock.qntd = stock.qntd - qntd;
      state.balance += sum;

      if (stock.qntd <= 0) state.stockPortifolio.splice(indexStock, 1);
    },
    endDay(state, payload) {
      state.stocks = payload;
    },
    getStocksDb(state, { payload, sumPrices }) {
      state.stocks = payload.stocks;
      state.stockPortifolio = payload.stockPortifolio;
      state.balance -= sumPrices;
    },
  },
  actions: {
    addStocks({ commit }) {
      commit("addStocks", { stocks });
    },
    buySockAction({ state, commit }, payload) {
      let indexStock = state.stockPortifolio.findIndex(
        (item) => item.stock_id == payload.stock_id
      );

      let stock = state.stocks.find((item) => item.id == payload.stock_id);

      let sum = stock.price * payload.qntd;

      if (indexStock < 0) commit("buyNewStockMutation", { payload, sum });
      else
        commit("buySameStockMutation", { qntd: payload.qntd, indexStock, sum });
    },
    sellSockAction({ state, commit }, payload) {
      let indexStock = state.stockPortifolio.findIndex((item) => {
        return item.id == payload.stock_id;
      });

      let stock = state.stocks.find((item) => item.id == payload.stock_id);
      let sum = stock.price * payload.qntd;

      commit("sellStockMutation", { qntd: payload.qntd, indexStock, sum });
    },
    endDay({ state, commit }) {
      let stocks = [...state.stocks];

      let map = stocks.map((item) => {
        let with50Percent = item.price * (25 / 100);
        let percentRandom = Math.round(Math.random() * with50Percent);
        const signals = Math.round(Math.random());

        if (signals == 0) item.price = item.price - percentRandom;
        else item.price += percentRandom;

        return item;
      });

      commit("endDay", map);
    },
    getStocksDb({ commit }, payload) {
      let sumPrices = payload.stockPortifolio
        .map((itemMap) => {
          let filter = payload.stocks.filter(
            (itemFilter) => itemFilter.id == itemMap.stock_id
          );
          return itemMap.qntd * filter[0].price;
        })
        .reduce((total, atual) => total + atual, 0);

      commit("getStocksDb", { payload, sumPrices });
    },
  },
  // modules: { stocks, balance, sellStock, buyStock },
});
