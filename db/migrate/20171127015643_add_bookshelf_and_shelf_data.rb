class AddBookshelfAndShelfData < ActiveRecord::Migration[5.1]
  def change
  	remove_column :bookshelves, :description, :text, null: false
  	add_column :bookshelves, :description, :text
  	add_column :bookshelves, :shelf_id, :integer, null: false
  end
end
