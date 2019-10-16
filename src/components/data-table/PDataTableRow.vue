<template>
  <tr :class="classNames" v-on="$listeners">
    <slot/>
  </tr>
</template>

<script>
export default {
  name: 'PDataTableRow',
  computed: {
    classNames: function () {
      return [
        'puto-data-table-row',
        this.selected && '-selected',
        this.disabled && '-disabled',
        this.striped && '-striped'
      ]
    }
  }
}
</script>