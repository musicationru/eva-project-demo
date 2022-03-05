import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import buildings from './buildings';

Vue.use(Vuex);

const store: StoreOptions<any> = {
  state: {
  },
  getters: {

  },
  mutations: {
  },
  actions: {
  },
  modules: {
    buildings,
  },
};

export default new Vuex.Store(store);
