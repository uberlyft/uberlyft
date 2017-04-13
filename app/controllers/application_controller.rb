class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :current_user


  private

  def current_user
   @current_user ||= User.find(session[:user_id]) if session[:user_id]
   @current_user ||= User.find(params[:commuter_token]) if params[:commuter_token]
  end

  helper_method :current_user


end
