Backbone.Marionette.Renderer.render = function(template, data) {
  return HandlebarsTemplates['templates/' + template](data);
};
