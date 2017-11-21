class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :valid_password?

  def current_user
    return nil unless logged_in?
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def require_current_session!
    redirect_to new_session_url unless logged_in?
  end
end
