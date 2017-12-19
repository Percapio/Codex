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
    @bookshelf.owner_id = current_user.id if logged_in? 

    if @bookshelf.save!
      render json: @bookshelf
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end

  def destroy
    @bookshelf = current_user.bookshelves.find(params[:id])
    @bookshelf.destroy!
    render 'api/bookshelves/index'
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
    params.require(:bookshelf).permit(:title)
  end
end
