<template>
  <ul :class="blockClassName">
    <li :class="prevItemClassName" v-if="totalPages > firstPage">
      <span :class="linkClassName" v-if="value <= firstPage">{{ prevLabel }}</span>
      <a
        href="#"
        :class="linkClassName"
        @click.prevent="changePage(value - 1)"
        v-else
        >{{ prevLabel }}</a
      >
    </li>
    <li v-for="page in totalPages" :key="page" :class="itemClassName(page)">
      <span :class="linkClassName" v-if="page === value">{{ page }}</span>
      <a
        href="#"
        :class="linkClassName"
        v-else
        @click.prevent="changePage(page)"
        >{{ page }}</a
      >
    </li>
    <li :class="nextItemClassName" v-if="totalPages > firstPage">
      <span :class="linkClassName" v-if="value >= totalPages">{{
        nextLabel
      }}</span>
      <a
        href="#"
        :class="linkClassName"
        @click.prevent="changePage(value + 1)"
        v-else
        >{{ nextLabel }}</a
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PPagination',
  props: {
    value: Number,
    totalPages: Number
  },
  data() {
    const blockClassName = 'puto-pagination'
    const itemBaseClassName = `${blockClassName}__item`
    return {
      blockClassName,
      linkClassName: `${blockClassName}__link`,
      itemBaseClassName,
      prevLabel: '<',
      nextLabel: '>',
      firstPage: 1
    }
  },
  computed: {
    prevItemClassName() {
      return [
        ...this.itemClassName(-this.firstPage),
        `${this.itemBaseClassName}--prev`,
        this.value <= this.firstPage && `${this.itemBaseClassName}--disabled`
      ]
    },
    nextItemClassName() {
      return [
        ...this.itemClassName(-this.firstPage),
        `${this.itemBaseClassName}--next`,
        this.value >= this.totalPages && `${this.itemBaseClassName}--disabled`
      ]
    }
  },
  methods: {
    changePage(page) {
      this.$emit('input', page)
    },
    itemClassName(page) {
      return [
        this.itemBaseClassName,
        this.value === page && `${this.itemBaseClassName}--active`
      ]
    }
  }
}
</script>

<style scoped></style>
