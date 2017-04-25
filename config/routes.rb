Rails.application.routes.draw do

  resources :identities
  get '/auth/:provider/callback', to: 'session#create'
  get '/auth/failure', to: redirect('/')
  get '/users/time_estimate'
  get '/users/price_estimate'
  get '/users/history'
  scope :api do
    resources :users


    get '/associate', to: 'session#associate_user'
    
  end

  get '/:s1(:/s2)(:/s3)' => 'home#static'

end
