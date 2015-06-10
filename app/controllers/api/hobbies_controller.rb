module Api
  class HobbiesController < ApplicationController
    def index
      @hobbies = Hobby.all

      render json: @hobbies
    end
  end
end
