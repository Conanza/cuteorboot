class Createvotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :voter_id, null: false
      t.integer :votee_id, null: false
      t.integer :value, null: false

      t.timestamps
    end

    add_index :votes, :votee_id
    add_index :votes, [:voter_id, :votee_id], unique: true
  end
end
