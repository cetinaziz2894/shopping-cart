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
  background-color: var(--main-bg-color);
  border: 0.5px solid var(--main-border-color-white);

  h3.name {
    color: gray;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 1.2rem;
    margin: 15px 0px;
  }

  .bottom {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h5.price {
      font-size: 20px;
      font-weight: 300;
      color: gray;
      margin: 0 10px;
      padding: 0;
    }
  }

  .bottom * {
    margin: 10px;
  }

  .image {
    width: 200px;
    height: 200px;
  }
}
button.view-product-button {
  padding: 10px;
  background-color: var(--main-button-bg-color-orange);
  border: none;
  color: var(--main-bg-color);
  font-weight: bold;
  font-size: 1.15rem;
  font-weight: 400;
  border-radius: 3px;
  cursor: pointer;
}

@media (min-width: 500px) {
  .card {
    width: 430px;

    .image {
      width: 250px;
      height: 250px;
    }

    .bottom h5.price{
      font-size: 30px;
    }
  }
}

@media (max-width: 500px) {
  .card {
    width: 300px;

    h3.name {
      margin: 10px 0px;
    }
    .bottom {
      height: 15%;

      h5.price {
        font-size: 24px;
      }
    }
  }

  button.view-product-button {
    font-size: 1rem;
  }
}
</style>