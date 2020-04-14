<template>
  <div class="conatiner">
    <h4>Event List</h4>
    <br />
    <br />
    <div class="wrap">
      <event-card />
      <event-card />
      <event-card />
      <event-card />
      <event-card />
    </div>
  </div>
</template>

<script>
import EventCard from '../components/EventCard'
export default {
  components: {
    EventCard
  }
}
</script>

<style scoped>
.conatiner {
	width: 100%;
	height: 500px;
}
.wrap {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	    flex-wrap: wrap;
	-webkit-box-pack: center;
	    -ms-flex-pack: center;
	        justify-content: center;
	-webkit-box-align: center;
	    -ms-flex-align: center;
	        align-items: center;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	    -ms-flex-direction: row;
	        flex-direction: row;
}
</style>
