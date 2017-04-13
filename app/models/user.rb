class User < ApplicationRecord
  has_secure_token :commuter_token
  # has_many :identities

  def self.sign_in_from_omniauth(auth, current_user)
    if current_user
      if auth[:provider] == 'uber'
        user = find_or_create_by(uber_id: auth['uid'])
        user.uber_token = auth.credentials.token
        user.uber_refresh_token = auth.credentials.refresh_token
        user.first_name = auth.info.first_name
        user.last_name = auth.info.last_name
        user.email = auth.info.email
        user.save
        user
      elsif auth[:provider] == 'lyft' #lyft does not have omniauth so below is probably going to change.
        user = find_or_create_by(lyft_id: auth['uid'])
        user.lyft_token = auth.credentials.token
        user.lyft_refresh_token = auth.credentials.refresh_token
        user.first_name = auth.info.first_name
        user.last_name = auth.info.last_name
        user.email = auth.info.email
        user.save
        user
      else
        #the only way it gets here is if the auth is neither uber or lyft. What do you want to do in that scenario
      end
    elsif auth[:provider] == 'uber'
    user = find_or_create_by(uber_id: auth['uid'])
    user.uber_token = auth.credentials.token
    user.uber_refresh_token = auth.credentials.refresh_token
    user.first_name = auth.info.first_name
    user.last_name = auth.info.last_name
    user.email = auth.info.email
    user.save
    user
  elsif auth[:provider] == 'lyft' #lyft does not have omniauth so below is probably going to change.
    user = find_or_create_by(provider: auth['provider'], uid: auth['uid'])
    user.lyft_token = auth.credentials.token
    user.lyft_refresh_token = auth.credentials.refresh_token
    user.first_name = auth.info.first_name
    user.last_name = auth.info.last_name
    user.email = auth.info.email
    user.save
    user
    end
  end




# private
#
# def user_params
#   params.permit()
# end

end
