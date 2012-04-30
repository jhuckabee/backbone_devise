BD.Models.UserPasswordRecovery = Backbone.Model.extend({
  url: '/users/password.json',
  paramRoot: 'user',

  defaults: {
    "email": ""
  }
});
