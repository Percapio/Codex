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
		class_name: :Book

	belongs_to :bookshelf,
		class_name: :Bookshelf

	def self.select_books(shelves)
		books = shelves.map { |shelf| shelf.book_id }
		Book.where(id: books)
	end
end
