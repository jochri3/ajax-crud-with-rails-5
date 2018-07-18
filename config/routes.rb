Rails.application.routes.draw do
  get 'users/main'

  # get 'users/webservice'
  post 'users/webservice'
  post 'users/search'

  get 'users/main'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
