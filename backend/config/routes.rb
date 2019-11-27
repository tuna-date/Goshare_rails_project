Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :user_profiles, params: :_id
  post '/auth/login', to: 'authentication#login'
  post '/auth/facebook_login', to: 'authentication#facebook_login'

  post '/users', to: 'user_profiles#create'
  get '/users', to: 'user_profiles#index'
  get '/users/:id', to: 'user_profiles#show'
  get '/users/:id/following', to: 'user_profiles#show_following'
  get '/users/:id/followers', to: 'user_profiles#show_followers'
  post '/users/:id/follow', to: 'user_profiles#follow'
  post '/users/:id/unfollow', to: 'user_profiles#unfollow'
  
  get '/current_user', to: 'current_user_profile#show'
  get '/current_user/following', to: 'current_user_profile#show_following'
  get '/current_user/followers', to: 'current_user_profile#show_followers'

  post '/newfeed/create', to: 'posts#create'
  get '/newfeed', to: 'posts#index'
  get '/newfeed/:post_id', to: 'posts#show'
  post '/newfeed/:post_id/comment', to: 'comments#create'
  get '/*a', to: 'application#not_found'
end
