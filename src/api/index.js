import axios from "axios";

const http = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  SameSite: "Lax",
});

const api = {
  async getGifs(page, search, query) {
    try {
      let queryString;
      console.log(search);
      if (!search) {
        queryString = `/trending?limit=20&api_key=${process.env.VUE_APP_API_KEY}&offset=${page}`;
      } else {
        queryString = `/search?limit=20&api_key=${process.env.VUE_APP_API_KEY}&offset=${page}&q=${query}`;
      }
      const res = await http.get(queryString);
      const {
        data: { data },
      } = res;
      return data;
    } catch (err) {
      throw new Error(err);
    }
  },
};

export default api;
