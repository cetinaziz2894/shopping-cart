<template>
  <div class="message">
    <div class="content">
      <h3
        class="status"
        v-bind:class="{
          danger: message.status === 'error',
          green: message.status === 'success',
        }"
      >
        <b>{{ $filters.capitalize(message.status) }}</b> : {{ $filters.capitalize(message.message) }}
      </h3>
      <button class="view-product-button" @click="closeMessage()">Close</button>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  props: ["message"],
  methods: {
    closeMessage() {
      if (this.message.status === "error") {
        this.$store.getters.changeMessage({
          status: null,
          message: null,
        });
      } else {
        this.$store.getters.changeMessage({
          status: null,
          message: null,
        });
        this.$store.commit("emptyCartFromLocalStorage");
        router.push("/");
      }
    },
  }
};
</script>

<style lang="scss">
.danger {
  color: red;
}

.green {
  color: green;
}

.message {
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  backdrop-filter: blur(5px);

  .content {
    width: 60%;
    background-color: var(--main-bg-color);
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--main-border-color-gray);
    border-radius: 5px;
    color: black;
    box-shadow: 0px 0 10px var(--main-box-shadow-color);
    z-index: 100;
    

    h3{
      margin: 10px;
    }

    .status {
      font-size: 30px;
    }

    .message {
      font-size: 28px;
    }

    button {
      margin: 10px;
      width: 20%;
    }
  }
}

@media (max-width: 500px) {

.message {

  .content {
    width: 80%;
    height: 30%;

    h3{
      margin: 10px;
    }

    .status {
      font-size: 22px;
    }

    button {
      width: 40%;
    }
  }
}
}
</style>