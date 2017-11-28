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
	belongs_to :book,
		class_name: :Book

	belongs_to :bookshelf,
		class_name: :Bookshelf

	def self.find_by_ids(book_id, bookshelf_id)
		bookshelf = Shelf.all.select { |s| s.bookshelf_id == bookshelf_id }
		bookshelf.select { |b| b.book_id == book_id }
	end
end
