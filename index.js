var app = new Vue({
  el: '#app',
  data: {
    input: '',
    output: ''
  },
  methods: {
    convert: function () {
      var m = moment()

      if (!isNaN(this.input) && !isNaN(parseFloat(this.input))) {
        if (this.input.length <= 10) {
          m = moment(this.input, 'X')
        }
      } else {
        m = moment(this.input)
      }

      if (!this.input) {
        this.output = ''
      } else if (!m.isValid()) {
        this.output = '???'
      } else {
        this.output = m.format('dddd, MMMM D, YYYY h:mm A')
      }
    }
  }
})
