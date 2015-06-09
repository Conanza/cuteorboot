class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username,        null: false
      t.string :password_digest, null: false
      t.string :session_token,   null: false
      t.string :gender,          null: false
      t.date :birthdate,         null: false
      t.string :city,            null: false
      t.string :state,           null: false
      t.string :animal_type,     null: false
      t.string :breed
      t.string :website
      t.string :instagram
      t.text :about_me

      t.timestamps
    end

    add_index :users, :username, unique: true

    create_table :hobbies do |t|
      t.string :name, null: false
    end

    add_index :hobbies, :name, unique: true

    create_table :hobbyings do |t|
      t.integer :hobby_id, null: false
      t.integer :user_id, null: false
    end

    add_index :hobbyings, [:user_id, :hobby_id], unique: true
  end
end
