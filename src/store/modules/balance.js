export default {
  state: {
    balance: 10000,
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
  },
};
