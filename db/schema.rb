

ActiveRecord::Schema[7.0].define(version: 2023_03_25_094928) do
  create_table "albums", force: :cascade do |t|
    t.string "title"
    t.integer "year"
    t.string "image"
    t.string "genre"
    t.string "label"
    t.integer "rating"
    t.integer "artist_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_id"], name: "index_albums_on_artist_id"
  end

  create_table "artists", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "songs", force: :cascade do |t|
    t.string "title"
    t.string "year"
    t.string "featuring"
    t.string "produced_by"
    t.string "written_by"
    t.string "image"
    t.string "about"
    t.string "music_video"
    t.integer "artist_id", null: false
    t.integer "album_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["album_id"], name: "index_songs_on_album_id"
    t.index ["artist_id"], name: "index_songs_on_artist_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "albums", "artists"
  add_foreign_key "songs", "albums"
  add_foreign_key "songs", "artists"
end
