export default {
  mutations: {
    buyNewStockMutation(state, payload) {
      state.stockPortifolio.push(payload);
    },
    buySameStockMutation(state, payload) {
      let stock = state.stockPortifolio[payload.indexStock];
      stock.qntd = stock.qntd + payload.qntd;
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
  },
};
