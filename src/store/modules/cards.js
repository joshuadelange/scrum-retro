import mock_data from '../../data/cards'

export default {
  state: () => ({
    all: mock_data.cards
  }),
  mutations: {
    update(state, data) {
      const index = state.all.findIndex(card => card.id == data.id);
      state.all[index] = data;
    },
    delete(state, card_id) {
      const index = state.all.findIndex(card => card.id == card_id);
      state.all.splice(index, 1);
    }
  },
  actions: {
    update_card_name({commit, state}, data) {
      let card = Object.assign({}, state.all.find(card => card.id == data.id));
      card.name = data.name;
      commit('update', card);
    },
    delete_card({commit, state}, card_id) {
      commit('delete', card_id);
    }
  },
  getters: {
    cards_for_category: (state) => (id) => {
      return state.all.filter(card => card.category_id == id);
    },
    card_for_id: (state) => (id) => {
      return state.all.find(card => card.id == id);
    }
  }
}