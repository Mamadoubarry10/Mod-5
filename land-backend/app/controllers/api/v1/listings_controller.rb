class Api::V1::ListingsController < ApplicationController
    skip_before_action :authorized
    def index 
        listings = Listing.all
        json_string = ListingSerializer.new(listings).serializable_hash

        render json: json_string

        # favorites = Favorite.all
        # json_string = FavoriteSerializer.new(favorites).serializable_hash
        # render json: json_string

    end

    def show
        listing = Listing.find(params[:id])
        json_string = ListingSerializer.new(listing).serializable_hash

        render json: json_string
    end

    def create
        listing= Listing.create(listing_params)
        json_string = ListingSerializer.new(listing).serializable_hash
       
        render json: json_string
    end

    def update
        
        listing = Listing.find(params[:id])
        new_price =  params[:price]
        listing.update(price: new_price)
        json_string = ListingSerializer.new(listing).serializable_hash


      
        if listing.save
            render json: json_string
        else
            render json: {error: listing.errors.full_messages}, status: :not_acceptable

        end
    end


    private
    def listing_params
        params.require(:listing).permit(:img1, :img2, :img3, :price, :acres, :location, :description, :user_id)
    end

 

end
