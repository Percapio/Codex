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
end
