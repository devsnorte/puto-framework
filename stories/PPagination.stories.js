import PPagination from '../src/components/PPagination.vue'
import Render from './Render'

export default {
  title: 'PPagination'
}

export const basicUsage = () =>
  Render({
    components: { PPagination },
    template: `<PPagination v-model="currentPage" :total-pages="10"/>`
  })
