import { action } from '@storybook/addon-actions';
import PButton from '../src/components/PButton.vue';

export default {
  title: 'PButton',
};

export const basicUsage = () => ({
  components: { PButton },
  template: '<PButton @click="action">My Button</PButton>',
  methods: { action: action('clicked') }
});

export const slotless = () => ({
  components: { PButton },
  template: '<PButton @click="action" text="Text from prop">',
  methods: { action: action('clicked') }
});

export const loading = () => ({
  components: { PButton },
  template: '<PButton @click="action" loading>My Button</PButton>',
  methods: { action: action('clicked') }
});

export const disabled = () => ({
  components: { PButton },
  template: '<PButton @click="action" disabled>My Button</PButton>',
  methods: { action: action('clicked') }
});
