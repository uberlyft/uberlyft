class UsersController < ApplicationController
   before_action :require_user, only: [:time_estimate]

  def time_estimate
    u_client = Uber::Client.new do |config|
      config.server_token = (ENV['UBER_SERVER_TOKEN']).to_s
    end

    l_client = Lyft::Client.new(
        client_id: (ENV['LYFT_CLIENT_ID']).to_s,
        client_secret: (ENV['LYFT_CLIENT_SECRET']).to_s,
        debug_output: STDOUT,
        use_sandbox: true
      )

    current_location = Geocoder.search(request.remote_ip)
    if current_location
      uber_locate = u_client.time_estimations(start_latitude: current_location.first.latitude, start_longitude: current_location.first.longitude)
      lyft_locate = l_client.availability.eta(access_token: current_user.lyft_token,
                                              lat: current_location.first.latitude,
                                              lng: current_location.first.longitude)
      uber_lyft_location = []
      uber_lyft_location<< uber_locate
      uber_lyft_location<< lyft_locate

      render json: uber_lyft_location
    else
      render json: 'Could not locate this IP'
    end
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
    render json: client.history
  end

  def request_ride # simulated in sandbox, will not request actual ride
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
