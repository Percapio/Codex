require 'test_helper'

class Api::ShelvesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_shelves_index_url
    assert_response :success
  end

  test "should get show" do
    get api_shelves_show_url
    assert_response :success
  end

  test "should get create" do
    get api_shelves_create_url
    assert_response :success
  end

  test "should get update" do
    get api_shelves_update_url
    assert_response :success
  end

  test "should get delete" do
    get api_shelves_delete_url
    assert_response :success
  end

end
