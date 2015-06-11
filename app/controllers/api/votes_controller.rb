module Api
  class VotesController < ApplicationController
    before_action :require_login

    def create
      @vote = current_user.given_votes.new(vote_params)

      if @vote.save
        render json: @vote
      else
        # flash[:errors] = @vote.errors.full_messages
        # redirect_to root_url
        render json: @vote.errors.full_messages, status: 422
      end
    end

    private

    def vote_params
      params.require(:vote).permit(:votee_id, :value)
    end
  end
end
