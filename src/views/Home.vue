<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" style="width: 250px; height: auto;">
    <button @click="logout" class="btn">Log out</button>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {},
  methods: {
    logout() {
      this.$auth.logout();
    },
  },
};
</script>
