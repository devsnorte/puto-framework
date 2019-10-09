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
      let className = ''

      className += this.sizeXs ? `puto-col-${this.sizeXs} ` : ''
      className += this.sizeSm ? `puto-col-sm-${this.sizeSm} ` : ''
      className += this.sizeMd ? `puto-col-md-${this.sizeMd} ` : ''
      className += this.sizeLg ? `puto-col-lg-${this.sizeLg} ` : ''
      className += this.sizeXl ? `puto-col-xl-${this.sizeXl} ` : ''

      return className
    }
  }
}
</script>
