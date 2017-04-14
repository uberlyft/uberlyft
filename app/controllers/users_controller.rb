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

    # current_location = Geocoder.search(request.remote_ip)
    if params[:latitude] && params[:longitude]
      uber_locate = u_client.time_estimations(start_latitude: params[:latitude],
                                              start_longitude: params[:longitude])
      lyft_locate = l_client.availability.eta(access_token: current_user.lyft_token,
                                              lat: params[:latitude],
                                              lng: params[:longitude])
      uber_lyft_location = []
      uber_lyft_location << uber_locate
      uber_lyft_location << lyft_locate

      # # render json: uber_locate
      # render json: lyft_locate
      render json: uber_lyft_location
    else
      render json: {error: "Could not display this address", status: 400}, status: 400
    end
  end

  def price_estimate
    u_client = Uber::Client.new do |config|
      config.server_token = (ENV['UBER_SERVER_TOKEN']).to_s
    end

    l_client = Lyft::Client.new(
      client_id: (ENV['LYFT_CLIENT_ID']).to_s,
      client_secret: (ENV['LYFT_CLIENT_SECRET']).to_s,
      debug_output: STDOUT,
      use_sandbox: true
    )

    # current_location = Geocoder.search(request.remote_ip)
    end_location = Geocoder.search(params[:address])

    uber_locate = u_client.price_estimations(start_latitude: params[:latitude].to_f,
                                            start_longitude: params[:longitude].to_f,
                                            end_latitude: end_location.first.latitude,
                                            end_longitude: end_location.first.longitude)
    lyft_locate = l_client.availability.cost(access_token: current_user.lyft_token,
                                            start_lat: params[:latitude],
                                            start_lng: params[:longitude],
                                            end_lat: end_location.first.latitude,
                                            end_lng: end_location.first.longitude)
    uber_lyft_location = []
    uber_lyft_location << uber_locate
    uber_lyft_location << lyft_locate

    render json: uber_lyft_location
  end

  def history
    u_client = Uber::Client.new do |config|
      config.server_token = (ENV['UBER_SERVER_TOKEN']).to_s
      config.client_id     = (ENV['UBER_CLIENT_ID']).to_s
      config.client_secret = (ENV['UBER_CLIENT_SECRET']).to_s
      config.bearer_token  = current_user.uber_token
    end
    l_client = Lyft::Client.new(
      client_id: (ENV['LYFT_CLIENT_ID']).to_s,
      client_secret: (ENV['LYFT_CLIENT_SECRET']).to_s,
      debug_output: STDOUT,
      use_sandbox: true
    )

    uber_lyft_history = []
    uber_lyft_history<< u_client.history
    uber_lyft_history<< l_client.user.ride_history(access_token: current_user.lyft_token, start_time: 2.years.ago.iso8601)

    render json: uber_lyft_history
  end

  def request_ride # simulated in sandbox, will not request actual ride
    # current_location = Geocoder.search(request.remote_ip)
    end_location = Geocoder.search(params[:address])
    client = Uber::Client.new do |config|
      config.client_id     = (ENV['UBER_CLIENT_ID']).to_s
      config.client_secret = (ENV['UBER_CLIENT_SECRET']).to_s
      config.bearer_token  = current_user.uber_token
    end
    client.apply_surge 'product_id', 2.0

    client.trip_request(product_id: product_id,
                        start_latitude: current_location.first.latitude,
                        start_longitude: current_location.first.longitude,
                        end_latitude: end_location.first.latitude,
                        end_longitude: end_location.first.latitude,
                        surge_confirmation_id: surge_id)
  end
end
