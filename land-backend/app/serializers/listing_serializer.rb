class ListingSerializer < ActiveModel::Serializer
    include FastJsonapi::ObjectSerializer
    attributes :id, :img1, :img2, :img3, :price, :acres, :location, :description, :user_id
  
    
    attribute :user do |object|
      object.user.as_json
    end
  end
  
