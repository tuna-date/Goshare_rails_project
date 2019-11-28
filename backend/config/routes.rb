Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :user_profiles, params: :_id
  post '/auth/login', to: 'authentication#login'
  post '/auth/facebook_login', to: 'authentication#facebook_login'

  post '/users', to: 'user_profiles#create'
  get '/users', to: 'user_profiles#index'
  post '/users/user_profile', to: 'user_profiles#show'
  get '/users/:id/following', to: 'user_profiles#show_following'
  get '/users/:id/followers', to: 'user_profiles#show_followers'
  get '/users/:id/follow', to: 'user_profiles#follow'
  get '/users/:id/unfollow', to: 'user_profiles#unfollow'
  
  get '/current_user/basic_info', to: 'current_user_profile#current_user_info'
  get '/current_user', to: 'current_user_profile#show'
  post '/current_user/following', to: 'current_user_profile#show_following'
  post '/current_user/followers', to: 'current_user_profile#show_followers'

  post '/newfeed/post/create', to: 'posts#create'
  get '/newfeed/:page', to: 'posts#index'
  get '/newfeed/post/:post_id', to: 'posts#show'
  post '/newfeed/post/update', to: 'posts#update'
  post '/newfeed/post/delete', to: 'posts#delete'
  post '/newfeed/:post_id/comment', to: 'comments#create'
  get '/*a', to: 'application#not_found'
end
