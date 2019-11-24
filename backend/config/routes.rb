Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :user_profiles, params: :_name
  post '/auth/login', to: 'authentication#login'
  post '/users', to: 'user_profiles#create'
  get '/users', to: 'user_profiles#index'
  get '/auth/:provider/callback', to: 'authentication#facebook_login'
  get '/*a', to: 'application#not_found'
end
