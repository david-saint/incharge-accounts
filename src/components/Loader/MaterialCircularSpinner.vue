<template>
  <div
    :class="{
      active,
      big: size === 'big',
      tiny: size === 'tiny',
      small: size === 'small',
    }"
    class="preloader-wrapper">
    <div
      :class="{
        'spinner-red-only': color === 'red',
        'spinner-blue-only': color === 'blue',
        'spinner-green-only': color === 'green',
        'spinner-yellow-only': color === 'yellow',
        'spinner-primary-only': color === 'primary',
      }"
      class="spinner-layer">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'material-circular-spinner',
  props: {
    active: {
      type: Boolean,
      required: true,
    },
    size: {
      validator(v) {
        // The value must match one of these strings
        return [
          'tiny', 'small', 'big', 'medium',
        ].indexOf(v) !== -1;
      },
      default: 'medium',
    },
    color: {
      validator(v) {
        // The value must match one of these strings
        return [
          'red', 'blue', 'yellow', 'green', 'white', 'primary',
        ].indexOf(v) !== -1;
      },
      default: 'white',
    },
  },
};
</script>
