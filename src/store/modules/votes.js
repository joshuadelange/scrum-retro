import mock_data from '../../data/votes';

export default {
  state: () => ({
    all: mock_data.votes
  }),
  mutations: {
    add (state, vote) {
      state.all.push(vote);
    }
  },
  actions: {
    add({commit, state}, vote) {
      commit('add', vote);
    }
  },
  getters: {
    votes_for_card: (state) => (id) => {
      return state.all.filter(vote => vote.card_id == id);
    }
  }
}