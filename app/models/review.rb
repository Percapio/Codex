# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  book_id     :integer          not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text             not null
#  author_name :string           not null
#

class Review < ApplicationRecord
	validates :author_id, :book_id, :title, :description, :author_name, presence: :true

	belongs_to :author,
		class_name: :User,
		foreign_key: :author_id

	belongs_to :book,
		class_name: :Book,
		foreign_key: :book_id
end
