<template>
  <div v-bind:class="[fluid ? 'container-fluid' : 'container']">
    <slot></slot>
    <div class="row">

    </div>
  </div>
</template>

<script>
  export default {
    name: 'PContainer',
    props: {
      fluid: Boolean
    }
  }
</script>

<style scoped lang="scss">
  @import './grid';

  .container {
    @include make-container();
    @include make-container-max-widths();
  }

  .container-fluid {
    @include make-container();
  }
</style>
