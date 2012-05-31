Backbone.js Authentication UI with Ruby on Rails and Devise
===========================================================

![Backbone Devise Screenshot](https://github.com/jhuckabee/backbone_devise/raw/master/doc/backbone_devise_screenshot.png)

This is an example application that implements a user regisration, authentication, and password retrieval
user interface using [Backbone.js](http://documentcloud.github.com/backbone/), [Ruby on Rails](http://rubyonrails.org/), and [Devise](https://github.com/plataformatec/devise).

The front end also takes advantage of a few additional Backbone support libraries which include:

* [backbone.marionette](https://github.com/derickbailey/backbone.marionette)
* [backbone.modelbinder](https://github.com/theironcook/Backbone.ModelBinder)
* [backbone-rails's Backbone.sync implementation](https://github.com/codebrew/backbone-rails)

Demo Application
----------------

A demo application can be found at http://backbonedevise.herokuapp.com

Local Installation
------------------

1. Clone the repository

  `git clone git://github.com/jhuckabee/backbone_devise.git`

2. Configure your database in config/database.yml. The current config assumes a custom local PostgreSQL configuration.

   `vi config/database.yml`

3. Migrate the database

   `rake db:migrate`

4. Start your webserver

  `rails server`

Tests
-----

Integration tests have been written using [Capybara](https://github.com/jnicklas/capybara) and [Selenium](http://seleniumhq.org/)

Run the tests using

  `rake test`
