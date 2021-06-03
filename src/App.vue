<template>
  <div id="app">
    <Navbar :count="count" />
    <router-view @add-one="increment" @decrement="decrement" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      ++this.count;
    },
    decrement() {
      --this.count;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap");
* {
  font-family: "Roboto", sans-serif;
}
</style>
