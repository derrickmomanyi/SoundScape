class UsersController < ApplicationController


    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    
    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def show
        user = find_user
        render json: user, status: :ok
    end
  
   
  
    private

     
    def find_user
        User.find(params[:id])
    end

    def render_not_found_response
        render json: { errors: "User not found"}, status: :not_found
    end
  
    def user_params
      params.permit(:username, :password, :password_confirmation)
    end

       
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
  
end
