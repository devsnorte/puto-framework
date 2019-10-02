import Vue from 'vue'
import Prism from 'vue-prismjs'
import 'prismjs/themes/prism.css'

export default ChildComponent => ({
  name: 'Render',

  components: {
    ChildComponent,
    Prism
  },

  data: () => ({
    sourceCode: ''
  }),

  mounted () {
    new Vue({
      el: this.$refs.disposableDiv,
      ...ChildComponent,

      mounted: () => {
        const $code = this.$refs.code
        const html = $code.innerHTML
        $code.innerText = html
        this.sourceCode = html
      }
    })
  },

  template: `
    <div>
      <div><ChildComponent/></div>

      <code ref="code" style="display: none">
        <div ref="disposableDiv"></div>
      </code>

      <prism
        style="margin: 25px 15px"
        language="html"
        :code="sourceCode"
      ></prism>
    </div>
  `
})
