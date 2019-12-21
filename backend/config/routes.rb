Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount ActionCable.server, at: '/cable'
  resources :user_profiles, params: :_user_id

  post '/auth/login', to: 'authentication#login'
  post '/auth/facebook_login', to: 'authentication#facebook_login'

  post '/users', to: 'user_profiles#create'
  get '/users', to: 'user_profiles#index'
  get '/users/:user_id/profile', to: 'user_profiles#show'
  get '/users/:user_id/following', to: 'user_profiles#show_following'
  get '/users/:user_id/followers', to: 'user_profiles#show_followers'
  post '/users/user/follow', to: 'user_profiles#follow'
  post '/users/user/unfollow', to: 'user_profiles#unfollow'

  get '/current_user/basic_info', to: 'current_user_profile#current_user_info'
  get '/current_user', to: 'current_user_profile#show'
  get '/current_user/following', to: 'current_user_profile#show_following'
  get '/current_user/followers', to: 'current_user_profile#show_followers'
  post '/current_user/update', to: 'current_user_profile#update'

  post '/newfeed/post/create', to: 'posts#create'
  get '/newfeed/:page', to: 'posts#index'
  get '/newfeed/post/:post_id', to: 'posts#show'
  post '/newfeed/post/update', to: 'posts#update'
  post '/newfeed/post/delete', to: 'posts#delete'
  post '/newfeed/post/comment/create', to: 'comments#create'
  post '/newfeed/post/comment/update', to: 'comments#update'
  post '/newfeed/post/comment/delete', to: 'comments#delete'
  get '/*a', to: 'application#not_found'
end
