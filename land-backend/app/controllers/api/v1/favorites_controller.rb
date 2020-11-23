class Api::V1::FavoritesController < ApplicationController
    skip_before_action :authorized
    def show
        favorite= Favorite.find(params[:id])
        json_string = FavoriteSerializer.new(favorite).serializable_hash
        render json: json_string
    end

    def index
        favorites = Favorite.all
        json_string = FavoriteSerializer.new(favorites).serializable_hash
        render json: json_string
    end

    def create
        favorite= Favorite.create(favorite_params)
        
        json_string = FavoriteSerializer.new(favorite).serializable_hash
        render json: json_string
    end

    private
    def favorite_params
        params.require(:favorite).permit(:user_id, :listing_id)
    end
end
