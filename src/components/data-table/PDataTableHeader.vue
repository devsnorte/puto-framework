<template>
  <th @click="$emit('click')">
    <slot/>
    <template v-if="sort">
      <template v-if="$slots.sort">
        <slot name="sort"/>
      </template>
      <template v-else>
        <span v-if="sort === 'asc'">
          {{ sortAscCharacter }}
        </span>
        <span v-if="sort === 'desc'">
          {{ sortDescCharacter }}
        </span>
      </template>
    </template>
  </th>
</template>

<script>
export default {
  name: 'PDataTableHeader',
  props: {
    sort: {
      type: String,
      enum: ['', 'asc', 'desc'],
      default: ''
    },
    sortAscCharacter: {
      type: String,
      default: '↑'
    },
    sortDescCharacter: {
      type: String,
      default: '↓'
    }
  }
}
</script>