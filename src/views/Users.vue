<template>
  <div>
    <div>Get All Users</div>
    <User :cards="cards" :border-color="borderColor">
      <span slot="start">start users box</span>
      <span slot="end">end users box</span>
    </User>
  </div>
</template>

<script>
import api from "../services/api";
import User from "@/components/User.vue";

export default {
  components: {
    User,
  },
  data: () => ({
    cards: [],
    borderColor: "#000",
  }),
  async mounted() {
    const { data: cards } = await api.getUsers();
    this.cards = cards;
  },
};
</script>
