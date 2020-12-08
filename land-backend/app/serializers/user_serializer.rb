class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :username, :email, :userImg, :phone, :location 
  # has_many :favorites_listings
    

    attribute :favorites do |object|
      object.favorites.as_json
    end

    

    attribute :favorites_listings do |object|
      new_array=[]

      object.favorites.all.each do |object|
        listing = []
        listing.push(object.listing)
        listing.push(object.id)
        new_array << listing
      end
      new_array.as_json
    end

  
  
end
