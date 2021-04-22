import Vue from "vue";
import Vuex from "vuex";
import { fetchCampaignCountInfo } from "../api/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countInfo: {},
  },
  mutations: {
    setCountInfo(state, countInfo) {
      state.countInfo = countInfo;
    },
  },
  actions: {
    async getData({ commit }) {
      let response = await fetchCampaignCountInfo();
      commit("setCountInfo", response.responseData);
    },
  },
});
