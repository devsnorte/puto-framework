<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "PRow"
  }
</script>

<style scoped lang="scss">
  @import './grid';

  .row {
    @include make-row();
  }
</style>
