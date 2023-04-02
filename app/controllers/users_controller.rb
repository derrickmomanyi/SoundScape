class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:show, :create, :index]

   wrap_parameters format: []
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
      render json: User.all, status: :ok
    end
    
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end
  
   
  
    private

    
    def user_params
      params.permit(:username, :password, :password_confirmation)
    end

    def render_not_found_response
      render json: { errors: "User for User not found"}, status: :not_found
  end

       
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
  
end
