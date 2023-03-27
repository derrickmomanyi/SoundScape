Rails.application.routes.draw do
  resources :users
  resources :songs
  resources :albums
  resources :artists
  resources :user_songs
  resources :user_albums
  resources :user_artists

  
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'
 
 
 
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
