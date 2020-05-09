new Vue({
  el: '#exercise',
  data: {
    value: 'Initial value'
  },
  methods: {
    alertButton: function() {
      alert('Alert Jeff')
    },
    storeDataOnKeydown: function(event) {
      console.log("hi there, keydown event fired");
      this.value = event.target.value;
    }
  }
});