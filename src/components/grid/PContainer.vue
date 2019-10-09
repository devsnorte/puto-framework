<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PContainer',
  props: {
    fluid: Boolean
  },
  computed: {
    className() {
      return this.fluid ? 'puto-container-fluid' : 'puto-container'
    }
  }
}
</script>
