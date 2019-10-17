<template>
  <div class="puto-data-table-pagination">
    <PButton
      :class="prevClassNames"
      :disabled="!hasPrev"
      @click="$emit('prev')">
      {{ prevIcon }}
    </PButton>
    <PButton
      :class="nextClassNames"
      :disabled="!hasNext"
      @click="$emit('next')"
    >
      {{ nextIcon }}
    </PButton>
  </div>
</template>

<script>
export default {
  name: 'PDataTablePagination',
  computed: {
    prevClassNames () {
      return [
        'puto-data-table-navigation-prev-button',
        !this.hasPrev && '-disabled'
      ]
    },
    nextClassNames () {
      return [
        'puto-data-table-navigation-next-button',
        !this.hasNext && '-disabled'
      ]
    },
  }
}
</script>

<style>

</style>