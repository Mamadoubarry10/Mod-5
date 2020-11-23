Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
      resources :listings
      resources :users
      resources :favorites
    end
  end
end
