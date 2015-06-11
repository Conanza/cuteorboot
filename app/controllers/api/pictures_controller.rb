module Api
  class PicturesController < ApplicationController
    before_action :require_login

    def create
      @picture = current_user.pictures.new(picture_params)

      if @picture.save
        render json: @picture
      else
        render json: @picture.errors.full_messages, status: 422
      end
    end

    def destroy
      @picture = Picture.find(params[:id])
      @picture.destroy

      render json: @picture
    end

    private

    def picture_params
      params.require(:picture).permit(:image_url, :thumb_url)
    end
  end
end
