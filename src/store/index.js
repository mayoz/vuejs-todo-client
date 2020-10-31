import client from '@/api';
import {
  SET_ITEMS,
  ADD_ITEM,
  TOGGLE_ITEM,
  REMOVE_ITEM,
} from './mutation-types';

export default {
  state: {
    items: [],
  },

  actions: {
    /**
     * @name fetch
     * @param {function} [commit]
     */
    fetchItems({ commit }) {
      return client
        .fetch()
        .then((items) => commit(SET_ITEMS, items));
    },

    /**
     * @name store
     * @param {function} [commit]
     * @param {string} text
     */
    storeItem({ commit }, text) {
      return client
        .store(text)
        .then((item) => commit(ADD_ITEM, item));
    },

    /**
     * @name store
     * @param {function} [commit]
     * @param {string} id
     */
    toggleItem({ commit }, id) {
      return client
        .toggle(id)
        .then(() => commit(TOGGLE_ITEM, id));
    },

    /**
     * @name store
     * @param {function} [commit]
     * @param {string} id
     */
    destroyItem({ commit }, id) {
      return client
        .destroy(id)
        .then(() => commit(REMOVE_ITEM, id));
    },
  },

  mutations: {
    /**
     * @param {object} state
     * @param {array} items
     */
    [SET_ITEMS](state, items) {
      state.items = items;
    },

    /**
     * @param {object} state
     * @param {object} item
     */
    [ADD_ITEM](state, item) {
      state.items.push(item);
    },

    /**
     * @param {object} state
     * @param {string} id
     */
    [TOGGLE_ITEM](state, id) {
      const index = state.items.findIndex((cur) => cur.id === id);
      if (index > -1) {
        state.items[index].completed = !state.items[index].completed;
      }
    },

    /**
     * @param {object} state
     * @param {string} id
     */
    [REMOVE_ITEM](state, id) {
      const index = state.items.findIndex((item) => item.id === id);
      if (index > -1) {
        state.items.splice(index, 1);
      }
    },
  },
};
