class Bookshelf < ApplicationRecord
	validates :title, :description, :owner_id, presence: true

	has_many :books
	belongs_to :owner
end
