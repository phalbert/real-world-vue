<template>
  <div>
    Event Details {{ id }}

    <div class="ft-recipe">
      <div class="ft-recipe__thumb">
        <img
          src="https://source.unsplash.com/900x920"
          alt="Strawberry Waffle"
        />
      </div>
      <div class="ft-recipe__content">
        <header class="content__header">
          <div class="row-wrapper">
            <h2 class="recipe-title">{{ event.title }}</h2>
            <div class="user-rating"></div>
          </div>
          <h2>{{ event.date }}</h2>
          <ul class="recipe-details">
            <li class="recipe-details-item time">
              <i class="ion ion-ios-clock-outline"></i
              ><span class="value">{{ event.attendees }}</span
              ><span class="title">attendees</span>
            </li>
            <li class="recipe-details-item ingredients">
              <i class="ion ion-ios-book-outline"></i
              ><span class="value">{{ event.time }}</span
              ><span class="title">time</span>
            </li>
          </ul>
        </header>
        <p class="description">
          There’s no better way to celebrate May being National Strawberry Month
          than by sharing a sweet treat with your pup!!! Strawberries...
        </p>
        <footer class="content__footer"><a href="#">View Recipe</a></footer>
      </div>
    </div>
  </div>
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
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:100,300,400,600,700|Work+Sans:100,200,300,400,500,600');
:root {
  --headlinesFont: 'Josefin Sans', sans-serif;
  --bodyFont: 'Work Sans', sans-serif;
  --wildWatermelon: #ff4f87;
  --fuelYellow: #f0a035;
  --textColor: #323232;
  --bodyBg: #d6d6d6;
  --white: #fff;
  --black: #000;
}

html {
  box-sizing: border-box;
}

body {
  background: var(--bodyBg);
  font-family: var(--bodyFont);
  color: var(--textColor);
  line-height: 1.5;
}

* {
  box-sizing: inherit;
}

img {
  vertical-align: text-bottom;
}

a {
  color: inherit;
  text-decoration: none;
}

.ft-recipe {
  width: 460px;
  height: 654px;
  background: var(--white);
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  box-shadow: 0 0 88px 0 rgba(0, 0, 0, 0.1607843137);
  overflow: hidden;
  top: 50%;
  right: 50%;
  bottom: 50%;
  left: 50%;
  position: absolute;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.ft-recipe .ft-recipe__thumb {
  position: relative;
  height: 281px;
  box-shadow: 0px 0px 130px 0 rgba(0, 0, 0, 0.38);
}
.ft-recipe .ft-recipe__thumb #close-modal {
  position: absolute;
  top: 0;
  right: 0;
  width: 36px;
  height: 36px;
  background: #000;
  color: var(--white);
  text-align: center;
  line-height: 36px;
  font-size: 22px;
  cursor: pointer;
  z-index: 1;
  -webkit-transition: all 200ms ease;
  transition: all 200ms ease;
}
.ft-recipe .ft-recipe__thumb #close-modal:hover {
  background: transparent;
  color: var(--black);
}
.ft-recipe .ft-recipe__thumb h3 {
  text-align: center;
  position: absolute;
  margin: 0;
  width: 100%;
  color: var(--white);
  font-family: var(--headlinesFont);
  font-size: 25px;
  height: 100%;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 0.25)),
    to(transparent)
  );
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), transparent);
  padding: 2.4rem 0 0;
}
.ft-recipe .ft-recipe__thumb img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: 50% 50%;
  object-position: 50% 50%;
}
.ft-recipe .ft-recipe__content {
  -webkit-box-flex: 1;
  flex: 1;
  padding: 0 2em 1em;
}
.ft-recipe .ft-recipe__content .content__header .row-wrapper {
  display: -webkit-box;
  display: flex;
  padding: 0.55em 0 0.3em;
  border-bottom: 1px solid #d8d8d8;
}
.ft-recipe .ft-recipe__content .content__header .row-wrapper .recipe-title {
  font-family: var(--headlinesFont);
  font-weight: 600;
}
.ft-recipe .ft-recipe__content .content__header .recipe-details {
  display: -webkit-box;
  display: flex;
  list-style: none;
  padding: 1.4em 0 1em;
  margin: 0;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.ft-recipe
  .ft-recipe__content
  .content__header
  .recipe-details
  .recipe-details-item {
  -webkit-box-flex: 1;
  flex: 1;
}
.ft-recipe
  .ft-recipe__content
  .content__header
  .recipe-details
  .recipe-details-item
  i {
  font-size: 30px;
}
.ft-recipe
  .ft-recipe__content
  .content__header
  .recipe-details
  .recipe-details-item
  .value {
  color: #ff4f87;
  margin-left: 0.35em;
  vertical-align: bottom;
  font-size: 24px;
  font-weight: 600;
}
.ft-recipe
  .ft-recipe__content
  .content__header
  .recipe-details
  .recipe-details-item
  .title {
  display: block;
  margin-top: -4px;
  font-family: var(--headlinesFont);
  font-size: 21px;
  font-weight: 300;
}
.ft-recipe .ft-recipe__content .description {
  margin: 0.3em 0 1.8em;
}
.ft-recipe .ft-recipe__content .content__footer {
  text-align: center;
  margin: 0 3rem;
}
.ft-recipe .ft-recipe__content .content__footer a {
  font-family: var(--headlinesFont);
  display: inline-block;
  background: var(--wildWatermelon);
  padding: 0.45em 1em;
  width: 100%;
  text-align: center;
  border-radius: 5px;
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.2px;
  font-size: 17px;
  -webkit-transition: box-shadow 250ms ease, -webkit-transform 250ms ease;
  transition: box-shadow 250ms ease, -webkit-transform 250ms ease;
  transition: transform 250ms ease, box-shadow 250ms ease;
  transition: transform 250ms ease, box-shadow 250ms ease,
    -webkit-transform 250ms ease;
}
.ft-recipe .ft-recipe__content .content__footer a:hover {
  -webkit-transform: translateY(-3px);
  transform: translateY(-3px);
  box-shadow: 0 10px 34px 0 rgba(255, 79, 135, 0.32);
}
</style>
