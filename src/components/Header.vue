<template>
  <div class="header">
    <nav class="nav container">
      <ul class="navbar">
        <li>
          <router-link to="/">home</router-link>
        </li>
        <li>
          <router-link to="/favorite">favorites</router-link>
        </li>
      </ul>
      <form @submit.prevent="search">
        <img src="@/assets/img/search.png" />
        <input placeholder="Search  GIF" v-model="query"/>
      </form>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      query: ""
    }
  },
  methods: {
    search() {
      if (!this.query) {
        return
      }
      this.$store.commit("SET_QUERY", this.query);
      this.$store.commit("SET_SEARCH", true);
      this.$store.dispatch("getGifs", 0)
      this.query = "";
    }
  }
};
</script>
