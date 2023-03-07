export default {
  state: {
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
  mutations: {
    endDay(state, payload) {
      state.stocks = payload;
    },
  },
  actions: {
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
};
