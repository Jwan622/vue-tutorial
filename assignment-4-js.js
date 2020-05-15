new Vue({
  el: '#exercise',
  data: {
    userClass: "float",
    userClass2: "blue",
    isVisible: true,
    firstClasses: { // this is used with :class
      highlight: false,
      shrink: true
    },
    arrayClasses: ["red", { highlight: true }],
    inputColor: "blue",
    customStyle: { // this is used with v-style
      width: 100 + "px",
      height: "200px",
      backgroundColor: "red",
    },
    progressBar: {
      width: '0px',
      backgroundColor: 'red'
    }
  },
  methods: {
    startEffect: function() {
      console.log("got into here");
      fakeThis = this;
      setInterval(() => {
        fakeThis.firstClasses.highlight = !fakeThis.firstClasses.highlight;
        fakeThis.firstClasses.shrink = !fakeThis.firstClasses.shrink;
      }, 2000)
    },
    startProgress: function() {
      var vm = this;
      var width = 0;

      setInterval(function() {
        width = width + 10;
        vm.progressBar.width = width + 'px';
      }, 500);
    }
  }
});
