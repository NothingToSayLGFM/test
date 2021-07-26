const favorites = {
  state: {
    favorites: [],
  },
  mutations: {
    ADD_TO_FAVORITE(state, data) {
      const isDuplicated = state.favorites.find((el) => el.id === data.id);
      if (isDuplicated) {
        return;
      }
      state.favorites.push(data);
    },
    REMOVE_FROM_FAVORITE(state, data) {
      const search = state.favorites.findIndex((el) => el.id === data);
      state.favorites.splice(search, 1);
    },
  },
};

export default favorites;
