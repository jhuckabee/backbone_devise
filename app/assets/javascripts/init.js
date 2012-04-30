BD = new Backbone.Marionette.Application();

BD.Views = {};
BD.Views.Layouts = {};
BD.Models = {};
BD.Collections = {};
BD.Routers = {};
BD.Helpers = {};

// Instantiated global layouts
BD.layouts = {};

BD.addRegions({
  main: '#main'
});

BD.vent.on("authentication:logged_in", function() {
  BD.main.show(BD.layouts.main);
});

BD.vent.on("authentication:logged_out", function() {
  BD.main.show(BD.layouts.unauthenticated);
});

BD.bind("initialize:after", function() {
  if(BD.currentUser) {
    BD.vent.trigger("authentication:logged_in");
  }
  else {
    BD.vent.trigger("authentication:logged_out");
  }
});

// TODO: Routers and history start
// BD.vent.on("layout:rendered", function() {
//   Backbone.history.start({pushState: true});
// });
