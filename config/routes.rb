Rails.application.routes.draw do
  root "static_pages#root"
  get "/home", to: "static_pages#home", as: :home

  resource :session, only: [:new, :create, :destroy]
  resources :users

  namespace :api, defaults: { format: :json } do
    resources :hobbies
    resources :hobbyings
  end
end
