<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import M from 'materialize-css';

export default {
  name: 'app',
  mounted() {
    M.AutoInit();
  },
  watch: {
    $route: {
      handler: (to) => {
        document.title = to.meta.title || 'My Account - In-Charge';
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Product+Sans|Lato&display=swap');

body {
  margin: 0;
  padding: 0;
  position: relative;
  background-color: #fff;
  font-family: 'Product Sans', sans-serif;
}

.toast {
  font-size: 13px;
  span.error {
    display: block;
    font-weight: 700;
    margin-right: 5px;
    color: $warning-color !important;
  }
  span.success {
    font-weight: 700;
    color: $success-color !important;
  }
}
</style>
