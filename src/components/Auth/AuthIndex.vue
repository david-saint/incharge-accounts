<template>
  <div class="-full primary -flex-centralize -m-0 -p-0">
    <auth-nav />
    <div class="box">
      <div class="progress" v-show="loading">
        <div class="indeterminate primary lighten-5"></div>
      </div>
      <h5 class="hide-on-med-and-down">
        <slot name="title-desktop"></slot>
      </h5>
      <h5 class="hide-on-large-only">
        <slot name="title-mobile"></slot>
      </h5>
      <p class="hide-on-med-and-down">
        <slot name="subtitle"></slot>
      </p>
      <p class="hide-on-large-only center-align logo">
        <svg width="62" height="55" viewBox="0 0 39 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M39.0003 17.4716C39.0003 26.27 32.632 33.5609 24.3094 34.8751C24.2789 31.0693 23.394 27.4698 21.8408 24.2617C25.4376 24.1377 28.3158 21.1448 28.3158 17.4716C28.3158 13.8218 25.474 10.8436 21.9089 10.6846C23.4392 7.47171 24.3003 3.8719 24.31 0.0679932C32.6326 1.38291 39.0003 8.67472 39.0003 17.4716Z" fill="#BD5FBE"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.8472 0C20.8472 5.99883 18.3774 11.413 14.4105 15.2557C13.5429 16.0972 12.604 16.8631 11.6026 17.5435C9.47687 18.9881 7.07453 20.0471 4.49233 20.6212C3.04553 20.9433 1.54191 21.1127 0 21.1127V10.3699C5.65504 10.3699 10.239 5.72733 10.239 0H20.8472Z" fill="#BD5FBE"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.8466 35H10.3323C10.2864 29.2599 5.67796 24.6212 0 24.6212C1.8734 24.6212 3.69752 24.4066 5.44881 24C8.74107 23.237 11.7787 21.7965 14.4105 19.8304C18.3582 23.6553 20.8234 29.0358 20.8466 35Z" fill="#BD5FBE"/></svg>
      </p>
      <slot></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import AuthNav from './AuthNav.vue';

export default {
  name: 'auth-index',
  props: {
    loading: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  components: { AuthNav },
};
</script>

<style scoped lang="scss">
.-full {
  width: 100vw;
  height: 100vh;
}
.-flex-centralize {
  display: flex;
  align-items: center;
  justify-content: center;
}
.-m-0 {
  margin: 0;
}
.-p-0 {
  padding: 0;
}
.box {
  width: 90%;
  padding: 30px;
  max-width: 377px;
  overflow-y: auto;
  position: relative;
  border-radius: 4px;
  background-color: #fff;
  max-height: calc(100vh - 100px) !important;
  h5 {
    font-size: 26px;
    margin: 20px;
    color: #2A2A2A;
    text-align: center;
  }
  p {
    color: #A9A9BA;
    font-size: 13px;
    text-align: center;
    margin: 10px 0;
  }
  .progress {
    top: 0;
    left: 0;
    margin: 0;
    position: absolute;
  }
}
</style>
