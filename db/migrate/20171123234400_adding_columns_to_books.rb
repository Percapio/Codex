class AddingColumnsToBooks < ActiveRecord::Migration[5.1]
  def change
  	add_column :books, :country, :string
  	add_column :books, :language, :string
  	add_column :books, :year, :integer
  end
end
