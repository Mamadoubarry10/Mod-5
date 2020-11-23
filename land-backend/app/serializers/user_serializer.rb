class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :username, :email, :userImg, :phone, :location 

    attribute :listings do |object|
      object.listings.as_json
    end

    attribute :favorites do |object|
      object.favorites.as_json
    end

    attribute :favorites_listings do |object|
      new_array=[]

      object.favorites.all.each do |object|
        new_array.push(object.listing)
      end
      new_array.as_json
    end

  
  
end
