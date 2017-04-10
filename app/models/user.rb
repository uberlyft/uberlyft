class User < ApplicationRecord
  has_secure_token :commuter_token
  has_many :identities
  # has_secure_password
  # validates :password, presence: true
  # validates :email, presence: true, uniqueness: {case_sensitive: false}
  # validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }






end
