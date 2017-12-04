class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)
    User.make_shelves(@user)

    if @user.save
      login(@user)
      render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
