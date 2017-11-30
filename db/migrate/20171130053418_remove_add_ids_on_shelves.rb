class RemoveAddIdsOnShelves < ActiveRecord::Migration[5.1]
  def change
  	remove_column :shelves, :book_id, :integer
  	remove_column :shelves, :bookshelf_id, :integer

  	add_column :shelves, :book_id, :integer, null: false
  	add_column :shelves, :bookshelf_id, :integer, null: false
  end
end
