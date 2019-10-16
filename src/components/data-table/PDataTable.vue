<template>
  <table :class="classNames">
    <PDataTableRow v-if="!noHeaders">
      <PDataTableHeader
        v-for="(header, k) in headers"
        :key="`p-td-${k}`"
        @click="$emit('header-click', header)">
        {{ header.label }}
      </PDataTableHeader>
    </PDataTableRow>
    <PDataTableRow
      v-for="(item, k) in items"
      :key="`p-tr-${k}`"
      :striped="striped && k % 2 < 1"
      @click="$emit('row-click', item)">
      <PDataTableCell
        v-for="(header, k) in headers"
        :key="`p-tr-${k}-td-${header.name}`"
        @click="$emit('cell-click', { item, column: header.name })">
        {{ format(header, item) }}
      </PDataTableCell>
    </PDataTableRow>
  </table>
</template>

<script>
import PDataTableRow from './PDataTableRow'
import PDataTableHeader from './PDataTableHeader'
import PDataTableCell from './PDataTableCell'

export default {
  name: 'PDataTable',
  components: {
    PDataTableRow,
    PDataTableHeader,
    PDataTableCell
  },
  props: {
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    striped: Boolean,
    noHeaders: Boolean
  },
  computed: {
    classNames () {
      return [
        'puto-data-table',
        !this.items.length && '-empty',
        this.loading && '-loading',
      ]
    }
  },
  methods: {
    format (header, item) {
      const value = item[header.name]
      if (header.format && typeof header.format === 'function') {
        return header.format(value)
      }
      return value
    }
  }
}
</script>