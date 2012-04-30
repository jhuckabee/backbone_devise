BD.Helpers.Notifications = {};

BD.Helpers.Notifications.alert = function(alertType, message) {
  return HandlebarsTemplates['templates/shared/notifications']({
    'alertType': alertType,
    'message': message
  });
};

BD.Helpers.Notifications.error = function(message) {
  return this.alert('error', message);
};

BD.Helpers.Notifications.success = function(message) {
  return this.alert('success', message);
};

Handlebars.registerHelper('notify_error', function(msg) {
  msg = Handlebars.Utils.escapeExpression(msg);
  return new Handlebars.SafeString(BD.Helpers.Notifications.error(msg));
});

Handlebars.registerHelper('notify_success', function(msg) {
  msg = Handlebars.Utils.escapeExpression(msg);
  return new Handlebars.SafeString(BD.Helpers.Notifications.success(msg));
});
