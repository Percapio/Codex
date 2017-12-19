class Api::BooksController < ApplicationController
  def show
    @book = Book.find(params[:id].to_i)

    if @book
      render json: @book
    else
      render json: @book.errors.full_messages, status: 422
    end
  end

  def index
    @books = Book.all
    render json: @books
  end

  def range
    @books = Book.find_by_start_and_end(params[:start_pos], params[:end_pos])

    if @books
      render :index
    else
      render json: @books.errors.full_messages, status: 422
    end
  end

  private

  def book_params
    params.require(:book).permit(:title, :summary, :ISBN)
  end
end
