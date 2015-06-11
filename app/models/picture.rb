class Picture < ActiveRecord::Base
  validates :user, :image_url, :thumb_url, presence: true

  belongs_to :user
end
