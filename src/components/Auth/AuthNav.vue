<template>
  <nav class="z-depth-0 transparent">
    <div class="nav-wrapper container">
      <a href="/" class="brand-logo">
        <svg width="34" height="30" viewBox="0 0 340 300" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M148.857 178.056C149.117 165.384 153.494 158.248 143.84 145.469C116.545 109.336 58.4518 148.352 82.5672 212.112C86.1024 221.595 91.1983 230.419 97.6442 238.221C109.308 253.475 132.997 265.669 151.097 268.934C244.458 285.774 283.947 197.729 249.166 145.794C230.26 117.563 215.133 119.279 200.433 109.944C261.745 63.0081 213.373 -23.2715 132.477 5.88176C93.615 19.8852 67.524 70.4738 39.6523 90.3442C25.875 100.157 12.3837 103.602 0.99014 110.779C-6.18704 142.911 27.2163 216.63 50.7729 240.324C84.7819 274.528 121.939 298.142 172.078 299.92C222.217 301.698 266.668 273.741 283.708 230.534C292.737 206.436 293.58 180.035 286.107 155.409C277.944 130.566 268.43 118.455 247.619 102.258C252.438 99.7284 259.701 95.8031 265.875 92.7149C284.994 83.1488 281.371 84.8281 281.139 78.0018C272.561 77.6977 236.568 93.7963 231.076 100.815C233.35 108.574 245.992 113.854 252.911 120.542L271.152 145.279C301.714 209.258 258.919 287.843 179.349 289.176C133.66 289.94 92.9599 268.38 61.5061 236.737C40.8662 215.972 4.6398 145.329 11.8092 117.852C23.5407 110.547 35.4905 107.714 48.059 96.9651C84.2152 66.0468 102.82 27.1742 138.295 15.2867C214.241 -10.1596 242.534 73.8895 190.675 103.482C183.679 107.472 176.175 107.852 171.976 113.771C174.677 121.944 175.504 120.27 181.709 119.812C238.016 115.715 278.028 194.032 229.046 240.345C183.846 283.086 91.343 255.287 87.8935 187.032C86.6848 162.989 98.7568 139.857 119.784 142.503C124.745 143.348 129.32 145.713 132.878 149.271C136.436 152.83 138.801 157.405 139.647 162.366C142.153 179.039 126.964 178.836 130.312 189.4C154.087 197.334 166.731 177.068 185.962 172.181C233.727 160.036 245.279 230.462 185.476 241.543C174.337 243.396 162.918 242.595 152.148 239.204C142.709 236.42 130.572 227.633 126.265 226.778C116.485 246.485 205.094 276.595 232.477 220.506C247.889 188.932 222.004 147.85 177.675 163.915C167.724 167.536 159.795 175.407 148.857 178.056Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M267.513 54.4947L263.479 57.978C254.029 60.8375 245.695 75.4414 246.036 84.4018C252.613 83.6012 268.233 48.5653 327.556 58.6877C327.714 69.9383 315.013 85.1765 305.46 91.0981C289.369 101.07 269.772 95.0363 260.367 101.4C266.642 111.621 303.971 105.679 316.292 96.557C326.773 88.7975 345.287 60.8089 338.388 49.4309C330.834 44.874 310.61 47.211 301.02 47.2604C287.971 47.3306 279.273 51.3129 267.513 54.4947Z" fill="url(#paint0_linear)"/><circle cx="165" cy="60" r="10" fill="#CFCFCF"/><circle cx="116.97" cy="164.8" r="7.5" fill="#CFCFCF"/><path fill-rule="evenodd" clip-rule="evenodd" d="M287.064 79.2574C290.034 79.3686 292.969 78.5906 295.494 77.0229C298.019 75.4552 300.018 73.1693 301.236 70.4582C297.259 68.35 287.121 69.4391 287.064 79.2574Z" fill="#CFCFCF"/><defs><linearGradient id="paint0_linear" x1="246.307" y1="76.6912" x2="334.821" y2="76.6912" gradientUnits="userSpaceOnUse"><stop stop-color="#5FA921"/><stop offset="1" stop-color="#59A922"/></linearGradient></defs></svg>
      </a>
      <a href="#" data-target="slide-out" class="sidenav-trigger menu right hide-on-med-and-up"></a>
      <div class="nav-links hide-on-small-only">
        <router-link to="/about">About us</router-link>
        <router-link to="/contact-us">Contact us</router-link>
      </div>
      <ul id="nav-mobile" class="hide-on-med-and-down right">
        <li>
          <a href="/login.html"
            class="btn transparent z-depth-0 waves-effect waves-light nav--login">
            Login
          </a>
        </li>
        <li>
          <a href="/signup.html"
            class="btn white primary-text z-depth-0 waves-effect waves-primary nav--signup">
            Sign up
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'auth-nav',
};
</script>

<style scoped lang="scss">
nav {
  top: 0;
  left: 0;
  margin-top: 10px;
  position: absolute;
  .brand-logo {
    height: 100%;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
  }
  .nav-links {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    margin-left: 70px;
    height: 100%;
    a {
      color: #fff;
      font-size: 14px;
      padding: 0 20px;
      font-weight: 400;
      text-transform: capitalize;
      font-family: 'Product Sans', sans-serif;
      &:hover {
        background-color: rgba(250, 250, 250, .12);
      }
      &.active { color: lighten($primary-color, 50%);}
    }
    &.features {
      a {
        color: white;
        &:hover {text-decoration: underline;}
        &.active { color: lighten($primary-color, 50%);}
      }
    }
  }
  .nav--login {
    width: 110px;
    height: 100%;
    margin: 0 11px;
    font-size: 11px;
    border-radius: 3px;
    border: 1px solid #FFFFFF;
    text-transform: capitalize;
    box-shadow: 0px 3.67742px 14.7097px rgba(7, 42, 68, 0.1);
    font-family: 'Product Sans', sans-serif;
  }
  .nav--signup {
    width: 110px;
    height: 100%;
    margin: 0 11px;
    border-radius: 3px;
    border: 1px solid #FFFFFF;
    text-transform: capitalize;
    box-shadow: 0px 3.67742px 14.7097px rgba(7, 42, 68, 0.1);
    border-radius: 3px;
    font-family: 'Product Sans', sans-serif;
    font-size: 11px;
    color: $primary-color;
  }
}
</style>
