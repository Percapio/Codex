# == Schema Information
#
# Table name: shelves
#
#  id           :integer          not null, primary key
#  book_id      :integer
#  bookshelf_id :integer
#  status       :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Shelf < ApplicationRecord
	validates :book_id, :bookshelf_id, presence: true

	belongs_to :book,
		class_name: :Book,
		dependent: :destroy

	belongs_to :bookshelf,
		class_name: :Bookshelf,
		dependent: :destroy

	def self.find_by_bookshelf_id(bookshelf_id)
		Shelf.all.select { |s| s.bookshelf_id == bookshelf_id }
	end

	def self.find_book_in_shelf(book_id, bookshelf_id)
		current_user.bookshelves[bookshelf_id].find_by(id: book_id)
	end

	def self.find_by_ids(book_id, bookshelf_id)
		Shelf.all.select { |s| s.bookshelf_id == bookshelf_id }
	end

	def self.select_books(shelf)
		book_ids = shelf.select(:book_id).distinct
		results = []
		book_ids.each { |book| results << Book.find_by(id: book.book_id) }
		results
	end
end
