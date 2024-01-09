Rails.application.routes.draw do
  # Defines the root path route ("/")
  root "pages#index"
  namespace :api do
    namespace :v1 do
      resources :book, param: :slug do
        resources :review, only: [:create, :destroy]
      end

    namespace :v2 do
      devise_for :users, path: '', path_names: {
        sign_in: 'login',
        sign_out: 'logout', 
        registration: 'signup'
      }, 
      controllers: {
          sessions: 'users/sessions',
          registrations: 'users/registrations'
      }
    end
    end
  end
  get '*path', to: 'pages#index', via: :all

end