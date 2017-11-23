class BooksController < ApplicationController
  def show
    @book = Book.find(book_params)

    if @book
      redirect_to '/api/books/show'
    else
      render json: @book.errors.full_messages, status: 422
    end
  end

  def index
    @book = Book.all
  end

  private

  def book_params
    params.require(:book).permit(:title, :author, :ISBN)
  end
end
