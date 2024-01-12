Rails.application.routes.draw do
  # Defines the root path route ("/")
  root "pages#index"

  namespace :api do
    namespace :v1 do
      resources :book, param: :slug do
        resources :review, only: [:create, :destroy]
      end
      post '/login',    to: 'sessions#create'
      delete '/logout',   to: 'sessions#destroy'
      get '/logged_in', to: 'sessions#is_logged_in?'
      resources :users, only: [:create, :show, :index] do 
          resources :items, only: [:create, :show, :index, :destroy]
      end
    end
  end
  
  get '*path', to: 'pages#index', via: :all

end