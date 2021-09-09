<template>
  <Loader v-if="getLoader"/>
  <Message v-show="getMessage" v-bind:message="message" />
  <div class="content">
    <h1 class="title">MY CART ({{ total_cart_items }})</h1>
    <div class="items">
      <CardItemCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    <CardSummaryCard class="content-summary" />
  </div>
</template>

<script>
import CardItemCard from "../components/cart/CardItemCard.vue";
import CardSummaryCard from "../components/cart/CardSummaryCard.vue";
import Loader from "../components/Loader.vue";
import Message from "../components/Message.vue"

export default {
  data() {
    return {
      loader: this.$store.state.loader,
      message: this.$store.state.message
    };
  },
  components: {
    CardItemCard,
    CardSummaryCard,
    Loader,
    Message
  },
  computed: {
    products() {
      return this.$store.getters.cartItems;
    },
    total_cart_items() {
      return this.$store.getters.cartItems.length;
    },
    getLoader(){
      return this.$store.state.loader
    },
    getMessage(){
      return this.$store.state.message.status
    }
  }
};
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  .items {
    height: 100%;
    width: 90%;
    overflow-y: scroll;
  }
}

.title {
  width: 90%;
  display: flex;
  font-weight: 500;
  font-size: 28px;
  align-items: flex-start;
}

.content-summary {
  display: flex;
  width: 100%;
  align-items: flex-end;
  padding: 0;
  margin-bottom: 0;
}
</style>