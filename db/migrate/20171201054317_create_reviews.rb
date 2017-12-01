class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
    	t.integer :author_id, null: false
    	t.integer :book_id, null: false
    	t.string :title, null: false

      t.timestamps
    end
  end
end
