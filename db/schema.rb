# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150611170338) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "hobbies", force: :cascade do |t|
    t.string "name", null: false
  end

  add_index "hobbies", ["name"], name: "index_hobbies_on_name", unique: true, using: :btree

  create_table "hobbyings", force: :cascade do |t|
    t.integer "hobby_id", null: false
    t.integer "user_id",  null: false
  end

  add_index "hobbyings", ["user_id", "hobby_id"], name: "index_hobbyings_on_user_id_and_hobby_id", unique: true, using: :btree

  create_table "pictures", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "image_url",  null: false
    t.string   "thumb_url",  null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "pictures", ["user_id"], name: "index_pictures_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "gender",          null: false
    t.datetime "birthdate",       null: false
    t.string   "city",            null: false
    t.string   "state",           null: false
    t.string   "animal_type",     null: false
    t.string   "breed"
    t.string   "website"
    t.string   "instagram"
    t.text     "about_me"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

  create_table "votes", force: :cascade do |t|
    t.integer  "voter_id",   null: false
    t.integer  "votee_id",   null: false
    t.integer  "value",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "votes", ["votee_id"], name: "index_votes_on_votee_id", using: :btree
  add_index "votes", ["voter_id", "votee_id"], name: "index_votes_on_voter_id_and_votee_id", unique: true, using: :btree

end
