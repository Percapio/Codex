class Api::BookshelvesController < ApplicationController
  def index
    @bookshelves = current_user.bookshelves

    render :index
  end
  
  def show
    @bookshelf = Bookshelf.find_by_credentials(params[:id], params[:user_id])

    if @bookshelf
      render :show
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end

  def create
    @bookshelf = Bookshelf.new(bookshelf_params)
    @bookshelf.owner_id = current_user.id if logged_in? 

    if @bookshelf.save!
      @bookshelves = current_user.bookshelves
      render :index
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end

  def destroy
    bookshelf = current_user.bookshelves.find(params[:id])
    bookshelf.destroy!


    @bookshelves = current_user.bookshelves
    render :index
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
