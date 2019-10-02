import { action } from '@storybook/addon-actions';
import PButton from '../src/components/PButton.vue';
import Render from './Render';

export default {
  title: 'PButton',
};

export const basicUsage = () => Render({
  components: { PButton },
  template: '<PButton @click="action">My Button</PButton>',
  methods: { action: action('clicked') }
});

export const slotless = () => Render({
  components: { PButton },
  template: '<PButton @click="action" text="Text from prop">',
  methods: { action: action('clicked') }
});

export const loading = () => Render({
  components: { PButton },
  template: '<PButton @click="action" loading>My Button</PButton>',
  methods: { action: action('clicked') }
});

export const disabled = () => Render({
  components: { PButton },
  template: '<PButton @click="action" :disabled="true">My Button</PButton>',
  methods: { action: action('clicked') }
});
