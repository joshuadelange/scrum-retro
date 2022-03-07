import mock_data from '../../data/categories'

export default {
  state: () => ({
    all: mock_data.categories
  }),
  mutations: {
  },
  actions: {
  },
  getters: {
    all_categories() {
      return state.all;
    }
  }
}