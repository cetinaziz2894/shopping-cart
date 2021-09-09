<template>
  <div class="home">
    <Loader v-if="getLoader"/>
    <div class="product-cards-container">
      <ProductSummaryCard
        v-for="product in items"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductSummaryCard from "../components/products/ProductSummaryCard.vue";
import Loader from "../components/Loader.vue";

export default {
  name: "Home",
  components: {
    ProductSummaryCard,
    Loader
  },
  data() {
    return {
      items: null,
      product: null,
      loader: this.$store.state.loader,
    };
  },
  mounted() {
    this.requestData();
  },
  computed: {
    getLoader() {
      return this.$store.state.loader;
    },
  },
  methods: {
    async requestData() {
      this.$store.getters.changeLoader(true);
      this.pending = true;
      try {
        const { data } = await axios.get(
          "https://nonchalant-fang.glitch.me/listing"
        );
        this.items = data;
        this.$store.getters.changeLoader(false);
      } catch (e) {
        this.items = null;
        this.$store.getters.changeLoader(false);
      }
    },
  },
};
</script>

<style lang="scss">
.home {
  height: inherit;
}

.product-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: calc(100% - 80px);
  padding: 40px;
}
</style>
