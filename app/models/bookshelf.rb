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
#  shelf_id    :integer          not null
#

class Bookshelf < ApplicationRecord
	validates :title, presence: true, uniqueness: { scope: :user }
	validates :shelf_id, :owner_id, presence: true

	has_many :shelves,
		class_name: :Shelf

	belongs_to :user,
		class_name: :User,
		foreign_key: :owner_id,
		dependent: :destroy
	
	def self.find_by_credentials(bookshelf_id, user_id)
		user = User.find_by(id: user_id)
		user.bookshelves.find_by(id: bookshelf_id)
	end
end
