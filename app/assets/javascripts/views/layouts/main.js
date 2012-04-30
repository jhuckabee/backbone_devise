BD.Views.Layouts.Main = Backbone.Marionette.Layout.extend({
  template: 'layouts/main',
  regions: {
    content: '#content'
  }
});

BD.addInitializer(function() {
  BD.layouts.main = new BD.Views.Layouts.Main();
});
