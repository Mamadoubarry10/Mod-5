class FavoriteSerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer
  attributes 

  
  attribute :listing do |object|
    object.listing.as_json
  end
end
