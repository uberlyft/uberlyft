class SessionController < ApplicationController

  def create
    auth = request.env['omniauth.auth']
    Rails.logger.info request.env['omniauth.auth'].inspect
    user = User.sign_in_from_omniauth(auth, current_user)
    session[:user_id] = user.id
    if auth[:provider] == 'uber'
      redirect_to '/auth/lyft'
    elsif auth[:provider] == 'lyft'
      redirect_to '/'
    else #this will only trigger if auth is neither uber or lyft. what do you want to return in that scenario
    end
  end

#   def associate_user
#     @identity = Identity.find(params[:identity_id])
#     if @identity.user
#       render json: @identity.user, serializer: UserExpandedSerializer
#     elsif current_user
#       current_user.identities << @identity
#       render json: current_user, serializer: UserExpandedSerializer
#     else
#       @user = User.create!(email: @identity.email || "", first_name: @identity.first_name || "", last_name: @identity.last_name || "")
#       @user.identities << @identity
#       render json: @user, serializer: UserExpandedSerializer
#     end
#   end
end
