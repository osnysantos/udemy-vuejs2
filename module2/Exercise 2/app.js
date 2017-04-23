new Vue({
  el: '#exercise',
  data: {
    value: ''
  },
  methods: {
    alertMe: function() {
      alert("Alert Me!")
    },
    updateValue: function(event) {
      this.value = event.target.value;
    }
  }
});