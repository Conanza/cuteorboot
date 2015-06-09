class UsersController < ApplicationController
  before_action :require_login, only: [:edit, :update, :destroy, :show]

  def new
    @user = User.new

    if current_user
      flash[:notices] = ["Please log out first"]
      redirect_to root_url
    else
      render :new
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user
      redirect_to root_url
    else
      flash[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])

    render :edit
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to home_url
  end

  private

  def user_params
    params.require(:user).permit(
      :username,
      :password,
      :gender,
      :birthdate,
      :city,
      :state,
      :animal_type,
      :breed,
      :website,
      :instagram
    )
  end
end
