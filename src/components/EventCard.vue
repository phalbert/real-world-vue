<template>
  <router-link
    class="event-link"
    :to="{ name: 'event-show', params: { id: event.id } }"
  >
    <div class="box one">
      <div class="date">
        <h4>{{ event.date }}</h4>
      </div>
      <h1>
        {{ event.title }} <br />
        <span>
          <base-icon name="users" style="color: white;">
            {{ event.attendes }} attending
          </base-icon>
        </span>
      </h1>
      <div class="poster p1">
        <h4>
          {{ event.id }}
        </h4>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
.box {
  margin: 10px;
  width: 300px;
  height: 490px;
  text-align: center;
  border-radius: 3px;
  -webkit-transition: 200ms ease-in-out;
  -o-transition: 200ms ease-in-out;
  transition: 200ms ease-in-out;
  -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}
.box:hover {
  margin-bottom: -10px;
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
}
.box h1 {
  color: #fff;
  padding: 30px;
  margin-top: 100px;
  text-align: center;
  font-weight: 100;
  font-size: 25px;
  background: rgba(0, 0, 0, 0.8);
  -webkit-box-shadow: 0 0 30px rgba(0, 0, 0, 0.7);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
}

.box span {
  color: gray;
  padding: 30px;
  margin-top: 100px;
  text-align: center;
  font-weight: 100;
  font-size: 15px;
}

.date h4 {
  color: #fff;
  font-weight: 300;
  text-align: center;
  letter-spacing: 3px;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.9);
}
.poster {
  width: 130px;
  height: 130px;
  margin: 70px auto;
  position: relative;
  border-radius: 100px;
}
.poster h4 {
  top: 36px;
  color: #fff;
  position: relative;
  font-size: 40px;
  text-align: center;
  font-weight: 100;
}
.one {
  background: url('https://source.unsplash.com/900x920');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

/* POSTER*/
.p1 {
  background: #2b5876; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #4e4376,
    #2b5876
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#4e4376),
    to(#2b5876)
  );
  background: -webkit-linear-gradient(left, #4e4376, #2b5876);
  background: -o-linear-gradient(left, #4e4376, #2b5876);
  background: linear-gradient(
    to right,
    #4e4376,
    #2b5876
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-box-shadow: 0 0 20px darkblue;
  box-shadow: 0 0 20px darkblue;
}

/*  FOLLOW*/
.Follow {
  background: url('https://pbs.twimg.com/profile_images/959092900708544512/v4Db9QRv_bigger.jpg')
    no-repeat center / contain;
  width: 50px;
  height: 50px;
  bottom: 9px;
  right: 20px;
  display: block;
  position: fixed;
  border-radius: 50%;
  z-index: 999;
  animation: rotation 10s infinite linear;
}

@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
}
</style>
