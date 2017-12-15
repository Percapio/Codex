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
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  ISBN         :integer          not null
#

class Book < ApplicationRecord
	validates :title, :author, :summary, presence: true, :case_sensitive => false
	
	has_many :shelves,
		class_name: :Shelf

	has_many :reviews,
		class_name: :Review

	def self.find_first_fifteen(query)
		param = '%' + query.downcase + '%'
		Book.where('lower(title) LIKE ?', '%ark%').or(Book.where('lower(author) LIKE ?', '%ark%')).limit(15)
	end

end
