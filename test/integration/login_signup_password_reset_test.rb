require 'test_helper'

class LoginSignupPasswordResetTest < ActionDispatch::IntegrationTest

  context 'An unauthenticated request' do

    setup do
      Capybara.current_driver = Capybara.javascript_driver
    end

    should 'render the login, registration, and password reset form when request is to the root path' do
      visit root_path
      assert_equal '/', page.current_path
      assert page.has_selector?('form#login-form')
    end

    # Logging in
    context 'Logging in' do
      should 'show login error when login fails' do
        visit root_path
        within('#login-form') do
          fill_in 'email', :with => 'xyz@abc.org'
          fill_in 'password', :with => 'someFunky1Password'
        end
        click_button 'Login'
        assert page.has_selector?('form#login-form div.alert-error')
      end

      should 'show logged in home page when login succeeds' do
        user = FactoryGirl.create(:user)
        visit root_path
        within('#login-form') do
          fill_in 'email', :with => user.email
          fill_in 'password', :with => user.password
        end
        click_button 'Login'
        assert_equal '/', page.current_path
        assert page.has_selector?('a[href="'+  destroy_user_session_path + '"]')
      end
    end

    # Registrations
    context 'Signing up' do
      should 'show logged in home page when signup succeeds' do
        visit root_path
        click_link 'Sign up'
        wait_until { page.has_selector?('#signup-form', :visible => true) }
        attrs = FactoryGirl.attributes_for(:user)
        within('#signup-form') do
          fill_in 'email', :with => attrs[:email]
          fill_in 'password', :with => attrs[:password]
          fill_in 'password_confirmation', :with => attrs[:password_confirmation]
        end
        click_button 'Sign up'
        assert_equal '/', page.current_path
        assert page.has_selector?('a[href="'+  destroy_user_session_path + '"]')
      end

      should 'show an error message when signup fails' do
        visit root_path
        click_link 'Sign up'
        wait_until { page.has_selector?('#signup-form', :visible => true) }
        within('#signup-form') do
          fill_in 'email', :with => 'someone@example.org'
          fill_in 'password', :with => '123'
          fill_in 'password_confirmation', :with => '1234567'
        end
        click_button 'Sign up'
        assert page.has_selector?('form#signup-form div.alert-error')
      end
    end

    # Password reset
    context 'Resetting your password' do
      should 'show success message when reset submission succeeds' do
        user = FactoryGirl.create(:user)
        visit root_path
        click_link 'Retrieve password'
        wait_until { page.has_selector?('#retrieve-password-form', :visible => true) }
        within('#retrieve-password-form') do
          fill_in 'email', :with => user.email
        end
        click_button 'Send me password reset instructions'
        assert_equal '/', page.current_path, "Current path not correct"
        assert page.has_selector?('form#retrieve-password-form div.alert-success'), "No success message found"
      end

      should 'show an error message when reset fails' do
        visit root_path
        click_link 'Retrieve password'
        wait_until { page.has_selector?('#retrieve-password-form', :visible => true) }
        within('#retrieve-password-form') do
          fill_in 'email', :with => 'someone@else.com'
        end
        click_button 'Send me password reset instructions'
        assert_equal '/', page.current_path
        assert page.has_selector?('form#retrieve-password-form div.alert-error')
      end
    end

  end
end
