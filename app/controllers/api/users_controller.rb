class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      Bookshelf.create(
        title: 'Currently Reading', 
        description: 'Basic bookshelf to hold "Currently Reading" and "Want to Read"', 
        owner_id: @user.id
      )

      Bookshelf.create(
        title: 'Want to Read', 
        description: 'Basic bookshelf to hold "Currently Reading" and "Want to Read"', 
        owner_id: @user.id
      )

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
