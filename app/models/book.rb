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
#  ISBN         :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  country      :string
#  language     :string
#  year         :integer
#

class Book < ApplicationRecord
	validates :title, :author, :summary, presence: true
	validates :ISBN, presence: true
	
	has_many :shelves,
		class_name: :Shelf

	has_many :reviews,
		class_name: :Review

	def self.find_first_five
		Book.all[0..4]
	end
end
