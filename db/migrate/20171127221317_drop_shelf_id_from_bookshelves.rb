class DropShelfIdFromBookshelves < ActiveRecord::Migration[5.1]
  def change
  	remove_column :bookshelves, :shelf_id, :integer, null: false
  	remove_column :shelves, :date_time, :datetime
  	
  	add_index :books, :id
  end
end
