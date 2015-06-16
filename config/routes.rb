Rails.application.routes.draw do
  root "static_pages#root"
  get "/home", to: "static_pages#home", as: :home

  resource :session, only: [:new, :create, :destroy]

  resources :users, only: [:new, :create] do
    get "search", on: :collection
  end

  resources :users, except: [:new, :create], defaults: { format: :json }


  namespace :api, defaults: { format: :json } do
    resources :votes, only: [:create]
    resources :hobbies, only: [:index]
    resources :hobbyings
    resources :pictures, only: [:create, :destroy]
  end
end
