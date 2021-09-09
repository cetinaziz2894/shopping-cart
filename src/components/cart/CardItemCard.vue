<template>
  <Divider />
  <div class="cart-item-card">
    <div class="top">
      <img class="image" :src="product.image" :alt="product.name" />
      <div class="text">
        <h3>{{ product.name }}</h3>
        <h4>₹{{ item_cost }}</h4>
      </div>
    </div>
    <div class="bottom">
      <div class="counter">
        <button class="icon" :disabled="isDisabled" @click="decreaseFromCart()">
          -
        </button>
        <div class="count">
          <p class="items-count">{{ product_total }}</p>
        </div>
        <button class="icon" @click="addToCart()">+</button>
      </div>
      <div class="remove">
        <p @click="removeFromCart()">REMOVE</p>
      </div>
    </div>
  </div>
</template>
<script>
import Divider from "../../components/Divider.vue";
export default {
  props: ["product"],
  components: { Divider },
  computed: {
    item_cost() {
      return (this.product.price * this.product.quantity).toFixed(2);
    },
    product_total() {
      return this.$store.getters.productQuantity(this.product);
    },
    isDisabled() {
      return this.product.quantity === 1;
    },
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
    },
    removeFromCart() {
      this.$store.commit("removeFromCart", this.product);
    },
    decreaseFromCart() {
      this.$store.commit("decreaseFromCart", this.product);
    },
  },
};
</script>

<style lang="scss">
.cart-item-card {
  width: 90%;
  margin: 10px 0px;
  padding: 10px;
  text-align: left;
}

.top {
  display: flex;
  .image {
    width: 200px;
    height: 200px;
  }
  .text {
    width: 100%;
    margin: 0 20px;
    font-weight: normal;

    h3 {
      margin: 0;
      font-weight: normal;
      height: 20%;
    }

    h4 {
      height: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0;
    }
  }
}

.bottom {
  display: flex;
  flex-direction: row;

  .counter {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;

    button.icon {
      border: 1px solid var(--main-border-color);
      background-color: var(-main-bg-color);;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      text-align: center;
      cursor: pointer;
      font-size: 20px;
    }

    .count {
      width: 50px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 10px;
      border: 1px solid var(--main-border-color);;
    }
  }

  .remove {
    width: calc(100% - 200px);
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      margin: 0;
      margin-top: 5px;
      font-weight: 300;
      font-size: 20px;
      cursor: pointer;
    }
  }
}
</style>