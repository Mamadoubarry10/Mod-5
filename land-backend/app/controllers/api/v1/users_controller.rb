class Api::V1::UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :show] 

    def show

        user= User.find(params[:id])
        json_string = UserSerializer.new(user).serializable_hash
        render json: json_string

    end


    def create
        user = User.create(user_params)
        if user.valid?
          token = encode_token(user_id: user.id)
          render json: { user: UserSerializer.new(user), jwt: token }, status: :created
        else
          render json: { error: 'failed to create user' }, status: :not_acceptable
        end
    end

    def profile
        render json: { user: UserSerializer.new(current_user) }, status: :accepted
    end


    private

    def user_params
        params.require(:user).permit(:name, :username, :password, :userImg, :phone, :location, :email)
    end

 
end
