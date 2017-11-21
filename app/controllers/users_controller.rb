class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by(user_params)

    if @user.save
      login(@user)
      redirect_to new_api_session
    else
      render 'error'
    end
  end

  private
  def user_params
    params.require(:id).permit(:username, :password, :email)
  end
end
