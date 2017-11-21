class CreateBookshelves < ActiveRecord::Migration[5.1]
  def change
    create_table :bookshelves do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :owner_id, null: false

      t.timestamps
    end
  end
end
