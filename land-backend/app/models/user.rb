class User < ApplicationRecord
    has_many :listings
    has_many :favorites
    has_many :listings, through: :favorites



    has_secure_password
    # validates :username, uniqueness: {case_sensitive: false}
end
