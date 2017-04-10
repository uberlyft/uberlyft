class HomeController < ApplicationController
before_action session_check

def session_check
  @auth = session[:omniauth] if session[:omniauth]
end

end
