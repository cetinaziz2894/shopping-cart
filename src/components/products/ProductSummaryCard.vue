<template>
  <div class="card">
    <img class="image" :src="product.image" :alt="product.name" />
    <h3 class="name">{{ product.name }}</h3>
    <div class="bottom">
      <h5 class="price">₹{{ product.price }}</h5>
      <button class="view-product-button" @click="addToCart()">
        ADD BASKET
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
      this.$router.push("/cart");
    },
  },
};
</script>

<style lang="scss">
.card {
  width: 80%;
  margin: 0;
  padding: 15px;
  background-color: white;
  border: 0.5px solid #e2e2e2;

  h3.name {
    color: gray;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 1.2rem;
  }

  .bottom {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: end;

    h5.price {
      font-size: 30px;
      font-weight: 300;
      color: gray;
      margin: 0 10px;
      padding: 0;
    }
  }

  .bottom * {
      margin: 0 10px;
  }

  .image {
    width: 250px;
    height: 250px;
  }
}
button.view-product-button {
  padding: 10px;
  background-color: rgb(251, 100, 27);
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1.15rem;
  font-weight: 400;
  border-radius: 3px;
  cursor: pointer;
}

@media (min-width: 500px) {
  .card {
    width: 350px;
  }
}
</style>