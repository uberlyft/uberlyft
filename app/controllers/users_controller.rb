class UsersController < ApplicationController
  #  before_action :require_user, only: [:time_estimate]

  def time_estimate
    client = Uber::Client.new do |config|
      config.server_token = (ENV['UBER_SERVER_TOKEN']).to_s
    end
    location = Geocoder.search(request.remote_ip)
    user_location = client.time_estimations(start_latitude: location.first.latitude, start_longitude: location.first.longitude)
    render json: user_location
  end

  def price_estimate
    client = Uber::Client.new do |config|
      config.server_token = (ENV['UBER_SERVER_TOKEN']).to_s
    end
    location = Geocoder.search(request.remote_ip)
    user_location = client.time_estimations(start_latitude: location.first.latitude, start_longitude: location.first.longitude),
                             end_latitude: dlat, end_longitude: dlon)
  end

  # def current_user_latitude
  #   location = Geocoder.search(current_user.ip_address)
  #   current_user.latitude = location.first.latitude
  #   current_user.longitude = location.first.longitude
  # end
  #
  # private
  #
  # def user_params
  #   params.permit(:email, :name)
  # end
end
