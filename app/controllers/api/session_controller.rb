class Api::SessionController < ApplicationController
  def new
    @user = User.find(params[:session_token])
  end

  def create
    @user = User.find(user_params)

    if @user.save
      login(@user)
      redirect_to '/api/session/show'
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def destroy
    @user = User.find_by(session_token: session_token[:session_token])
    @user.destroy!
    @user
  end

  private
  def user_params
    params.require(:id).permit(:username, :session_token)
  end
end
