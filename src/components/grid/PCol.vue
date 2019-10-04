<template>
  <div v-bind:class="[`col-${sizeXs}`,`col-sm-${sizeSm}`,`col-md-${sizeMd}`,`col-lg-${sizeLg}`,`col-xl-${sizeXl}`]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "PCol",
    props: {
      sizeXs: Number,
      sizeSm: Number,
      sizeMd: Number,
      sizeLg: Number,
      sizeXl: Number
    }
  }
</script>

<style scoped lang="scss">
  @import './grid';

  @include make-grid-columns();
</style>
