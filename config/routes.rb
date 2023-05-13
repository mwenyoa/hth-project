Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :organizations, only: [:index, :show, :create, :destroy, :update] do
        get :logo, on: :member
      end
    end
  end
  root 'home#index'
end
