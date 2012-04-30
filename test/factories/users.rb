FactoryGirl.define do
  factory :user do
    email 'user@example.org'
    password 'password'
    password_confirmation 'password'
  end
end
