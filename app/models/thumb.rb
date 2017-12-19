# == Schema Information
#
# Table name: thumbs
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  book_id    :integer          not null
#  up         :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Thumb < ApplicationRecord
	validates :user_id, :book_id, :up, presence: true

	belongs_to :user,
		class_name: :User,
		foreign_key: :user_id

	belongs_to :book,
		class_name: :Book,
		foreign_key: :book_id
end
