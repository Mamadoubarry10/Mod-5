class Api::V1::ListingsController < ApplicationController
    skip_before_action :authorized
    def index 
        listings = Listing.all

        render json: listings

    end

    def show
        listing = Listing.find(params[:id])
        render json: listing
    end

    def create
        listing= Listing.create(listing_params)
       
        render json: listing
    end


    private
    def listing_params
        params.require(:listing).permit(:img1, :img2, :img3, :price, :acres, :location, :description, :user_id)
    end

 

end
