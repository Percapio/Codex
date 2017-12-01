# == Schema Information
#
# Table name: shelves
#
#  id           :integer          not null, primary key
#  status       :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  book_id      :integer          not null
#  bookshelf_id :integer          not null
#

require 'test_helper'

class ShelfTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
