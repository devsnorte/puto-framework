<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <PContainer>
      <PRow>
        <PCol :size-xl="10" :size-lg="20" :size-md="15" :size-sm="10">
          COLUMN I
        </PCol>
        <PCol
          :size-xl="10"
          :size-lg="20"
          :size-md="15"
          :size-sm="10"
          :size-xs="12"
        >
          COLUMN II
        </PCol>
        <PCol :size-xl="10" :size-lg="20" :size-md="15" :size-sm="10">
          COLUMN III
        </PCol>
      </PRow>
      <PRow>
        <PCol :size-lg="20">
          COLUMN IV
        </PCol>
        <PCol :size-lg="2">
          COLUMN V
        </PCol>
      </PRow>
    </PContainer>
    <PContainer fluid>
      <PRow>
        <PCol :size-xl="10" :size-lg="20" :size-md="15" :size-sm="10">
          COLUMN I
        </PCol>
        <PCol
          :size-xl="10"
          :size-lg="20"
          :size-md="15"
          :size-sm="10"
          :size-xs="12"
        >
          COLUMN II
        </PCol>
        <PCol :size-xl="10" :size-lg="20" :size-md="15" :size-sm="10">
          COLUMN III
        </PCol>
      </PRow>
      <PRow>
        <PCol :size-lg="20">
          COLUMN IV
        </PCol>
        <PCol :size-lg="2">
          COLUMN V
        </PCol>
      </PRow>
    </PContainer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PContainer from './components/grid/PContainer'
import PRow from './components/grid/PRow'
import PCol from './components/grid/PCol'

export default {
  name: 'app',
  components: {
    PCol,
    PRow,
    PContainer,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
