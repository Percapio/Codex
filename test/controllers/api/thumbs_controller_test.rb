require 'test_helper'

class Api::ThumbsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_thumbs_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_thumbs_destroy_url
    assert_response :success
  end

  test "should get index" do
    get api_thumbs_index_url
    assert_response :success
  end

end
