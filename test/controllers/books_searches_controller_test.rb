require 'test_helper'

class BooksSearchesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get books_searches_index_url
    assert_response :success
  end

  test "should get random_book" do
    get books_searches_random_book_url
    assert_response :success
  end

  test "should get book_by_author" do
    get books_searches_book_by_author_url
    assert_response :success
  end

  test "should get book_by_isbn" do
    get books_searches_book_by_isbn_url
    assert_response :success
  end

end
