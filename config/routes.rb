Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
    end
  end
  root 'home#index'
end
