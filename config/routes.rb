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
      resources :objectives, only: %i[index create destroy update]
      resources :budgets, only: %i[index create show destroy update] do
        get :budget_file, on: :member
      end
      resources :reports, only: %i[index create show destroy update] do
        get :report_file, on: :member
      end
      resources :works, only: %i[index create show destroy update] do
        get :work_image, on: :member
      end
      resources :donations, only: %i[index create show destroy update]
    end
  end
  root 'home#index'
end
