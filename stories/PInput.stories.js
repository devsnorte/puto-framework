import { action } from '@storybook/addon-actions';
import PInput from '../src/components/PInput.vue';
import Render from './Render';

export default {
  title: 'PInput'
};

export const basicUsage = () => Render({
  components: { PInput },
  template: '<PInput @focus="action" name="input_basic" v-model="name" @input="myLog(name)" />',
  data: () =>({ name: '' }),
  methods: { action: action('focused'), myLog: action('input') }
});

export const inputCheckbox = () => Render({
  components: { PInput },
  template: '<PInput @change="action" type="checkbox" name="input_checkbox_checked" v-model.lazy="value" />',
  data: () =>({ value: "checkbox value" }),
  methods: { action: action('changed')}
});

export const inputCheckboxDisabled = () => Render({
  components: { PInput },
  template: '<PInput type="checkbox" name="input_checkbox_disabled" v-model.lazy="value" disabled />',
  data: () =>({ value: "checkbox disabled value" }),
  methods: { }
});

export const inputRadio = () => Render({
  components: { PInput },
  template: '<PInput @change="action" type="radio" name="input_radio" v-model.lazy="value" />',
  data: () =>({ value: "radio value" }),
  methods: { action: action('changed') }
});

export const inputRadioMultiple = () => Render({
  components: { PInput, PInput, PInput },
  template: '<div><PInput @change="action" type="radio" name="input_radio_multiple" v-model="valueA" />\
      <PInput @change="action" type="radio" name="input_radio_multiple" v-model="valueB" />\
      <PInput @change="action" type="radio" name="input_radio_multiple" v-model="valueC" /></div>',
  data: () =>({
    valueA: "radio value A",
    valueB: "radio value B",
    valueC: "radio value C"
  }),
  methods: { action: action('changed') }
});

export const inputRadioDisabled = () => Render({
  components: { PInput },
  template: '<PInput type="radio" name="input_radio_disabled" v-model="value" disabled />',
  data: () =>({ value: "radio disabled value" }),
  methods: { }
});
