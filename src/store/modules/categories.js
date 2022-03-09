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
    },
    category_for_id: (state) => (id) => {
      return state.all.find(category => category.id == id);
    }
  }
}