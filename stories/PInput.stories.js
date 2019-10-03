import { action } from '@storybook/addon-actions';
import PInput from '../src/components/PInput.vue';
import Render from './Render';

export default {
  title: 'PInput',
};

export const basicUsage = () => Render({
  components: { PInput },
  template: '<PInput @focus="action" name="test_input" value="">',
  methods: { action: action('focused') }
});

export const inputCheckboxChecked = () => Render({
  components: { PInput },
  template: '<PInput @click="action" type="checkbox" name="test_input" value="" checked>',
  methods: { action: action('clicked') }
});

export const inputCheckboxDisabled = () => Render({
  components: { PInput },
  template: '<PInput type="checkbox" name="test_input" value="" disabled>',
  methods: { }
});

export const inputRadio = () => Render({
  components: { PInput },
  template: '<PInput @click="action" type="radio" name="test_input" value="">',
  methods: { action: action('clicked') }
});

export const inputRadioDisabled = () => Render({
  components: { PInput },
  template: '<PInput type="radio" name="test_input" value="" disabled>',
  methods: { }
});
