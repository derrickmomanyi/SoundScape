Rails.application.routes.draw do
  resources :users, only: [ :show, :create ]
  
  post '/login', to: 'session#create'
  delete '/logout', to: 'session#destroy'
  get '/me', to: 'users#show'

  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
