class BooksSearchesController < ApplicationController
  def index
  	@books = Book.find_first_five(search_params[:query])
  	render :index
  end

  def random_book
  	@book = Book.all.sample
  	render 'api/books/show'
  end

  def books_by_author
  	@books = Book.where(author: search_params[:author])
  	render :books_by_author_or_isbn
  end

  def books_by_isbn
  	@books = Book.where(ISBN: search_params[:ISBN])
  	render :books_by_author_or_isbn
  end

  private
  def search_params
  	params.require(:search).permit(:query, :author, :ISBN)
  end
end
