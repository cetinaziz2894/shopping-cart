<template>
  <div class="cart-item-card">
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
      cart: null
    };
  },
  methods: {
    async placeOrder() {
      this.cart = this.$store.state.cart
      this.$store.getters.changeLoader(true)
      const url ="https://nonchalant-fang.glitch.me/order";
      try {
        const { data } = await axios.post(url,
          this.cart
        );
        this.$store.getters.changeLoader(false)
        this.$store.getters.changeMessage(data)
      } catch (e) {
        if (e.response.status === 404) {
          this.$store.getters.changeLoader(false)
          this.$store.getters.changeMessage(e.response.data)
        }
      }
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
  box-shadow: 0px 0 10px var(--main-box-shadow-color);
  z-index: 100;

  .button {
    height: 50px;
    width: 50%;
    margin: 10px;
    border-radius: 3px;
  }

  .button:nth-child(1) {
    background-color: var(--main-button-bg-color);
    color: var(--main-black-color);
  }
}
</style>