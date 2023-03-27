class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  has_many :user_artists
  has_many :user_albums
  has_many :user_songs  
  has_secure_password
end
