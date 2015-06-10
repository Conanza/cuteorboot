class UsersController < ApplicationController
  def create
    @vote = Vote.new(vote_params)

    if @vote.save
      render json: @vote
    else
      flash[:errors] = @vote.errors.full_messages
      redirect_to root_url
    end
  end

  private

  def vote_params
    params.require(:vote).permit(:voter_id, :votee_id, :value)
  end
end
