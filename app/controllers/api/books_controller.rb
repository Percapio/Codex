class Api::BooksController < ApplicationController
  def show
    @book = Book.find(book_params)

    if @book
      render :show
    else
      render json: @book.errors.full_messages, status: 422
    end
  end

  def index
    @books = Book.all

    render :index
  end

  private

  def book_params
    params.require(:book)
  end
end
