<template>
  <table :class="classNames">
    <PDataTableRow v-if="!noHeaders">
      <PDataTableHeader
        v-for="(header, k) in headers"
        :key="`p-td-${k}`"
        :sort="isSorting(header)"
        @click="toggleSort(header.name)">
        {{ header.label }}
      </PDataTableHeader>
    </PDataTableRow>
    <PDataTableRow
      v-for="(item, k) in orderedItems"
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
    noHeaders: Boolean,
    noSort: Boolean
  },
  data () {
    return {
      sortDirection: '',
      sortingBy: null
    }
  },
  computed: {
    classNames () {
      return [
        'puto-data-table',
        !this.items.length && '-empty',
        this.loading && '-loading',
      ]
    },
    orderedItems () {
      const { sortingBy, sortDirection, noSort } = this
      if (!noSort && sortDirection !== '' && sortingBy) {
        const desc = sortDirection === 'desc'
        return this.sortBy(this.items, sortingBy, desc)
      }
      return this.items
    }
  },
  methods: {
    isSorting (header) {
      if (this.sortingBy === header.name) {
        return this.sortDirection
      }
    },
    format (header, item) {
      const value = item[header.name]
      if (header.format && typeof header.format === 'function') {
        return header.format(value)
      }
      return value
    },
    createSortBy (columnName, desc = false) {
      return (a, b) => {
        const columnA = a[columnName]
        const columnB = b[columnName]
        if (columnA > columnB) {
          return desc ? -1 : 1
        } else if (columnA < columnB) {
          return desc ? 1 : -1
        }
        return 0
      }
    },
    sortBy(arr, columnName, desc = false) {
      const byColumnName = this.createSortBy(columnName, desc)
      return arr.slice(0).sort(byColumnName)
    },
    toggleSort(columnName) {
      const column = this.headers
        .find(header => header.name === columnName)
      this.$emit('header-click', column)
      if (this.noSort) {
        this.sortDirection = ''
        this.sortingBy = null
        return
      }
      const { sortingBy, sortDirection } = this
      if (column.sortable === false || sortDirection === 'desc') {
        this.sortDirection = ''
      } else if (sortingBy !== column.name || sortDirection === '') {
        this.sortDirection = 'asc'
      } else if (sortDirection === 'asc') {
        this.sortDirection = 'desc'
      }
      this.sortingBy = column.name
    }
  }
}
</script>