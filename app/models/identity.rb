class Identity < ApplicationRecord
  belongs_to :user

  def self.sign_in_from_omniauth(auth)
    identity = find_or_create_by(provider: auth['provider'], uid: auth['uid'])
    identity.accesstoken = auth.credentials.token
    identity.refreshtoken = auth.credentials.refresh_token
    identity.first_name = auth.info.first_name
    identity.last_name = auth.info.last_name
    identity.email = auth.info.email
    identity.save
    identity
  end

end
