/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: maxin
 * @Date: 2022-03-29 16:52:20
 * @LastEditors: maxin
 * @LastEditTime: 2022-03-29 16:53:45
 */
import { createStore } from 'vuex';

const defaultState = {
  count: 0,
};

export default createStore({
  state() {
    return defaultState;
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
  },
  getters: {
    double(state) {
      return 2 * state.count;
    },
  },
});