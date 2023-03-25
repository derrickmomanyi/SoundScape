class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :title, :year, :image, :genre, :label, :rating, :artist_id
end
