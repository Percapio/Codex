class AddAuthorNameToReviews < ActiveRecord::Migration[5.1]
  def change
  	add_column :reviews, :author_name, :string, null: false
  end
end
