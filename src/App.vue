<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>
      Input type text: <PInput type="text" name="test_input" value=""/>
    </p>
    <p>
      Input type checkbox: <PInput type="checkbox" name="test_input" value="" checked />
    </p>
    <p>
      Input type radio disabled!: <PInput type="radio" name="test_input" value="" disabled />
    </p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PInput from './components/PInput.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    PInput
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
