new Vue({
  el: '#exercise',
  data: {
	value: 0
  },
  computed: {
    result: function() {
      return this.value > 10 ? "done" : "not there yet"
	}
  },
  watch: {
    value: function(value) {
      console.log("inside watch");
      var fakeThis = this;
      setTimeout(function() {
        fakeThis.value = 0;
	  }, 3000)
	},
  },

});