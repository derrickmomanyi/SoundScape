class SongVideo < ApplicationRecord
    validates :title, :video_url, presence: true

  belongs_to :user
  belongs_to :song
  has_many :song_video_comments, dependent: :destroy
end
