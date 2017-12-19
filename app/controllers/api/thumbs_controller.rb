class Api::ThumbsController < ApplicationController
  def create
    @thumb = Thumb.find_by(user_id: current_user.id, book_id: params[:book_id])

    if @thumb.nil?
      @thumb = Thumb.new(user_id: current_user.id, book_id: params[:book_id], up: params[:up])
    else
      @thumb.up = params[:up]
    end

    if @thumb.save
      @book = @thumb.book
      render 'api/books/show'
    else
        debugger

  		render json: @thumb.errors.full_messages, status: 401
  	end
  end

  def destroy
  	@thumb = Thumb.find_by( user_id: current_user.id, book_id: params[:book_id] )
  	@thumb.destroy
  	@book = @thumb.book
  	render 'api/books/show'
  end

  def index
  	@thumbs = Thumb.all
  	render :index
  end

  def show
    @thumbs = Book.find(params[:book_id]).thumbs

    if @thumbs
    	render :index
    else
      head :ok
    end
  end
end
