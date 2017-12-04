class Api::ShelvesController < ApplicationController
  def index
    @shelves = Shelf.find_by_bookshelf_id(params[:bookshelf_id].to_i)
    render :index
  end

  def show
    shelves = current_user.bookshelves.find_by(id: params[:bookshelf_id].to_i + 1).shelves
    @books = Shelf.select_books(shelves)
    render json: @books
  end

  def create
    @shelf = Shelf.new( book_id: params[:book_id].to_i, bookshelf_id: params[:bookshelf_id].to_i )
    @shelf.status = 'Not Yet Read'

    if @shelf.save
      @shelves = Shelf.find_by_bookshelf_id(params[:bookshelf_id])
      render 'api/shelves/index'
    else
      render json: @shelf.errors.full_messages, status: 422
    end
  end

  def destroy
    shelf = Shelf.find(params[:id])
    shelf.destroy!
    render json: { userId: current_user.id }, status: 200
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
