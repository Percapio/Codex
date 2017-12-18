class Api::ShelvesController < ApplicationController
  def index
    shelves = Shelf.find_by_bookshelf_id(params[:bookshelf_id].to_i)

    @books = Book.find_by_book_ids(shelves)
    render 'api/books/index'
  end

  def show
    shelves = current_user.bookshelves.find(params[:bookshelf_id]).shelves
    @books = Shelf.select_books(shelves)
    render 'api/books/index'
  end

  def create
    @shelf = Shelf.new( book_id: params[:book_id], bookshelf_id: params[:bookshelf_id] )
    @shelf.status = 'Not Yet Read'

    if @shelf.save
      shelves = current_user.bookshelves.find(params[:bookshelf_id]).shelves
      @books = Shelf.select_books(shelves)
      render 'api/books/index'
    else
      render json: @shelf.errors.full_messages, status: 422
    end
  end

  def destroy
    shelf = current_user.bookshelves.find(params[:bookshelf_id]).shelves.find_by(book_id: params[:book_id])
    shelf.destroy!
    render :show
  end

  def update
    shelf = Shelf.find_book_in_shelf(params[:book_id], params[:bookshelf_id])
    shelf.update_all(status: params[:status])
    @shelves = shelf
    render :show
  end

  private

  def shelf_params
    params.permit(:book_id, :bookshelf_id)
  end
end
