class SessionController < ApplicationController

  def create
    auth = request.env['omniauth.auth']
    user = User.sign_in_from_omniauth(auth, current_user)
    session[:user_id] = user.id
    if auth[:provider] == 'uber'
      redirect_to '/auth/lyft'
    elsif auth[:provider] == 'lyft'
      redirect_to '/comparison'
    else
      render json: {error: "Could not display this provider's authentification", status: 400}, status: 400
    end
  end
end

