class StaticPagesController < ApplicationController
  def home
  end

  def root
    redirect_to home_url unless current_user
  end
end
