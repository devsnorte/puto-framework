<template>
  <input v-on="$listeners"
    :disabled="disabled"
    :class="classNames"
    :type="type"
    :name="name"
    :value="value"
    v-model="model"
    @input="$emit('input', $event.target.value)"
  >
</template>

<script>
export default {
  name: 'PInput',
  props: {
    name: {
      type: String,
      default: ''
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
  data () {
    return {
      model: this.value
    }
  },
  computed: {
    classNames () {
      return [
        'puto-input',
        (this.disabled && '-disabled'),
        (this.loading && '-loading')
      ]
    },

    listeners() {
      // Delete duplicate listeners
      const listeners = {...this.$listeners}
      delete listeners.input
      return listeners
    }
  }
}
</script>
