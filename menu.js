
// Begin Vue Application

new Vue({
  el: '#app',
  data: {
    // Game Info
    route: 'home',
  },

  methods: {

    goto(route) {

      this.route = route;
    },

  }
});