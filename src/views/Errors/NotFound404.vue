<template>
  <div class="-full primary white-text -flex-centralize -m-0 -p-0">
    <div class="box">
      <img src="../../assets/undraw_page_not_found_su7k.svg" alt="404 Not Found">
      <h5>Sorry, we couldn’t find that page</h5>
      <p class="grey-text text-lighten-5">
        We’ve moved a lot of stuff over the years, and it must’ve gotten lost in the mix.
        Please try retyping the address or just head back to our home page.
      </p>
      <router-link to="/" class="white-text">Go Home</router-link>
    </div>
  </div>
</template>

<script>
// Import from node_modules first
// Import from files directory.

// export the vue component.
export default {
  name: 'errors-not-found-404',
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
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  img {
    width: 80%;
    max-width: 500px;
  }
  p {
    font-weight: 300;
  }
  a {
    font-size: 14px;
    text-transform: uppercase;
  }
}
</style>
