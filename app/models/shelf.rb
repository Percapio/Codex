# == Schema Information
#
# Table name: shelves
#
#  id           :integer          not null, primary key
#  status       :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  book_id      :integer          not null
#  bookshelf_id :integer          not null
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
		shelves = shelf.select(:book_id).distinct
		results = []
		shelves.each { |shelf| results << Book.find_by(id: shelf.book_id) }
		results
	end
end
