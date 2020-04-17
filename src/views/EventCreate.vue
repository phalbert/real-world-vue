<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
      <BaseSelect
        label="Select a category"
        :options="categories"
        v-model="event.category"
      />

      <h3>Name & describe your event</h3>
      <BaseInput
        label="Title"
        v-model="event.title"
        type="text"
        placeholder="Title"
        class="field form-list__row"
        :class="{ error: $v.event.title.$error }"
        @blur="$v.event.title.$touch()"
      />

      <template v-if="$v.event.title.$error">
        <p v-if="!$v.event.title.required" class="errorMessage">
          Title is required.
        </p>
      </template>

      <BaseInput
        label="Description"
        v-model="event.description"
        type="text"
        placeholder="Description"
        class="field"
        :class="{ error: $v.event.description.$error }"
        @blur="$v.event.description.$touch()"
      />

      <template v-if="$v.event.description.$error">
        <p v-if="!$v.event.description.required" class="errorMessage">
          Description is required.
        </p>
      </template>

      <h3>Where is your event?</h3>
      <BaseInput
        label="Location"
        v-model="event.location"
        type="text"
        placeholder="Location"
        class="field"
        :class="{ error: $v.event.location.$error }"
        @blur="$v.event.location.$touch()"
      />

      <template v-if="$v.event.location.$error">
        <p v-if="!$v.event.location.required" class="errorMessage">
          Location is required.
        </p>
      </template>

      <h3>When is your event?</h3>

      <div class="field">
        <label>Date</label>
        <datepicker
          v-model="event.date"
          placeholder="Select a date"
          :input-class="{ error: $v.event.date.$error }"
          @opened="$v.event.date.$touch()"
        />
      </div>

      <template v-if="$v.event.date.$error">
        <p v-if="!$v.event.date.required" class="errorMessage">
          Date is required.
        </p>
      </template>

      <BaseSelect
        label="Select a time"
        :options="times"
        v-model="event.time"
        class="field"
        :class="{ error: $v.event.time.$error }"
        @blur="$v.event.time.$touch()"
      />

      <template v-if="$v.event.time.$error">
        <p v-if="!$v.event.time.required" class="errorMessage">
          Time is required.
        </p>
      </template>

      <BaseButton
        type="submit"
        buttonClass="-fill-gradient"
        :disabled="$v.$anyError"
        >Submit</BaseButton
      >
      <p v-if="$v.$anyError" class="errorMessage">
        Please fill out the required field(s).
      </p>
    </form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import NProgress from 'nprogress'
import { required } from 'vuelidate/lib/validators'

export default {
  components: {
    Datepicker
  },
  data() {
    const times = []
    for (let i = 1; i <= 24; i++) {
      times.push(i + ':00')
    }
    return {
      times,
      categories: this.$store.state.categories,
      event: this.createFreshEventObject()
    }
  },
  validations: {
    event: {
      title: { required },
      description: { required },
      location: { required },
      date: { required },
      time: { required }
    }
  },
  methods: {
    createEvent() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        NProgress.start()
        this.$store
          .dispatch('event/createEvent', this.event)
          .then(() => {
            this.$router.push({
              name: 'event-show',
              params: { id: this.event.id }
            })
            this.event = this.createFreshEventObject()
          })
          .catch(() => {
            NProgress.done()
          })
      }
    },
    createFreshEventObject() {
      const user = this.$store.state.user.user
      const id = Math.floor(Math.random() * 10000000)
      return {
        id: id,
        user: user,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: []
      }
    }
  }
}
</script>

<style scoped>
.box {
  width: 330px;
  position: absolute;
  top: 50%;
  left: 50%;

  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.box-form {
  width: 320px;
  position: relative;
  z-index: 1;
}

.box-login-tab {
  width: 50%;
  height: 40px;
  background: #fdfdfd;
  position: relative;
  float: left;
  z-index: 1;

  -webkit-border-radius: 6px 6px 0 0;
  -moz-border-radius: 6px 6px 0 0;
  border-radius: 6px 6px 0 0;

  -webkit-transform: perspective(5px) rotateX(0.93deg) translateZ(-1px);
  transform: perspective(5px) rotateX(0.93deg) translateZ(-1px);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  -webkit-box-shadow: 15px -15px 30px rgba(0, 0, 0, 0.32);
  -moz-box-shadow: 15px -15px 30px rgba(0, 0, 0, 0.32);
  box-shadow: 15px -15px 30px rgba(0, 0, 0, 0.32);
}

.box-login-title {
  width: 35%;
  height: 40px;
  position: absolute;
  float: left;
  z-index: 2;
}

.box-login {
  position: relative;
  top: -4px;
  width: 320px;
  background: #fdfdfd;
  text-align: center;
  overflow: hidden;
  z-index: 2;

  -webkit-border-top-right-radius: 6px;
  -webkit-border-bottom-left-radius: 6px;
  -webkit-border-bottom-right-radius: 6px;
  -moz-border-radius-topright: 6px;
  -moz-border-radius-bottomleft: 6px;
  -moz-border-radius-bottomright: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;

  -webkit-box-shadow: 15px 30px 30px rgba(0, 0, 0, 0.32);
  -moz-box-shadow: 15px 30px 30px rgba(0, 0, 0, 0.32);
  box-shadow: 15px 30px 30px rgba(0, 0, 0, 0.32);
}

.box-info {
  width: 260px;
  top: 60px;
  position: absolute;
  right: -5px;
  padding: 15px 15px 15px 30px;
  background-color: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 0;

  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;

  -webkit-box-shadow: 15px 30px 30px rgba(0, 0, 0, 0.32);
  -moz-box-shadow: 15px 30px 30px rgba(0, 0, 0, 0.32);
  box-shadow: 15px 30px 30px rgba(0, 0, 0, 0.32);
}

.line-wh {
  width: 100%;
  height: 1px;
  top: 0px;
  margin: 12px auto;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
}

/*--------------------
Form
---------------------*/

a {
  text-decoration: none;
}

button:focus {
  outline: 0;
}

.b {
  height: 24px;
  line-height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.b-form {
  opacity: 0.5;
  margin: 10px 20px;
  float: right;
}

.b-info {
  opacity: 0.5;
  float: left;
}

.b-form:hover,
.b-info:hover {
  opacity: 1;
}

.b-support,
.b-cta {
  width: 100%;
  padding: 0px 15px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  letter-spacing: -1px;
  font-size: 16px;
  line-height: 32px;
  cursor: pointer;

  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;
  border-radius: 16px;
}

.b-support {
  border: #87314e 1px solid;
  background-color: transparent;
  color: #87314e;
  margin: 6px 0;
}

.b-cta {
  border: #df405a 1px solid;
  background-color: #df405a;
  color: #fff;
}

.b-support:hover,
.b-cta:hover {
  color: #fff;
  background-color: #87314e;
  border: #87314e 1px solid;
}

.fieldset-body {
  display: table;
}

.fieldset-body p {
  width: 100%;
  display: inline-table;
  padding: 5px 20px;
  margin-bottom: 2px;
}

label {
  float: left;
  width: 100%;
  top: 0px;
  color: #032942;
  font-size: 13px;
  font-weight: 700;
  text-align: left;
  line-height: 1.5;
}

label.checkbox {
  float: left;
  padding: 5px 20px;
  line-height: 1.7;
}

input[type='text'],
input[type='password'] {
  width: 100%;
  height: 32px;
  padding: 0px 10px;
  background-color: rgba(0, 0, 0, 0.03);
  border: none;
  display: inline;
  color: #303030;
  font-size: 16px;
  font-weight: 400;
  float: left;

  -webkit-box-shadow: inset 1px 1px 0px rgba(0, 0, 0, 0.05),
    1px 1px 0px rgba(255, 255, 255, 1);
  -moz-box-shadow: inset 1px 1px 0px rgba(0, 0, 0, 0.05),
    1px 1px 0px rgba(255, 255, 255, 1);
  box-shadow: inset 1px 1px 0px rgba(0, 0, 0, 0.05),
    1px 1px 0px rgba(255, 255, 255, 1);
}

input[type='text']:focus,
input[type='password']:focus {
  background-color: #f8f8c6;
  outline: none;
}

input[type='submit'] {
  width: 100%;
  height: 48px;
  margin-top: 24px;
  padding: 0px 20px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  line-height: 40px;
  text-align: center;
  background-color: #87314e;
  border: 1px #87314e solid;
  opacity: 1;
  cursor: pointer;
}

input[type='submit']:hover {
  background-color: #df405a;
  border: 1px #df405a solid;
}

input[type='submit']:focus {
  outline: none;
}

p.field span.i {
  width: 24px;
  height: 24px;
  float: right;
  position: relative;
  margin-top: -26px;
  right: 2px;
  z-index: 2;
  display: none;

  -webkit-animation: bounceIn 0.6s linear;
  -moz-animation: bounceIn 0.6s linear;
  -o-animation: bounceIn 0.6s linear;
  animation: bounceIn 0.6s linear;
}

/*--------------------
Transitions
---------------------*/

.box-form,
.box-info,
.b,
.b-support,
.b-cta,
input[type='submit'],
p.field span.i {
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

/*--------------------
Credits
---------------------*/

.icon-credits {
  width: 100%;
  position: absolute;
  bottom: 4px;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.1);
  text-align: center;
  z-index: -1;
}

.icon-credits a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.2);
}
</style>
