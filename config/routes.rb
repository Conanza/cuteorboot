Rails.application.routes.draw do
  root "static_pages#root"

  resource :session, only: [:new, :create, :destroy]
  resources :users
end
