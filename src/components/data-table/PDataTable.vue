<template>
  <div class="puto-data-table-wrapper">
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
        v-for="(item, k) in processedItems"
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
    <PDataTablePagination
      v-if="!noPagination"
      v-bind="innerPagination"
      @prev="handlePrevPageNavigation"
      @next="handleNextPageNavigation"
    />
  </div>
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
    itemsPerPage: {
      type: Number,
      default: 10
    },
    pagination: {
      type: Object,
      default: () => ({})
    },
    striped: Boolean,
    noHeaders: Boolean,
    noSort: Boolean,
    noPagination: Boolean
  },
  data () {
    return {
      currentPage: 1,
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
    innerPagination: {
      get() {
        return this.pagination
      },
      set(val) {
        this.$emit('pagination:update', val)
      }
    },
    pageStart () {
      return (this.currentPage - 1) * this.itemsPerPage
    },
    pageEnd () {
      return (this.currentPage * this.itemsPerPage) + 1
    },
    processedItems () {
      const { sortingBy, sortDirection, noSort } = this
      if (!noSort && sortDirection !== '' && sortingBy) {
        const desc = sortDirection === 'desc'
        const sorted = this.sortBy(this.items, sortingBy, desc)
        return this.noPagination
          ? sorted
          : sorted.slice(this.pageStart, this.pageEnd)
      }
      return this.noPagination
        ? this.items
        : this.items.slice(this.pageStart, this.pageEnd)
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