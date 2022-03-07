import { createStore, createLogger } from 'vuex'

import categories from './modules/categories'
import cards from './modules/cards'
import votes from './modules/votes'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    categories,
    cards,
    votes
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})