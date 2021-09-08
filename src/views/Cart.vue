<template>
  <div class="content">
    <h1 class="title">MY CART ({{ total_cart_items }})</h1>
    <CardItemCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    <CardSummaryCard class="content-summary" />
  </div>
</template>

<script>
import CardItemCard from "../components/cart/CardItemCard.vue";
import CardSummaryCard from "../components/cart/CardSummaryCard.vue";

export default {
  components: {
    CardItemCard,
    CardSummaryCard,
  },
  computed: {
    products() {
      console.log(this.$store.getters.cartItems);
      return this.$store.getters.cartItems;
    },
    total_cart_items() {
      return this.$store.getters.cartItems.length;
    },
  },
};
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.title {
  width: 90%;
  display: flex;
  font-weight: 400;
  font-size: 28px;
  align-items: flex-start;
}

.content-summary {
  height: inherit;
  display: flex;
  width: 100%;
  align-items: end;
  padding: 0;
  margin-bottom: 0;
}
</style>