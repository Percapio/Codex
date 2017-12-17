# == Schema Information
#
# Table name: bookshelves
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  owner_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text
#  img_url     :string
#

class Bookshelf < ApplicationRecord
	validates :title, presence: true, uniqueness: { scope: :user }
	validates :owner_id, presence: true

	has_many :shelves,
		class_name: :Shelf,
		dependent: :delete_all

	belongs_to :user,
		class_name: :User,
		foreign_key: :owner_id
	
	def self.find_by_credentials(bookshelf_id, user_id)
		user = User.find_by(id: user_id)
		user.bookshelves.find_by(id: bookshelf_id)
	end

	def self.default_shelves(bookshelf)
		currently_reading = Shelf.create(
			bookshelf_id: bookshelf.id,
			book_id: 0,
			status: 'Not Yet Read'
		)

		want_to_read = Shelf.create(
			bookshelf_id: bookshelf.id,
			book_id: 0,
			status: 'Not Yet Read'
		)
	end
end
