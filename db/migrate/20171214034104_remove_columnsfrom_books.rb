class RemoveColumnsfromBooks < ActiveRecord::Migration[5.1]
  def change
  	remove_column :books, :country, :string
  	remove_column :books, :language, :string
  	remove_column :books, :year, :integer  	
  end
end
