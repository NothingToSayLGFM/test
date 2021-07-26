<template>
  <div class="container list" v-if="!!favorites.length">
    <GifCard
      v-for="(favorite, index) in favorites"
      :key="`favorite-${index}`"
      :gifId="favorite.id"
      :gifImage="favorite.img"
      :isHome="false"
    />
  </div>
  <h1 v-else>Nothing in favorites</h1>
</template>

<script>
import GifCard from "../components/GifCard.vue";
export default {
  components: { GifCard },
  name: "Favorite",
  computed: {
    favorites() {
      return this.$store.state.favorites.favorites;
    },
  },
};
</script>
