class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.integer :user_id, null: false
      t.string :image_url, null: false
      t.string :thumb_url, null: false

      t.timestamps
    end

    add_index :pictures, :user_id
  end
end
