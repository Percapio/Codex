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

require 'test_helper'

class BookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
