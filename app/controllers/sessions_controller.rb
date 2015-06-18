class SessionsController < ApplicationController
  before_action :require_login, only: [:destroy]
  before_action :require_logout, only: [:new, :create]

  def new
  end

  def create
    @user = User.find_by_credentials(
      session_params[:username],
      session_params[:password]
    )

    if @user
      # flash[:success] = ["Welcome to Cute or Boot!"]
      login(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid email and password combo"]
      render :new
    end
  end

  def destroy
    logout(current_user)
    redirect_to home_url
  end

  private

  def session_params
    params.require(:session).permit(:username, :password)
  end
end
