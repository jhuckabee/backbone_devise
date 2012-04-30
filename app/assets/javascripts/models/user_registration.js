BD.Models.UserRegistration = Backbone.Model.extend({
  url: '/users.json',
  paramRoot: 'user',

  defaults: {
    "email": "",
    "password": "",
    "password_confirmation": ""
  }
});
