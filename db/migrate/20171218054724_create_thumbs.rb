class CreateThumbs < ActiveRecord::Migration[5.1]
  def change
    create_table :thumbs do |t|
      t.integer :user_id, null: false
      t.integer :book_id, null: false
      t.string :up, null: false

      t.timestamps
    end

    add_index :thumbs, :user_id
    add_index :thumbs, :book_id
    add_index :thumbs, [:user_id, :book_id], unique: true
  end
end
