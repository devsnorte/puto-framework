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
    noHeaders: Boolean
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
      const { sortingBy: column, sortDirection: direction } = this
      if (direction !== '' && column) {
        const desc = direction === 'desc'
        return this.sortBy(this.items, column, desc)
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
      if (column.sortable === false) {
        this.sortDirection = ''
      } else  if (this.sortingBy !== column.name) {
        this.sortDirection = 'asc'
      } else if (this.sortDirection === '') {
        this.sortDirection = 'asc'
      } else if (this.sortDirection === 'asc') {
        this.sortDirection = 'desc'
      } else {
        this.sortDirection = ''
      }
      this.sortingBy = column.name
    }
  }
}
</script>