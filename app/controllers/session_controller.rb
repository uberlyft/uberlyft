class SessionController < ApplicationController

  def create
    auth = request.env['omniauth.auth']
    identity = Identity.sign_in_from_omniauth(auth)
    redirect_to #this is a url from Jennifer is going to have this identity.id. she will need to make a fetch request to
  end

  def associate_user
    @identity = Identity.find(params[:identity_id])
    if @identity.user
      render json: @identity.user #expanded serializer
    elsif current_user
      current_user.identities << @identity
      render json: current_user #expanded
    else
      @user = User.create!(email: @identity.email || "", first_name: @identity.first_name || "", last_name: @identity.last_name || "")
      @user.identities << @identity
      render json: @user #expanded
    end
  end
end
