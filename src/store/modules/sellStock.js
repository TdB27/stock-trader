export default {
  getters: {
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
    sellStockMutation(state, payload) {
      let stock = state.stockPortifolio[payload.indexStock];
      stock.qntd = stock.qntd - payload.qntd;

      if (stock.qntd <= 0) state.stockPortifolio.splice(payload.indexStock, 1);
    },
  },
  actions: {
    sellSockAction({ state, commit }, payload) {
      let indexStock = state.stockPortifolio.findIndex((item) => {
        return item.id == payload.stock_id;
      });

      commit("sellStockMutation", { qntd: payload.qntd, indexStock });
    },
  },
};
