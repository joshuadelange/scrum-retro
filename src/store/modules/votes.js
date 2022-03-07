import mock_data from '../../data/votes';

import NextId from '../../classes/NextId'

export default {
  state: () => ({
    all: mock_data.votes
  }),
  mutations: {
    add (state, vote) {
      state.all.push(vote);
    },
    remove(state, vote_id) {
      const index = state.all.findIndex(vote => vote.id == vote_id)
      state.all.splice(index, 1);
    }
  },
  actions: {
    remove_vote({commit, state}, vote_id) {
      commit('remove', vote_id);
    },
    add_vote({commit, state}, card_id) {
      commit('add', {
        id: new NextId(state.all).id,
        card_id: card_id,
        voter: 'current_user'
      });
    }
  },
  getters: {
    votes_for_card: (state) => (id) => {
      return state.all.filter(vote => vote.card_id == id);
    },
    number_of_current_user_votes_for_card: (state) => (id) => {
      return state.all.filter(vote => vote.card_id == id && vote.voter == 'current_user').length;
    }
  }
}