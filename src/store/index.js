import Vue from "vue";
import Vuex from "vuex";
// import fetchCampaignCountInfo from "../api/index";

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
    getData({ commit }) {
      fetch("/front-test/campaignCountInfo.json")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((res) => {
          commit("setCountInfo", res.responseData);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
