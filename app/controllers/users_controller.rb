class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find(user_params)

    if @user.save
      login(@user)
      redirect_to '/api/users/show'
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  private
  def user_params
    params.require(:id).permit(:username, :password, :email)
  end
end
