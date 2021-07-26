<template>
  <div class="card" :style="{ backgroundImage: 'url(' + gifImage + ')' }">
    <button class="event-button" @click="addToFavorite" v-if="isHome">
      <img src="@/assets/img/favorite.png" />
    </button>
    <button class="event-button" @click="removeFormFavorite" v-else>
      <img src="@/assets/img/delete.png" />
    </button>
  </div>
</template>

<script>
export default {
  name: "GifCard",
  props: {
    gifImage: {
      type: String,
    },
    gifId: {
      type: String,
    },
    isHome: {
      type: Boolean,
    },
  },
  methods: {
    addToFavorite() {
      const favorite = {
        id: this.gifId,
        img: this.gifImage
      }
      this.$store.commit("ADD_TO_FAVORITE", favorite);
    },
    removeFormFavorite() {
      this.$store.commit("REMOVE_FROM_FAVORITE", this.gifId);
    }
  },
};
</script>
