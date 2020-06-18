import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    listDonasi: [
      { nama: "Mark", nominal: 50000 },
      { nama: "Joseph", nominal: 35000 },
      { nama: "Pinto", nominal: 100000 },
    ],
  },
  mutations: {
    addDonasi(state, payload) {
      state.listDonasi.push(payload);
    },
    deleteDonasi(state, payload) {
      state.listDonasi.splice(payload, 1);
    },
  },
  actions: {
    saveDonasi({ state, commit }, payload) {
      state.isLoading = true;
      setTimeout(() => {
        commit("addDonasi", payload);
        state.isLoading = false;
      }, 1500);
    },
    hapusDonasi({ commit }, payload) {
      commit("deleteDonasi", payload);
    },
  },
  modules: {},
});
