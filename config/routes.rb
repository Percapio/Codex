Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :session, only: [:create, :destroy, :show]

    resources :users, only: [:create] do
      resources :reviews, only: [:create, :update, :destroy]
      resources :bookshelves, except: [:new, :edit]
    end

    #testing nesting of create
    resources :books, only: [:show, :index]
    resources :reviews, only: [:index]
    resources :shelves, except: [:edit, :new]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
