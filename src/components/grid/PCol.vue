<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PCol',
  props: {
    sizeXs: Number,
    sizeSm: Number,
    sizeMd: Number,
    sizeLg: Number,
    sizeXl: Number
  },
  computed: {
    className() {
      return [
        this.sizeXs && `puto-col-${this.sizeXs}`,
        this.sizeSm && `puto-col-sm-${this.sizeSm}`,
        this.sizeMd && `puto-col-md-${this.sizeMd}`,
        this.sizeLg && `puto-col-lg-${this.sizeLg}`,
        this.sizeXl && `puto-col-xl-${this.sizeXl}`
      ]
    }
  }
}
</script>
