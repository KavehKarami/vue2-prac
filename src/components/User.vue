<template>
  <div>
    <div v-for="(card, index) in cards" :key="index" class="card">
      <h4>Name: {{ card.name }}</h4>
      <h5>Username: {{ card.username }}</h5>
      <a href="/">See More</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cards: Array,
  },
};
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #000;
  padding: 5px;
  margin: 5px 0;

  h4 {
    margin-top: 0;
  }
}
</style>
