class BookshelvesController < ApplicationController
  def show
    @bookshelf = Bookshelf.find(params[:id])

    if @bookshelf
      render json: @bookshelf
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end

  def create
    @bookshelf = Bookshelf.new(bookshelf_params)

    if @bookshelf.save
      render json: @bookshelf
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end

  def delete
    @bookshelf = Bookshelf.find(params[:id])
    @bookshelf.destroy!
    redirect_to '/api/users/show'
  end

  def update
    @bookshelf = Bookshelf.find(params[:id])

    if @bookshelf.update(bookshelf_params)
      render json: @bookshelf
    else
      render json: @bookshelf.errors.full_messages, status: 404
    end
  end

  private

  def bookshelf_params
    params.require(:bookshelf).permit(:title, :description, :owner_id)
  end
end
