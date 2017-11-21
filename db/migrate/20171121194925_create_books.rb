class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.text :summary, null: false
      t.integer :bookshelf_id
      t.string :img_url
      t.integer :ISBN, null: false

      t.timestamps
    end

    add_index :books, :ISBN
  end
end
