Rails.application.routes.draw do
  devise_for :users,
             controllers: {
               sessions: 'users/sessions',
               registrations: 'users/registrations',
               passwords: 'users/passwords',
               confirmations: 'users/confirmations',
               omniauth_callbacks: 'users/omniauth_callbacks'
             }

  namespace :api do
    namespace :v1 do
      resources :organizations, only: %i[index show create destroy update] do
        get :logo, on: :member
        resources :histories, only: %i[index show create destroy update] do
          get :image, on: :member
        end
      end
      resources :participants, only: %i[index show create destroy update] do
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
      resources :workplaces, only: %i[index create show destroy update] do
        get :workplace_images, on: :member
      end
      resources :users, only: %i[index show update destroy] do
        get :photo, on: :member
      end
    end
  end
  root 'home#index'
end
