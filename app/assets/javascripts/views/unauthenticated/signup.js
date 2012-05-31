BD.Views.Unauthenticated = BD.Views.Unauthenticated || {};

BD.Views.Unauthenticated.Signup = Backbone.Marionette.ItemView.extend({
  template: 'unauthenticated/signup',

  events: {
    'submit form': 'signup'
  },

  initialize: function() {
    this.model = new BD.Models.UserRegistration();
    this.modelBinder = new Backbone.ModelBinder();
  },

  onRender: function() {
    this.modelBinder.bind(this.model, this.el);
  },

  signup: function(e) {

    var self = this,
        el = $(this.el);

    e.preventDefault();

    el.find('input.btn-primary').button('loading');
    el.find('.alert-error').remove();
    el.find('.help-block').remove();
    el.find('.control-group.error').removeClass('error');

    this.model.save(this.model.attributes, {
      success: function(userSession, response) {
        el.find('input.btn-primary').button('reset');
        BD.currentUser = new BD.Models.User(response);
        BD.vent.trigger("authentication:logged_in");
      },
      error: function(userSession, response) {
        var result = $.parseJSON(response.responseText);
        el.find('form').prepend(BD.Helpers.Notifications.error("Unable to complete signup."));
        _(result.errors).each(function(errors,field) {
          $('#'+field+'_group').addClass('error');
          _(errors).each(function(error, i) {
            $('#'+field+'_group .controls').append(BD.Helpers.FormHelpers.fieldHelp(error));
          });
        });
        el.find('input.btn-primary').button('reset');
      }
    });
  }
});
