<template>
  <input v-on="$listeners"
    :disabled="disabled"
    :class="classNames"
    :type="type"
    v-bind:value="value"
  >
</template>

<script>
export default {
  name: 'PInput',
  props: {
    name: {
      type: String,
      default: '',
      required: true
    },

    value: {
      type: String,
      required: true
    },

    type: {
      type: String,
      default: 'text'
    },

    disabled: {
      type: Boolean,
      default: false
    },

    checked: {
      type: Boolean,
      default: false
    },

    loading: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classNames () {
      return [
        'puto-input',
        (this.disabled && '-disabled'),
        (this.loading && '-loading')
      ]
    }
  }
}
</script>
