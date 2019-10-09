import PContainer from '../src/components/grid/PContainer.vue'
import PRow from '../src/components/grid/PRow.vue'
import PCol from '../src/components/grid/PCol.vue';
import Render from './Render'

export default {
  title: 'PGrid'
}

export const basicUsage = () =>
  Render({
    components: { PContainer, PRow, PCol },
    template: `<PContainer>
                 <PRow>
                   <PCol :size-sm="10" :size-lg="12">COLUMN</PCol>
                   <PCol :size-md="10" :size-xl="12">COLUMN</PCol>
                   <PCol :size-xs="10" :size-lg="12">COLUMN</PCol>
                 </PRow>
                 <PRow>
                   <PCol :size-xs="10" :size-lg="12">COLUMN</PCol>
                 </PRow>
               </PContainer>`
  })

export const fluidContainer = () =>
  Render({
    components: { PContainer, PRow, PCol },
    template: `<PContainer fluid>
                 <PRow>
                   <PCol :size-sm="10" :size-lg="12">COLUMN</PCol>
                   <PCol :size-sm="10" :size-xl="12">COLUMN</PCol>
                   <PCol :size-md="10" :size-lg="12">COLUMN</PCol>
                 </PRow>
                 <PRow>
                   <PCol :size-md="10" :size-lg="12">COLUMN</PCol>
                 </PRow>
                </PContainer>`
  })
