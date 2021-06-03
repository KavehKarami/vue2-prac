<template>
  <div>
    <div>
      <button @click="decrement">decrement</button>
      <button @click="increment">increment</button>
    </div>
    <div v-if="user.address">
      <h3>name: {{ user.name }}</h3>
      <h3>username: {{ user.username }}</h3>
      <h3>email: {{ user.email }}</h3>
      <h3>phone: {{ user.phone }}</h3>
      <h3>website: {{ user.website }}</h3>
      <h3>city: {{ user.address.city }}</h3>
      <h3>company name: {{ user.company.name }}</h3>
    </div>
  </div>
</template>

<script>
import api from "../services/api";

export default {
  async mounted() {
    const id = this.$route.params.id;
    const { data: user } = await api.getUser(id);
    this.user = user;
  },
  data() {
    return {
      user: {},
    };
  },
  methods: {
    increment() {
      this.$emit("add-one");
    },
    decrement() {
      this.$emit("decrement");
    },
  },
};
</script>

<style lang="scss" scoped></style>
