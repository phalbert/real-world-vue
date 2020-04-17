<template>
  <div>
    <h1>Oops!</h1>
    <h3>It looks like you are experiencing a network issue.</h3>
    <router-link :to="{ name: 'event-list' }"
      >Back to the home page</router-link
    >
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
