import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageWasEmited', age)// this is centrally located methods that can be reused every where in teh application.
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});

