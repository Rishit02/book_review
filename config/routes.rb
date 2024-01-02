Rails.application.routes.draw do
  # Defines the root path route ("/")
  root "pages#index"
  namespace :api do
    namespace :v1 do
      resources :book, param: :slug do
        resources :review, only: [:create, :destroy]
      end
    end
  end
  get '*path', to: 'pages#index', via: :all

end