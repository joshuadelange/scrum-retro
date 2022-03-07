import mock_data from '../../data/cards'

export default {
  state: () => ({
    all: mock_data.cards
  }),
  mutations: {
  },
  actions: {
  },
  getters: {
    cards_for_category: (state) => (id) => {
      return state.all.filter(card => card.category_id == id);
    }
  }
}