Rails.application.routes.draw do

  resources :identities
  get '/auth/:provider/callback', to: 'session#create'
  get '/auth/failure', to: redirect('/')
  get '/users/time_estimate'
  post '/users/price_estimate'
  scope :api do
    resources :users


    get '/associate', to: 'session#associate_user'
    # get '/auth/lyft' to:

    # root 'home#index'
  end


end
