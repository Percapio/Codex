class Api::ShelvesController < ApplicationController
  def index
    @shelves = Shelf.find_by_ids(
      shelf_params[:book_id],
      shelf_params[:bookshelf_id])

    render json: @shelves
  end

  def show
    @shelf = Shelf.find(params[:id])
    render json: @shelf
  end

  def create
    @shelf = Shelf.new(params[:bookshelf_id])

    if @shelf.save
      render json: @shelf
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
    params.require(:shelf).permit(:book_id, :bookshelf_id)
  end
end
