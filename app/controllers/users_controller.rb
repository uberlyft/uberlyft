class UsersController < ApplicationController
  #  before_action :require_user, only: [:time_estimate]

  def time_estimate
    client = Uber::Client.new do |config|
      config.server_token = (ENV['UBER_SERVER_TOKEN']).to_s
    end
    current_location = Geocoder.search(request.remote_ip)
    user_locate = client.time_estimations(start_latitude: current_location.first.latitude, start_longitude: current_location.first.longitude)
    render json: user_locate
  end

  def price_estimate
    client = Uber::Client.new do |config|
      config.server_token = (ENV['UBER_SERVER_TOKEN']).to_s
    end
    current_location = Geocoder.search(request.remote_ip)
    end_location = Geocoder.search(params[:address])
    user_locate = client.time_estimations(start_latitude: current_location.first.latitude, start_longitude: current_location.first.longitude, end_latitude: end_location.first.latitude, end_longitude: end_location.first.latitude)
    render json: user_locate
  end

  def history
    client = Uber::Client.new do |config|
      config.server_token = (ENV['UBER_SERVER_TOKEN']).to_s
      config.client_id     = (ENV['UBER_CLIENT_ID']).to_s
      config.client_secret = (ENV['UBER_CLIENT_SECRET']).to_s
      config.bearer_token  = current_user.uber_token
    end
    client.history
  end

  def request_ride #simulated in sandbox, will not request actual ride
    current_location = Geocoder.search(request.remote_ip)
    end_location = Geocoder.search(params[:address])
    client = Uber::Client.new do |config|
      config.client_id     = (ENV['UBER_CLIENT_ID']).to_s
      config.client_secret = (ENV['UBER_CLIENT_SECRET']).to_s
      config.bearer_token  = current_user.uber_token
    end
    client.apply_surge 'product_id', 2.0

    client.trip_request(product_id: product_id, start_latitude: current_location.first.latitude, start_longitude: current_location.first.longitude, end_latitude: end_location.first.latitude, end_longitude: end_location.first.latitude, surge_confirmation_id: surge_id)
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
