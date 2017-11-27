class Api::BookshelvesController < ApplicationController
  def index
    @bookshelves = User.find(params[:user_id]).bookshelves

    render json: @bookshelves
  end
  
  def show
    @bookshelf = Bookshelf.find_by_credentials(params[:id], params[:user_id])

    if @bookshelf
      render json: @bookshelf
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end

  def create
    @bookshelf = Bookshelf.new(bookshelf_params)
    @bookshelf.default_shelves
    
    if @bookshelf.save
      render json: @bookshelf
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end

  def delete
    @bookshelf = Bookshelf.find_by_credentials(params[:id], params[:user_id])
    @bookshelf.destroy!
    redirect_to '/'
  end

  def update
    @bookshelf = Bookshelf.find_by_credentials(params[:id], params[:user_id])

    if @bookshelf.update(bookshelf_params)
      render json: @bookshelf
    else
      render json: @bookshelf.errors.full_messages, status: 404
    end
  end

  private

  def bookshelf_params
    params.require(:bookshelf).permit(:title, :description, :owner_id, :shelf_id)
  end
end
