class Book < ApplicationRecord
	validates :title, :author, :summary, presence: true
	validates :ISBN, presence: true, uniqueness: true
	
	belongs_to :bookshelf
end
