<template>
  <div class="conatiner">
    <h4>Event List</h4>
    <br />
    <br />
    <div v-if="!events"><base-loader /></div>
    <div v-else class="wrap">
      <event-card v-for="event in events" :key="event.id" :event="event"/>
    </div>
  </div>
</template>

<script>
import { getEvents } from '@/services/events.js'
import EventCard from '../components/EventCard'

export default {
  data() {
    return {
      events: null
    }
  },
  components: {
    EventCard
  },
  async created () {
    this.events = await getEvents();
    console.log(this.events)
  },
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
