<template>
  <div class="home">
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

import axios from 'axios';
import ProductSummaryCard from '../components/products/ProductSummaryCard.vue'

export default {
  name: 'Home',
  components: {
    ProductSummaryCard
  },
  data () {
    return {
      items:null,
      pending: true,
      error: false,
      product:null
    }
  },  
  mounted() {
    this.requestData();
  },
  methods:{
    async requestData() {
      this.pending = true;
      try {
        const { data } = await axios.get("https://nonchalant-fang.glitch.me/listing");
        this.items =  data;
        console.log(data)
        this.error = false;
      } catch (e) {
        this.items = null;
        this.error = e;
      }
      this.pending = false;
    }
  }
}
</script>

<style lang="scss">

  .home{
    height: inherit;
  }

  .product-cards-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: calc(100% - 80px);
    padding: 40px;
  }
</style>
