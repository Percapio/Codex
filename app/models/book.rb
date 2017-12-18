# == Schema Information
#
# Table name: books
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  author       :string           not null
#  summary      :text             not null
#  bookshelf_id :integer
#  img_url      :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  ISBN         :integer          not null
#

class Book < ApplicationRecord
	validates :title, :author, :summary, presence: true, :case_sensitive => false
	
	has_many :shelves,
		class_name: :Shelf

	has_many :reviews,
		class_name: :Review,
		foreign_key: :book_id,
		dependent: :delete_all

	has_many :thumbs,
		class_name: :Thumb

	def self.find_first_fifteen(query)
		param = '%' + query.downcase + '%'
		Book.where('lower(title) LIKE ?', param).or(Book.where('lower(author) LIKE ?', param)).limit(15)
	end

	def self.find_by_book_ids(shelves)
		books = shelves.map { |shelf| shelf.book_id }
		Book.where(id: books)
	end
end
