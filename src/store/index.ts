import axios from 'axios';
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState, BuildingState } from './types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    buildings: [],
  },
  getters: {
    getBuildings(state: RootState): Array<BuildingState> {
      return state.buildings;
    },
  },
  mutations: {
    setBuildings(state: RootState, payload: Array<BuildingState>): void {
      state.buildings = payload;
    },
  },
  actions: {
    async loadBuildings({ commit }): Promise<void> {
      try {
        const fetchedBuildings = await axios.get('/data.json');
        commit('setBuildings', fetchedBuildings.data);
      } catch {
        console.log(Error);
      }
    },
  },
  modules: {
  },
};

export default new Vuex.Store(store);
