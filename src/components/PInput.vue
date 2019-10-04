<template>
  <input v-on="$listeners"
    :disabled="disabled"
    :class="classNames"
    :type="type"
    :value="value"
  >
</template>

<script>
export default {
  name: 'PInput',

  props: {
    type: {
      type: String,
      default: 'text'
    },

    value: {
      type: String,
      required: true
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
    classNames() {
      return [
        'puto-input',
        (this.disabled && '-disabled'),
        (this.loading && '-loading')
      ]
    }
  }
}
</script>
