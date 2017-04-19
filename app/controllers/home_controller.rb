class HomeController < ApplicationController
  def index; end

  def static
    render file: 'public/index.html'
  end
  
end
