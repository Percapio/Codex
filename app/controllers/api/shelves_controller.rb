class Api::ShelvesController < ApplicationController
  def index
    @shelves = Shelf.find_by_bookshelf_id(shelf_params[:bookshelf_id])

    render :index
  end

  def show
    @shelf = Shelf.find(params[:id])
    render :show
  end

  def create
    debugger
    @shelf = Shelf.new(shelf_params)
    @shelf.status = 'Not Yet Read'

    if @shelf.save
      debugger
      render :show
    else
      render json: @shelf.errors.full_messages, status: 422
    end
  end

  def update
  end

  def delete
  end

  private

  def shelf_params
    params.permit(:book_id, :bookshelf_id)
  end
end
