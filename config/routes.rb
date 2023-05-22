Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :organizations, only: %i[index show create destroy update] do
        get :logo, on: :member
        resources :histories, only: %i[index show create destroy update] do
          get :image, on: :member
        end
      end
      resources :users, only: %i[index show create destroy update] do
        get :picture, on: :member
      end
    end
  end
  root 'home#index'
end
