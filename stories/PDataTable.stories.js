import PDataTable from '../src/components/data-table/PDataTable'
import Render from './Render'

export default {
  title: 'PDataTable'
}

export const basicUsage = () =>
  Render({
    components: { PDataTable },
    template: `<PDataTable :headers="headers" :items="items" />`,
    data: function () {
      return {
        headers: [
          { label: 'ColA', name: 'a' },
          { label: 'ColB', name: 'b' }
        ],
        items: [
          { a: 1, b: 2 },
          { a: 4, b: 3 },
          { a: 5, b: 8 },
          { a: 6, b: 9 },
          { a: 7, b: 0 }
        ]
      }
    }
  })