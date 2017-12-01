class Api::ReviewsController < ApplicationController
  def create
  	@reviews = Review.new(
  								book_id: params[:book_id], 
  								user_id: params[:user_id],
  								description: params[:description])

  	if @reviews.save
  		render 'api/reviews/index'
  	else
  		render json: @reviews.errors.full_messages, status: 422
  	end 
  end

  def index
  	@reviews = Book.find_by(book_id: params[:book_id]).reviews
  	render json: @reviews
  end

  def destroy
  	@review = Review.find(params[:id])
  	@review.destroy!
  end

  def update
  	@review = Review.find(params[:id])

  	if @review.update_attributes(review_params)
  		render 'api/reviews/index'
  	else
  		render json: @review.errors.full_messages, status: 422
  	end
  end

  private

  def review_params
  	params.require(:review).permit(:book_id, :user_id, :description, :title)
  end
end
