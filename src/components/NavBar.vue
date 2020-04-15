<template>
  <div id="nav" class="nav">
    <router-link to="/" class="brand">Real World Events</router-link> 
    <nav>
      <router-link :to="{ name: 'event-list' }">List</router-link> |
      <router-link :to="{ name: 'event-create' }">Create</router-link>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav > .brand {
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #164f69;
  text-decoration: none;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #164f69;
  border-bottom: solid 2px #39b982;
}
</style>
