<template>
  <div class="cart-item-card">
    <div v-if="loading">Loading...</div>
    <div class="buttons">
      <button class="view-product-button button" @click="$router.push('/')">
        &#60; CONTINUE SHOPPING
      </button>
      <button class="view-product-button button" @click="placeOrder()">
        PLACE ORDER
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cart: null,
      pending: true,
      error: false,
      errorMessage:'',
      loading: false
    };
  },
  methods: {
    async placeOrder() {
      this.cart = this.$store.state.cart;
      console.log(this.cart);
      this.loading = true;
      try {
        await axios.post(
          "https://nonchalant-fang.glitch.me/order",
          this.cart
        );
        this.error = false;
        this.loading =false;
      } catch (e) {
        if (e.response.status === 404) {
          console.log("girdi");
          this.error = true;
          this.errorMessage = e.response.data.message
          console.log(this.error);
          console.log(this.errorMessage);
          this.loading=false
        }
      }
      this.pending = false;
    },
  },
};
</script>

<style lang="scss">
.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  box-shadow: 0px 0 10px rgba(170, 170, 170, 0.8);
  z-index: 100;

  .button {
    height: 50px;
    width: 50%;
    margin: 10px;
    border-radius: 3px;
  }

  .button:nth-child(1) {
    background-color: rgb(209, 209, 209);
    color: black;
  }
}
</style>