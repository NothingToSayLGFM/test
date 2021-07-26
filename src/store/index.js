import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import api from "@/api";
import favorites from "./favorite";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ["favorites"],
    }),
  ],
  state: {
    gifs: null,
    query: null,
    search: false,
  },
  mutations: {
    SET_INITIAL_GIFS(state, data) {
      state.gifs = data;
    },
    ADD_GIFS(state, data) {
      state.gifs = [...state.gifs, ...data];
    },
    SET_SEARCH(state, data) {
      state.search = data;
    },
    SET_QUERY(state, data) {
      state.query = data;
    },
  },
  actions: {
    async getGifs({ commit, state }, page) {
      try {
        const res = await api.getGifs(page, state.search, state.query);
        commit("SET_INITIAL_GIFS", res);
      } catch (err) {
        throw new Error(err);
      }
    },
    async addGifs({ commit, state }, page) {
      try {
        const res = await api.getGifs(page, state.search, state.query);
        commit("ADD_GIFS", res);
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  modules: {
    favorites: favorites,
  },
});
