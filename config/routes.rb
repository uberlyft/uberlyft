Rails.application.routes.draw do

  resources :identities
  scope :api do
    resources :users

    get '/auth/:provider/callback', to: 'sessions#create'
    get '/auth/failure', to: redirect('/')
    get '/associate', to: 'sessions#associate_user'

    # root 'home#index'
  end


end
