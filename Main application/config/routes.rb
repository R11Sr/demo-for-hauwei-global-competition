Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "demo#index"

  get '/deploy', to: 'demo#timeline'
  get '/distribution', to: 'demo#prototype'
  get '/download', to: 'demo#download'  
end
