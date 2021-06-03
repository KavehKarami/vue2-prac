<template>
  <div id="nav">
    <span>
      <router-link :to="{ name: 'home' }">Home</router-link> |
      <router-link :to="{ name: 'users' }">get all users</router-link>
    </span>

    <span>counter: {{ count }}</span>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
#nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}
</style>
