class UsersController < ApplicationController
  before_action :require_login, only: [:edit, :update, :destroy, :show]
  before_action :require_logout, only: [:new, :create]
  before_action :require_current_user, only: [:edit, :update, :destroy]

  # may need to optimize User#rating
  def index
    ids = Vote
      .joins(:voter)
      .where("voter_id = ?", current_user.id)
      .pluck(:votee_id)

    query_fragment = "(" + ids.join(", ") + ")"

    if ids.empty?
      @users = User.includes(:hobbies, :received_votes).limit(50)
    else
      @users = User
        .includes(:hobbies, :received_votes)
        .where("id NOT IN #{query_fragment}")
        .limit(50)
    end
  end

  def new
    @user = User.new
    @hobbies = Hobby.all
  end

  def create
    @user = User.new(user_params)

    if @user.save
      flash[:success] = ["Welcome to Cute or Boot!"]
      login(@user)
      redirect_to root_url
    else
      @hobbies = Hobby.all
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  # incomplete
  def edit
    @user = User.find(params[:id])
    @hobbies = Hobby.all
    render json: @user
  end

  # incomplete
  def update
    @user = User.find(params[:id])

    if @user.update(user_params)

    else
      @hobbies = Hobby.all
      render :edit
    end
  end

  def show
    @user = User.find(params[:id])
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
      :instagram,
      hobby_ids: []
    )
  end
end
