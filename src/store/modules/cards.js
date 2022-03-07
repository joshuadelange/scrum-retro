import mock_data from '../../data/cards'
import NextId from '../../classes/NextId'

export default {
  state: () => ({
    all: mock_data.cards
  }),
  mutations: {
    add (state, card) {
      state.all.push(card);
    },
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
    },
    add_card({commit, state}, category_id) {
      commit('add', {
        id: new NextId(state.all).id,
        category_id: category_id,
        name: null
      });
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