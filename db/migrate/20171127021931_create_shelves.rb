class CreateShelves < ActiveRecord::Migration[5.1]
  def change
  	create_table :shelves do |t|
  		t.integer :book_id
  		t.integer :bookshelf_id
  		t.string :status
  		t.datetime :date_time

  		t.timestamps
  	end
  end
end
