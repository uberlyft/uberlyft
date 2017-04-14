Rails.application.config.middleware.use OmniAuth::Builder do
  provider :uber, ENV['UBER_CLIENT_ID'], ENV['UBER_CLIENT_SECRET'], :scope => 'profile history'

  provider :lyft, ENV['LYFT_CLIENT_ID'], ENV['LYFT_CLIENT_SECRET'], :scope => 'profile public rides.read rides.request'

end
