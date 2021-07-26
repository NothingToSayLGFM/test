<template>
  <div class="home">
    <div class="container list" v-if="gifs">
      <GifCard v-for="(gif, index) in gifs" :key="`gif-${index}`" 
      :gifImage="gif.images.downsized.url"
      :gifId="gif.id"
      :isHome="true"
      />
    </div>
    <div v-if="showLoader" class="loader">
      <Loader/>
    </div>
    <div class="error" v-if="error">
      <h2>Check your internet</h2>
    </div>
    <div ref="newInfinity" id="scroll-trigger"></div>
  </div>
</template>

<script>
import GifCard from "@/components/GifCard.vue";
import Loader from "@/components/Loader.vue";

export default {
  name: "Home",
  components: { GifCard, Loader },
  data() {
    return {
      currentPage: 0,
      showLoader: false,
      error: false
    };
  },
  async mounted() {
    try {
      this.showLoader = true;
      await this.$store.dispatch("getGifs", this.currentPage);
      this.showLoader = false;
      this.scrollPageFutured();
    } catch(err) {
      this.error = true;
    }
  },
  methods: {
    scrollPageFutured() {
      const newObserver = new IntersectionObserver((etries) => {
        etries.forEach(async (entry) => {
          if (entry.intersectionRatio > 0) {
            this.showLoader = true;
            let currentPage = (this.currentPage += 20);
            await this.$store.dispatch("addGifs", currentPage);
            this.showLoader = false;
          }
        });
      });
      newObserver.observe(this.$refs.newInfinity);
    },
  },
  computed: {
    gifs() {
      return this.$store.state.gifs;
    },
  }
};
</script>
