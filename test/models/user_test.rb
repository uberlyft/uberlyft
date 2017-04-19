require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def test_it_generates_an_api_token
     user = FactoryGirl.build(:user, commuter_token: nil)
     assert user.api_token.blank?
     assert user.save
     refute user.api_token.blank?
  end
end
