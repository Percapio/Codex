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

require 'test_helper'

class ThumbTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
