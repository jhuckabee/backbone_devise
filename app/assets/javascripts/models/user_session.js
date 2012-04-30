BD.Models.UserSession = Backbone.Model.extend({
  url: '/users/sign_in.json',
  paramRoot: 'user',

  defaults: {
    "email": "",
    "password": ""
  }

});
