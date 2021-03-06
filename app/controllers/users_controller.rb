class UsersController < ApplicationController
  before_action :require_login, only: [:edit, :update, :destroy, :show]
  before_action :require_logout, only: [:new, :create]
  before_action :require_current_user, only: [:edit, :update, :destroy]

  def index
    if params[:form_type].present?
      @users = search_by(params[:form_type])
    elsif params[:top_cuties].present?
      @users = User.top_cuties
    elsif params[:fans].present?
      @users = User.fans_for(current_user)
    else
      @users = User.fresh_feed_for(current_user)
    end
  end

  def show
    @user = User
      .includes(:hobbies, :pictures, :received_votes)
      .find(params[:id])
  end

  def new
    @user = User.new
    @hobbies = Hobby.all
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      redirect_to root_url
    else
      @hobbies = Hobby.all
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      render json: @user
    else
      @hobbies = Hobby.all
      render :edit
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to home_url
  end

  private

  def search_by(form_type)
    if form_type == "hobby"
      User
        .includes(:hobbies, :pictures, :received_votes)
        .joins(:hobbies)
        .where("hobbies.name ~ ?", my_titleize(params[:query]))
        .order(:username)
    else
      query = case form_type
              when "username"
                params[:query].downcase
              when "state"
                my_titleize(params[:query])
              end
      query_string = "#{form_type} ~ ?"

      User
        .includes(:pictures, :hobbies, :received_votes)
        .where(query_string, query)
        .order(form_type)
    end
  end

  def my_titleize(param)
    param.downcase.split.map(&:capitalize).join(" ")
  end

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
      :instagram,
      :about_me,
      hobby_ids: []
    )
  end
end
