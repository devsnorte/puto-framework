<template>
  <button v-on="$listeners" :class="classNames" :type="type">
    <slot v-if="$slots.default"></slot>
    <template v-else>{{ text }}</template>
  </button>
</template>

<script>
export default {
  name: 'PButton',

  props: {
    type: {
      type: String,
      required: false
    },

    text: {
      type: String,
      default: ''
    },

    disabled: {
      type: Boolean,
      default: false
    },

    loading: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classNames() {
      return [
        'puto-button',
        (this.disabled && '-disabled'),
        (this.loading && '-loading')
      ]
    }
  }
}
</script>
