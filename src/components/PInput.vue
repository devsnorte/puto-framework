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
      required: true
    },

    value: {
      type: String,
      default: ''
    },

    disabled: {
      type: Boolean,
      default: false,
      required: false
    },

    checked: {
      type: Boolean,
      default: false,
      required: false
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
