class SongSerializer < ActiveModel::Serializer
  attributes :id, :title, :year, :featuring, :produced_by, :written_by, :image, :music_video
  has_one :artist
  has_one :album
end


