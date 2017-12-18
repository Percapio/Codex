class Api::ThumbsController < ApplicationController
  def create
  	@thumb = Thumb.new(user_id: current_user.id, book_id: params[:book_id], up: params[:up])

  	if @thumb.save
  		@book = @thumb.book
  		render 'api/books/show'
  	else
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
  	@thumbs = Thumb.find_by(book_id: params[:book_id])
    if @thumbs
    	render :show
    else
      head :ok
    end
  end
end
