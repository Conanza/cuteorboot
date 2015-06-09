class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(
      session[:username],
      session[:password]
    )

    if @user
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
